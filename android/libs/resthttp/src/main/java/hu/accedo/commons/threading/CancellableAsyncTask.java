package hu.accedo.commons.threading;

import android.os.AsyncTask;

/**
 * Simple AsyncTask subclass, implementing the Cancellable interface.
 *
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public abstract class CancellableAsyncTask<Params, Progress, Result> extends AsyncTask<Params, Progress, Result> implements Cancellable{
    @Override
    public void cancel() {
        cancel(true);
    }    
}
