package hu.accedo.commons.tools;

import hu.accedo.commons.logging.L;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.UUID;

import org.apache.commons.io.IOUtils;

import android.content.Context;
import android.os.Environment;

/**
 * @author Sánta Péter <peter.santa@accedo.tv>, Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class DeviceIdentifier {
    private static final String SHAREDPREF_KEY = "DEVICE_ID";
    private static final String FILENAME = "D_ID";
    private static String EXTERNAL_FILE_PATH = File.separator + "Android" + File.separator + "data" + File.separator;
    
    private static String deviceId;

    /**
     * Tries to retrieve any stored device identifier, or generates or stores a new one if necessary.
     *
     * Stores deviceId in internal storage - capable of surviving external storage formatting
     * And also stores on the external storage - capable of surviving app uninstall and reinstall
     *
     * @param context
     * @return
     */
	public static String getDeviceId(Context context) {
	    //Context check
	    if(context==null){
	        throw new NullPointerException("The context provided for DeviceIdentifier.getDeviceId() must not be null.");
	    }
	    
	    //Try from memory
	    if(deviceId!=null){
	        return deviceId;
	    }
	    
	    //Try read from SharedPrefs
	    deviceId = context.getSharedPreferences(SHAREDPREF_KEY, Context.MODE_PRIVATE).getString(SHAREDPREF_KEY, null);
	    if(deviceId!=null){
            return deviceId;
        }
	    
	    //Try read from disk
	    deviceId = readFromFile();
	    if(deviceId!=null){
            return deviceId;
        }
	    
	    //Generate
	    deviceId = UUID.randomUUID().toString();
	    
	    //Store in SharedPrefs
	    context.getSharedPreferences(SHAREDPREF_KEY, Context.MODE_PRIVATE).edit().putString(SHAREDPREF_KEY, deviceId).apply();
	    
	    //Store to disk
	    writeToFile(deviceId);
	    
	    //Return
	    return deviceId;
	}
	
    private static boolean writeToFile(String content) {
        if (Environment.getExternalStorageDirectory() == null) {
            return false;
        }
        
        FileOutputStream fos = null;
        try {
            //Make file and folder
            File file = new File(Environment.getExternalStorageDirectory(), EXTERNAL_FILE_PATH + FILENAME);
            if (!file.exists() && !file.getParentFile().exists()) {
                file.getParentFile().mkdirs();
            }

            //Write
            fos = new FileOutputStream(file);
            IOUtils.write(content, fos);
            return true;
        } catch (Exception e) {
            L.w("Failed to store deviceID on disk. "+e.getMessage());
            return false;
        } finally {
            IOUtils.closeQuietly(fos);
        }
    }
	
    private static String readFromFile() {
        //Check if exists
        if (Environment.getExternalStorageDirectory() == null) {
            return null;
        }
        File file = new File(Environment.getExternalStorageDirectory(), EXTERNAL_FILE_PATH + FILENAME);
        if (!file.exists()) {
            return null;
        }
      
        //Read
        FileInputStream fis = null;
        try {
            fis = new FileInputStream(file);
            return IOUtils.toString(fis);    
        } catch (Exception e) {
            L.w("Failed to read deviceID from disk. "+e.getMessage());
        } finally {
            IOUtils.closeQuietly(fis);
        }
        return null;
    }
}
