package hu.accedo.commons.net;

/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public interface ThrowingParser<I, O, E extends Exception> {
    /**
     * Parses <I>, into <O>, or throws an <E> exception if any error occures
     *
     * @param <I> The input type
     * @param <O> The output type
     * @throws <E> The error type
     */
    public O parse(I input) throws E;
}
