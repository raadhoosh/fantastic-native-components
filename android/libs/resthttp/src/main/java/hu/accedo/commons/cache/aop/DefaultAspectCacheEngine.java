package hu.accedo.commons.cache.aop;

import hu.accedo.commons.cache.aop.AspectCache.CacheEngine;
import android.util.LruCache;

/**
 * Default implementation for AspectCache.CacheEngine. It is based on a simple LruCache with a size of 100, but it does support expiry times.
 * If the expiry time is not defined or 0, it will be ignored.
 * 
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class DefaultAspectCacheEngine implements CacheEngine {
    private static LruCache<AspectCacheKey, AspectCacheValue> responseCache = new LruCache<AspectCacheKey, AspectCacheValue>(100);

    @Override
    public Object get(AspectCacheKey key) {
        AspectCacheValue aspectCacheValue = responseCache.get(key);
        
        if(aspectCacheValue!=null && aspectCacheValue.isValid()){
            return aspectCacheValue.value;
        }
        
        return null;
    }

    @Override
    public void put(AspectCacheKey key, Object value) {
        responseCache.put(key, new AspectCacheValue(value, key.getExpiry()));
    }

    @Override
    public void remove(AspectCacheKey key) {
        responseCache.remove(key);
    }
    
    @Override
    public void clear() {
        responseCache.evictAll();
    }
    
    /**
     * Wrapper class for the value, to include expiration
     * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
     */
    private static class AspectCacheValue {
        final Object value;
        final long savedAt;
        final long validity;
        
        boolean isValid(){
            if(validity==0){
                return true;
            }
            
            return (savedAt+validity) > System.currentTimeMillis();
        }
        
        public AspectCacheValue(Object value, long validity) {
            this.value = value;
            this.savedAt = System.currentTimeMillis();
            this.validity = validity;
        }
    }
}