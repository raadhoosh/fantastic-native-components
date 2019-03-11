package hu.accedo.commons.cache.aop;

/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class AspectCacheException extends Exception {
    private static final long serialVersionUID = -8270424529412115437L;
    
    private String message;
    
    public AspectCacheException(String message) {
        this.message = message;
    }
    
    @Override
    public String getMessage() {
        return message;
    }
}