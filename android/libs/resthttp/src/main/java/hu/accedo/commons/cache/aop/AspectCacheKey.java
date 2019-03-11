package hu.accedo.commons.cache.aop;

import android.text.TextUtils;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.reflect.MethodSignature;

import java.io.Serializable;
import java.lang.reflect.Method;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Map.Entry;

import hu.accedo.commons.tools.CollectionTools;

/**
 * Derived from the ProceedingJoinPoint of the execution of a cached method. 
 * Contains the full name, signature, and path of the cached methods, it's parameters marked to be used for caching, cache expiration, and the name of callback for returning the results if any. 
 *
 * Implements equals according to it's stored valued, so it can be used as a unique identifier for the given methodcall, thus as a key for caching.
 *
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class AspectCacheKey implements Serializable {
    private static final long serialVersionUID = -4405681394586912717L;

    private String fullName;
    private String shortName;
    private String callbackName;
    private long expiry;
    private LinkedHashMap<String, Object> params;
    private boolean valid = true;

    /**
     * @return The name and signature of the method being cached, including the full path of the containing class aswell.
     */
    public String getFullName() {
        return fullName;
    }
    /**
     * @return The short name and signature of the method being cached. Mainly just used for logging.
     */
    public String getShortName() {
        return shortName;
    }
    /**
     * @return The name of the callback the cached method returns it's results through, if the given method is an async one. Can be null or empty. 
     */
    public String getCallbackName() {
        return callbackName;
    }
    /**
     * @return The amount of time in milliseconds the results of this method should be cached. Default is 0, which means indefinite.
     */
    public long getExpiry() {
        return expiry;
    }
    /**
     * @return The names and values of the parameters used for forming the cache key.
     */
    public Map<String, Object> getParams() {
        return params;
    }
    /**
     * @return true, if the key is valid, and should be cached.
     */
    public boolean isValid() {
        return valid;
    }

    public AspectCacheKey(ProceedingJoinPoint joinPoint) {
        //Extract info from the joinPoint
        MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();
        Cached annotation = (Cached) methodSignature.getMethod().getAnnotation(Cached.class);

        //Get names && callback && validity
        this.fullName = joinPoint.toLongString();
        this.shortName = methodSignature.getDeclaringType().getSimpleName()+"."+methodSignature.getName();
        this.callbackName = annotation.callback();
        this.expiry = annotation.expiry();

        //Get params
        boolean allParamsNull = true;
        this.params = new LinkedHashMap<String, Object>();
        for(String parameter : annotation.value()){
            int i = CollectionTools.linearSearch(methodSignature.getParameterNames(), parameter);
            if(i>=0){
                allParamsNull &= joinPoint.getArgs()[i]==null;
                params.put(methodSignature.getParameterNames()[i], joinPoint.getArgs()[i]);
            }else{
                params.put(parameter, "MISSING");
                valid = false;
            }
        }

        //Get method params
        for(String methodName : annotation.method()){
            //Add "()" to methodNames where it is not given
            if(!methodName.contains("(")){
                methodName+="()";
            }

            //Invoke and store
            try{
                Object methodParam = invokeMethod(methodName, joinPoint);
                params.put(methodName, methodParam);
                allParamsNull &= methodParam==null;
            }catch (AspectCacheException e){
                params.put(methodName, e.getMessage());
                valid = false;
            }
        }

        //If there are parameters, at least one of them should be non-null
        if(annotation.value().length>0 && allParamsNull){
            valid = false;
        }
    }

    private Object invokeMethod(String methodName, JoinPoint joinPoint) throws AspectCacheException {
        MethodSignature methodSignature = (MethodSignature) joinPoint.getSignature();

        //Resolve invoke parameters
        Class<?>[] paramTypes = new Class<?>[0];
        Object[] paramValues = new Object[0];

        //Check method string format
        if(!methodName.trim().matches("^[^()]+\\([^()]*\\)$")){
            throw new AspectCacheException("INVALID_METHOD");
        }

        //Split the method name upto {name, param1, param2...} name is always present
        String[] regexpSplit = methodName.split("[(,)]");
        methodName = regexpSplit[0];
        paramTypes = new Class<?>[regexpSplit.length-1];
        paramValues = new Object[regexpSplit.length-1];

        //Evaluate params
        for (int i = 1; i < regexpSplit.length; i++) {
            //Look them up one by one inside the joinPoint parameters, and throw if any can't be resolved
            String methodParamName = regexpSplit[i];
            int index = CollectionTools.linearSearch(methodSignature.getParameterNames(), methodParamName.trim());
            if (index >= 0) {
                paramTypes[i-1] = methodSignature.getParameterTypes()[index];
                paramValues[i-1] = joinPoint.getArgs()[index];
            } else {
                throw new AspectCacheException("MISSING_PARAM");
            }
        }

        //Call, and throw if failure
        try {
            Method method = joinPoint.getSignature().getDeclaringType().getDeclaredMethod(methodName, paramTypes);
            method.setAccessible(true);
            return method.invoke(joinPoint.getTarget(), paramValues);

        } catch (Exception e) {
            throw new AspectCacheException("MISSING_METHOD");
        }
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(shortName);
        sb.append("(");
        int count = 0;
        for(Entry<String, Object> entry : params.entrySet()){
            sb.append(entry.getKey());
            sb.append("=");
            sb.append(entry.getValue());
            if(count < params.size() - 1){
                sb.append(", ");
            }

            count++;
        }
        sb.append(")");
        if(!TextUtils.isEmpty(callbackName)){
            sb.append("--->");
            sb.append(callbackName);
            sb.append(".execute()");
        }

        return sb.toString();
    }

    // Studio generated ugly, but good stuff
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AspectCacheKey that = (AspectCacheKey) o;

        if (expiry != that.expiry) return false;
        if (fullName != null ? !fullName.equals(that.fullName) : that.fullName != null)
            return false;
        if (shortName != null ? !shortName.equals(that.shortName) : that.shortName != null)
            return false;
        if (callbackName != null ? !callbackName.equals(that.callbackName) : that.callbackName != null)
            return false;
        if (params != null ? !params.equals(that.params) : that.params != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = fullName != null ? fullName.hashCode() : 0;
        result = 31 * result + (shortName != null ? shortName.hashCode() : 0);
        result = 31 * result + (callbackName != null ? callbackName.hashCode() : 0);
        result = 31 * result + (int) (expiry ^ (expiry >>> 32));
        result = 31 * result + (params != null ? params.hashCode() : 0);
        return result;
    }
}