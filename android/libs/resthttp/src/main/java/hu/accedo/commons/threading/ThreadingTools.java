package hu.accedo.commons.threading;

import java.util.concurrent.FutureTask;

import android.os.AsyncTask;

/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class ThreadingTools {
    /**
     * Tries to cancel the object, whatever it is. Generally used to cancel running background operations.
     * Currently works on: AsyncTask, Cancellable, FutureTask
     * @param object
     * @return
     */
    @SuppressWarnings("rawtypes")
    public static boolean tryCancel(Object object){
        if(object==null){
            return true;
        }
        
        if(object instanceof AsyncTask){
            ((AsyncTask) object).cancel(true);
            return true;
        }else if(object instanceof SafeAsyncTask){
            ((Cancellable) object).cancel();
            return true;
        }else if(object instanceof Cancellable){
            ((Cancellable) object).cancel();
            return true;
        }else if(object instanceof FutureTask){
            ((FutureTask) object).cancel(true);
            return true;
        }
        return false;
    }

    /**
     * Calls ThreadingTools.tryCancel(object) on all its given parameters
     * @param objects the cancellable to cancel.
     */
    public static void tryCancelAll(Object... objects) {
        if(objects!=null){
            for(Object object : objects){
                ThreadingTools.tryCancel(object);
            }
        }
    }
}
