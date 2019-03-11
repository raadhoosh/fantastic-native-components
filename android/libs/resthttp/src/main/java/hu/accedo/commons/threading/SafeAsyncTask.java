package hu.accedo.commons.threading;

import android.os.AsyncTask;

import java.util.concurrent.Executor;

/**
 * A special, Exception safe AsyncTask.
 *
 * The results of background exceution are returned in the onSuccess callback,
 * while any exceptions thrown are returned in the onFailure callback.
 *
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
@SuppressWarnings("unchecked")
public abstract class SafeAsyncTask<Params, Progress, Result> implements Cancellable {
    private AsyncTask<Params, Progress, Result> asyncTask;

    @Override
    public void cancel() {
        if (asyncTask != null) {
            asyncTask.cancel(true);
            asyncTask = null;
        }
    }

    public SafeAsyncTask<Params, Progress, Result> executeAndReturn(Params... params) {
        return executeAndReturn(AsyncTask.THREAD_POOL_EXECUTOR, params);
    }

    public SafeAsyncTask<Params, Progress, Result> executeAndReturn(Executor executor, Params... params) {
        cancel();
        asyncTask = new AsyncTask<Params, Progress, Result>() {
            private Exception caughtException;
            
            @Override
            protected Result doInBackground(final Params... params) {
                try {
                    return call(params);
                } catch (Exception e) {
                    caughtException = e;
                    return null;
                }
            }
            @Override
            protected void onPostExecute(final Result result) {
                if (caughtException != null) {
                    onFailure(caughtException);
                } else {
                    onSuccess(result);
                }
            }
            
            //Wrap asynctask junk
            @Override
            protected void onCancelled() {
                SafeAsyncTask.this.onCancelled();
            }
            @Override
            protected void onCancelled(Result result) {
                SafeAsyncTask.this.onCancelled(result);
            }
            @Override
            protected void onPreExecute() {
                SafeAsyncTask.this.onPreExecute();
            }
            @Override
            protected void onProgressUpdate(Progress... values) {
                SafeAsyncTask.this.onProgressUpdate(values);
            }
        };
        asyncTask.executeOnExecutor(executor, params);
        return this;
    }

    /*
     * --------------- Asynctask wrapper methods ---------------
     */

    /**
     * Runs on the UI thread before {@link #call}.
     *
     * @see #onPostExecute
     * @see #doInBackground
     */
    protected void onPreExecute() {}

    /**
     * Runs on the UI thread after {@link #publishProgress} is invoked.
     * The specified values are the values passed to {@link #publishProgress}.
     *
     * @param values The values indicating progress.
     *
     * @see #publishProgress
     * @see #doInBackground
     */
    protected void onProgressUpdate(Progress... values) {}

    /**
     * <p>Applications should preferably override {@link #onCancelled(Object)}.
     * This method is invoked by the default implementation of
     * {@link #onCancelled(Object)}.</p>
     *
     * <p>Runs on the UI thread after {@link #cancel(boolean)} is invoked and
     * {@link #doInBackground(Object[])} has finished.</p>
     *
     * @see #onCancelled(Object)
     * @see #cancel(boolean)
     * @see #isCancelled()
     */
    protected void onCancelled() {}

    /**
     * <p>Runs on the UI thread after {@link #cancel(boolean)} is invoked and
     * {@link #doInBackground(Object[])} has finished.</p>
     *
     * <p>The default implementation simply invokes {@link #onCancelled()} and
     * ignores the result. If you write your own implementation, do not call
     * <code>super.onCancelled(result)</code>.</p>
     *
     * @param result The result, if any, computed in
     *               {@link #doInBackground(Object[])}, can be null
     *
     * @see #cancel(boolean)
     * @see #isCancelled()
     */
    protected void onCancelled(Result result) {}

    /**
     * Override this method to perform a computation on a background thread. The
     * specified parameters are the parameters passed to {@link #execute} by the caller of this task.
     *
     * This method can call {@link #publishProgress} to publish updates on the UI thread.
     *
     * @param params The parameters of the task.
     * @return A result, defined by the subclass of this task.
     * @throws Exception
     *
     * @see #onPreExecute()
     * @see #onPostExecute
     * @see #publishProgress
     */
    public abstract Result call(Params... params) throws Exception;

    /**
     * <p>Runs on the UI thread after {@link #call}. The
     * specified result is the value returned by {@link #call}.</p>
     *
     * <p>This method won't be invoked if the task was cancelled.</p>
     *
     * @param result The result of the operation computed by {@link #call}.
     *
     * @see #onPreExecute
     * @see #call
     * @see #onCancelled(Object)
     */
    public void onSuccess(Result result) {}

    /**
     * <p>Runs on the UI thread after {@link #call}. The
     * specified result is the exception thrown by {@link #call}.</p>
     *
     * <p>This method won't be invoked if the task was cancelled.</p>
     *
     * @param result The exception thrown of the operation {@link #call}.
     *
     * @see #onPreExecute
     * @see #call
     * @see #onCancelled(Object)
     */
    public void onFailure(Exception caughtException) {}
}
