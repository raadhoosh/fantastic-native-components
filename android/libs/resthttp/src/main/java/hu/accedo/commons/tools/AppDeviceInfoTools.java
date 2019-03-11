package hu.accedo.commons.tools;

import java.net.NetworkInterface;
import java.util.Collections;
import java.util.List;

import android.content.Context;
import android.content.pm.PackageManager.NameNotFoundException;
import android.content.res.Configuration;

/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class AppDeviceInfoTools {
    
	private static Boolean tablet;
	public static boolean isTablet(Context context){
		if(tablet!=null)
			return tablet;
		
		if(context==null)
			return false;
		
		int screensizemask = context.getResources().getConfiguration().screenLayout & Configuration.SCREENLAYOUT_SIZE_MASK;
		tablet = (screensizemask == Configuration.SCREENLAYOUT_SIZE_LARGE || screensizemask == Configuration.SCREENLAYOUT_SIZE_XLARGE);
		return tablet;
	}
	
	public static String getApplicationVersionName(Context context) {
		if(context==null)
			return null;
		
		try {
			return context.getPackageManager().getPackageInfo(context.getPackageName(), 0).versionName;
		} catch (NameNotFoundException e) {
			return null;
		}
	}

	public static int getApplicationVersionCode(Context context) {
		if(context==null)
			return -1;
		
		try {
			return context.getPackageManager().getPackageInfo(context.getPackageName(), 0).versionCode;
		} catch (NameNotFoundException e) {
			return -1;
		}
	}
		
	public static String getMACAddress() {
		return getMACAddress(null);
	}
	public static String getMACAddress(String interfaceName) {
		try {
			List<NetworkInterface> interfaces = Collections.list(NetworkInterface.getNetworkInterfaces());
			for (NetworkInterface intf : interfaces) {
				if (interfaceName != null && !intf.getName().equalsIgnoreCase(interfaceName)) {
					continue;
				}
				byte[] mac = intf.getHardwareAddress();
				if (mac == null)
					if(interfaceName == null)
						continue;
					else
						return "";
				StringBuilder buf = new StringBuilder();
				for (int idx = 0; idx < mac.length; idx++)
					buf.append(String.format("%02X:", mac[idx]));
				if (buf.length() > 0)
					buf.deleteCharAt(buf.length() - 1);
				return buf.toString().replaceAll(":", "-");
			}
		} catch (Exception ex) {} // for now eat exceptions
		return "";
	}
}
