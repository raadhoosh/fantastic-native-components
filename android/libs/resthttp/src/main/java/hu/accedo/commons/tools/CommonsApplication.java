package hu.accedo.commons.tools;

import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.os.Bundle;

/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class CommonsApplication extends Application implements Application.ActivityLifecycleCallbacks{
    private static Context mContext;
    private int activityCount;

    /**
     * Return the context of the single, global Application object of the current process, that was stored in Application.onCreate(). This generally should only be used
     * if you need a Context whose lifecycle is separate from the current context, that is tied to the lifetime of the process rather than the current component. \n\n
     *
     * Should NOT be used for inflating UI, showing Toast messages, registering from broadcast events.. etc.
     *
     * @return
     */
    public static Context getContext(){
        return mContext;
    }

    public void onCreate(){
        super.onCreate();
        mContext = getApplicationContext();
        registerActivityLifecycleCallbacks(this);
    }

    /**
     * Called when the first Activity of the application is started
     */
    protected void onStart(){

    }

    /**
     * Called when all of the Activities of the application are stopped
     */
    protected void onStop(){

    }

    @Override
    public void onActivityStarted(Activity activity) {
        if (activityCount==0){
            onStart();
        }
        activityCount++;
    }

    @Override
    public void onActivityStopped(Activity activity) {
        activityCount--;
        if(activityCount==0){
            onStop();
        }
    }

    //Not needed, but present
    @Override
    public void onActivityCreated(Activity activity, Bundle savedInstanceState) {
    }
    @Override
    public void onActivityResumed(Activity activity) {
    }
    @Override
    public void onActivityPaused(Activity activity) {
    }
    @Override
    public void onActivitySaveInstanceState(Activity activity, Bundle outState) {
    }
    @Override
    public void onActivityDestroyed(Activity activity) {
    }
}
