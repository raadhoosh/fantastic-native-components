package hu.accedo.commons.cache.call;

import hu.accedo.commons.logging.L;

/**
 * Provides a decorator around any arbitrary SYNC method call, caching it's return value by the key provided.
 * If you want to cache non-exception-throwing calls, simply set the generic E parameter as RuntimeException.
 *
 * Created by Pásztor Tibor Viktor <tibor.pasztor@accedo.tv> on 01/07/15.
 */
public abstract class CachedCall<T, E extends Exception> extends BaseCachedCall<T, E>{
    /**
     * @param key if the key is null, caching will be ignored
     */
    public CachedCall(Object key) {
        super(key);
    }

    /**
     * Override this method, and make it do whatever you want to cache the results of.
     * @return the value that will be cached for the given key.
     * @throws E nothing will be cached, if your call throws.
     */
    protected abstract T call() throws E;

    /**
     * Executes the task, and returns either the results of the call, or a cached version of it, if available.
     * @return
     * @throws E
     */
    public T execute() throws E{
        //Keycheck
        if(key==null){
            return call();
        }

        //Try from cache
        T result = null;
        try {
            result = (T) lruCache.get(key);
        }catch (ClassCastException e){
            L.e(e);
        }

        //Fetch and put
        if(result==null){
            result = call();
            if(result!=null){
                lruCache.put(key, result);
                L.i(TAG, "Caching: " + key);
            }else{
                L.i(TAG, "Result null, not caching: "+key);
            }

        }else{
            L.i(TAG, "Returning from cache: "+key);
        }

        return result;
    }
}
