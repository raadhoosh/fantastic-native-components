package hu.accedo.commons.cache.aop;

import hu.accedo.commons.logging.L;
import hu.accedo.commons.tools.Callback;
import hu.accedo.commons.tools.CollectionTools;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;

import android.text.TextUtils;

/**
 * Class responsible for handling the execution of methods annotated with the hu.accedo.commons.cache.aop.Cached annotation.
 * 
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
@Aspect
public class AspectCache {
    private static final String TAG = "CacheAspect";
    private static CacheEngine cacheEngine = new DefaultAspectCacheEngine();
    
    /**
     * Used to override the default CacheEngine to be used for caching annotated methods. If used, it should be specified in the Application's onCreate method.  
     * @param cacheEngine
     */
    public static void setCacheEngine(CacheEngine cacheEngine){
        AspectCache.cacheEngine = cacheEngine;
    }
    
    /**
     * Clears the currently active CacheEngine
     */
    public static void clear(){
        cacheEngine.clear();
    }
    
    @Around("execution(@hu.accedo.commons.cache.aop.Cached * *(..))")
    public Object weaveJoinPoint(ProceedingJoinPoint joinPoint) throws Throwable {
        //Get key
        AspectCacheKey key = new AspectCacheKey(joinPoint);

        //Validate key, handle sync, handle async
        try{
            if(!key.isValid()){
                throw new AspectCacheException("Invalid key.");

            }else if (!TextUtils.isEmpty(key.getCallbackName())) {
                return handleCallbackCaching(key, joinPoint);

            }else{
                return handleFlatCaching(key, joinPoint);    
            }
            
        }catch(AspectCacheException e){
            L.w(TAG, e.getMessage() + " Ignoring cache for: " + key);
            return joinPoint.proceed();
        }
    }
    
    private Object handleFlatCaching(AspectCacheKey key, ProceedingJoinPoint joinPoint) throws Throwable {
        //Try from cache
        Object cached = cacheEngine.get(key); 
        if(cached!=null){
            L.d(TAG, "Returning from cache: "+key);
            return cached;
        }
        
        //Run, cache & return
        Object result = joinPoint.proceed();
        if(result!=null){
            L.d(TAG, "Caching results of: "+key);
            cacheEngine.put(key, result);
        }else{
            L.d(TAG, "Result null, not caching: "+key);
        }
        return result;
    }
    
    @SuppressWarnings({ "rawtypes", "unchecked" }) //Handling ClassCastExceptions manually
    private Object handleCallbackCaching(final AspectCacheKey key, ProceedingJoinPoint joinPoint) throws Throwable {
        MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
        
        //Get callback param, if any
        int callbackIndex = CollectionTools.linearSearch(methodSignature.getParameterNames(), key.getCallbackName());
        if(callbackIndex<0){
            throw new AspectCacheException("Annotated callback \""+key.getCallbackName()+"\" doesn't exist.");
        }
        Object callbackObject = joinPoint.getArgs()[callbackIndex];
        if(!(callbackObject instanceof Callback)){
            throw new AspectCacheException("Annotated callback \""+key.getCallbackName()+"\" is not an instance of hu.accedo.commons.tools.Callback.");
        }
        final Callback originalCallback = (Callback) callbackObject;
        
        //Try return from cache
        Object cached = cacheEngine.get(key); 
        if(cached!=null){
            try{
                if(originalCallback!=null){
                    originalCallback.execute(cached);
                }
                L.d(TAG, "Returning from cache: "+key);
            }catch(ClassCastException e){
                cacheEngine.remove(key);
                throw new AspectCacheException("Annotated callback \""+key.getCallbackName()+"\" is of the wrong return type. Removing entry.");
            }
            return null;
        }
        
        //Create wrapper callback, that caches and returns
        Callback wrappedCallback = new Callback() {
            @Override
            public void execute(Object result) {
                //Put in cache
                if(result!=null){
                    cacheEngine.put(key, result);
                    L.d(TAG, "Caching results of: "+key);
                }else{
                    L.d(TAG, "Result null, not caching: "+key);
                }

                //No need to try for ClassCastException here, because we're calling the original callback with the original result
                if(originalCallback!=null){
                    originalCallback.execute(result);
                }
            }
        };
        
        //Inject wrapped callback and run
        Object[] newArgs = joinPoint.getArgs().clone();
        newArgs[callbackIndex] = wrappedCallback;
        return joinPoint.proceed(newArgs);
    }

    public static interface CacheEngine {
        public Object get(AspectCacheKey key);
        public void put(AspectCacheKey key, Object value);
        public void remove(AspectCacheKey key);
        public void clear();
    }
}