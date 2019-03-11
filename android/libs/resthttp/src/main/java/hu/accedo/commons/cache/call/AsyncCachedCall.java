package hu.accedo.commons.cache.call;

import hu.accedo.commons.logging.L;
import hu.accedo.commons.threading.Cancellable;
import hu.accedo.commons.tools.Callback;

/**
 * Provides a decorator around any arbitrary ASYNC method call, caching whatever it returns to the onSuccess call, by the key provided.
 * If you want to cache async calls without an onFailure clause, simply use null as the onFailure callback.
 *
 * Created by Pásztor Tibor Viktor <tibor.pasztor@accedo.tv> on 01/07/15.
 */
public abstract class AsyncCachedCall<T, E extends Exception> extends BaseCachedCall<T, E>{

    private Callback<T> onSuccess;
    private Callback<E> onFailure;

    /**
     * @param key if the key is null, the caching will be ignored
     * @param onSuccess provide your original success callbacks here.
     * @param onFailure provide your original failure callback here.
     */
    public AsyncCachedCall(Object key, Callback<T> onSuccess, Callback<E> onFailure) {
        super(key);
        this.onSuccess = onSuccess;
        this.onFailure = onFailure;
    }

    /**
     * Override this method, and call your async call inside it, that you want to cache the results of.
     *
     * @param onSuccess make sure to use this success callback in your call.
     * @param onFailure make sure to use this failure callback in your call.
     * @return the Cancellable used for threading in the call.
     */
    protected abstract Cancellable call(Callback<T> onSuccess, Callback<E> onFailure);

    /**
     * Executes the task, and calls the provided onSuccess callback either the results of the call, or a cached version of it, if available.
     * @return the Cancellable used for threading in the call
     */
    public Cancellable execute() {
        //Keycheck
        if(key==null){
            return call(onSuccess, onFailure);
        }

        //Try from cache
        try {
            T result = (T) lruCache.get(key);
            if (result!=null) {
                L.i(TAG, "Returning from cache: "+key);
                if (onSuccess!=null) {
                    onSuccess.execute(result);
                }
                return null;

            }
        }catch (ClassCastException e){
            L.e(e);
        }

        //Fetch and put
        return call(new Callback<T>() {
            @Override
            public void execute(T result) {
                if (result!=null) {
                    lruCache.put(key, result);
                    L.i(TAG, "Caching: " + key);
                }else{
                    L.i(TAG, "Result null, not caching: "+key);
                }

                if (onSuccess!=null) {
                    onSuccess.execute(result);
                }
            }
        }, onFailure);
    }
}
