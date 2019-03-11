package hu.accedo.commons.logging;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.pm.PackageManager.NameNotFoundException;
import android.util.Log;

/**
 * Wrapper created around android.util.Log, to have some generic control over when and how things get logged.
 *
 * @author Sánta Péter <peter.santa@accedo.tv>, Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public abstract class L {
	// version 1.3.0
	private static final String LOG_FORMAT = "%1$s\n%2$s";
	private static String LOG_TAG = "Accedo";
	private static boolean LOG_ENABLED = true;
	private static LogListener logListener;

	/**
	 * Can be used to sign up for any logs sent. Only one listener can be set at a time.
	 *
	 * @param logListener
	 */
	public static void setLogListener(LogListener logListener) {
		L.logListener = logListener;
	}

	/**
	 * Changes the default tag this class uses, if none is specified.
	 *
	 * !! This method should only be called in Application.onCreate() !!
	 * @param tag
	 */
	public static void setDefaultTag(String tag) {
		L.LOG_TAG = tag;
	}

	/**
	 * Enables or disables LogCat logging any incoming logs.
	 *
	 * !! This method should only be called in Application.onCreate() !!
	 * @param enabled
	 */
	public static void setEnabled(boolean enabled){
		L.LOG_ENABLED = enabled;
	}

	/**
	 * Enables or disables LogCat logging of any incoming logs, based on the signing key used to sign the app.
	 *
	 * !! This method should only be called in Application.onCreate() !!
	 * @param context
	 */
	public static void setEnabled(Context context){
		// See if we're a debug or a release build
		try {
		    PackageInfo packageInfo = context.getPackageManager().getPackageInfo(context.getPackageName(), PackageManager.GET_SIGNATURES);
		    if (packageInfo.signatures.length>0) {
		        String signature = new String(packageInfo.signatures[0].toByteArray());
		        LOG_ENABLED = signature.contains("Android Debug");
		    }
		} catch (NameNotFoundException e) {
		    LOG_ENABLED = false;
		    L.e(e);
		}
	}
	
	private L() {}

	// Default tags
	//-----------------------------------------------------------------
	public static void d(String message, Object... args) {
		log(null, Log.DEBUG, null, message, args);
	}

	public static void i(String message, Object... args) {
		log(null, Log.INFO, null, message, args);
	}

	public static void w(String message, Object... args) {
		log(null, Log.WARN, null, message, args);
	}

	public static void w(Throwable ex) {
		log(null, Log.WARN, ex, null);
	}

	public static void e(String message, Object... args) {
		log(null, Log.ERROR, null, message, args);
	}
	
	public static void e(Throwable ex) {
		log(null, Log.ERROR, ex, null);
	}

	public static void e(Throwable ex, String message, Object... args) {
		log(null, Log.ERROR, ex, message, args);
	}
	
	// Custom tags
	//-----------------------------------------------------------------
	public static void d(String TAG, String message, Object... args) {
		log(TAG, Log.DEBUG, null, message, args);
	}

	public static void i(String TAG, String message, Object... args) {
		log(TAG, Log.INFO, null, message, args);
	}

	public static void w(String TAG, String message, Object... args) {
		log(TAG, Log.WARN, null, message, args);
	}

	public static void w(String TAG, Throwable ex) {
		log(TAG, Log.WARN, ex, null);
	}

	public static void e(String TAG, String message, Object... args) {
		log(TAG, Log.ERROR, null, message, args);
	}
	
	public static void e(String TAG, Throwable ex) {
		log(TAG, Log.ERROR, ex, null);
	}

	public static void e(String TAG, Throwable ex, String message, Object... args) {
		log(TAG, Log.ERROR, ex, message, args);
	}
	
	public static void wtf(String message, Object... args) {
		e(message, args);
	}
	
	public static void wtf(Throwable ex) {
		e(ex);
	}
	
	public static void wtf(Throwable ex, String message, Object... args) {
		e(ex, message, args);
	}
	
	public static void wtf(String TAG, String message, Object... args) {
		e(TAG, message, args);
	}
	
	public static void wtf(String TAG, Throwable ex) {
		e(TAG, ex);
	}

	public static void wtf(String TAG, Throwable ex, String message, Object... args) {
		e(TAG, ex, message, args);
	}
	
	// General call
	//-----------------------------------------------------------------
	private static void log(String TAG, int priority, Throwable ex, String message, Object... args) {
		if (LOG_ENABLED) {
			if(TAG==null) {
				TAG = LOG_TAG;
			}
			
			if (args!=null && args.length > 0) {
				message = String.format(message, args);
			}

			String log;
			if (ex == null) {
				log = message;
			} else {
				String logMessage = message == null ? ex.getMessage() : message;
				String logBody = Log.getStackTraceString(ex);
				log = String.format(LOG_FORMAT, logMessage, logBody);
			}
			Log.println(priority, TAG, log);
			if(logListener!=null)
				logListener.onLog(log);
		}
	}

	public static interface LogListener {
		public void onLog(String message);
	}
}
