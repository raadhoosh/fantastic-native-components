package hu.accedo.commons.cache.aop;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Any method annotated with this annotation will be response cached, using it's parameters specified in the value field as a cache key.
 * If the given method is async, and it returns it's response through a callback parameter, that callback parameter can also be specified in the callback field.
 * However, that callback must be an instance of hu.accedo.commons.tools.Callback.
 *
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Cached {
    /**
     * @return The names of the parameters used for forming the cache key. At least one of them should have a non-null value for caching to work.
     */
    String[] value() default {};
    /**
     * @return The names of the methods of the hosting class to also be included for the generation of the cache key
     */
    String[] method() default {};
    /**
     * @return The name of the callback parameter if the annotated method is an async one.
     */
    String callback() default "";
    /**
     * @return The amount of time in milliseconds the results of this method should be cached. Default is 0, which means indefinite.
     */
    long expiry() default 0;
}