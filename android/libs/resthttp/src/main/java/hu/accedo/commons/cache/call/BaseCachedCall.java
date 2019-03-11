package hu.accedo.commons.cache.call;

import android.util.LruCache;

/**
 * Base class for CachedCall and AsyncCachedCall, storing the shared LruCache instance that they use.
 *
 * Created by Pásztor Tibor Viktor <tibor.pasztor@accedo.tv> on 01/07/15.
 */
abstract class BaseCachedCall<T, E extends Exception> {
    protected static final String TAG = "CachedCall";
    protected static final LruCache<Object, Object> lruCache = new LruCache<>(300);

    /**
     * Calls resize(size) on the lruCache backing CachedCall and AsyncCachedCall.
     * If you intend to use this, do so at either service creation, or in the onCreate of your Application.
     *
     * @param size
     */
    public static void setCacheSize(int size){
        lruCache.resize(size);
    }

    protected Object key;

    public BaseCachedCall(Object key) {
        this.key = key;
    }
}
