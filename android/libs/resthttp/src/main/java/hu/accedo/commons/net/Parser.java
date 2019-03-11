package hu.accedo.commons.net;

/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public interface Parser<I, O> {
    /**
     * Parses <I>, into <O>
     *
     * @param <I> The input type
     * @param <O> The output type
     */
    public O parse(I input);
}
