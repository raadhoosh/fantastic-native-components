package hu.accedo.commons.tools;

import java.util.Date;
import java.util.TimeZone;

/**
 * Utility methods for converting UTC to local time.
 *
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public final class DateTools {
    public static final long ONE_DAY_MILLIS = 1000 * 60 * 60 * 24;
    public static final long ONE_HOUR_MILLIS = 1000 * 60 * 60;
    public static final long ONE_MINUTE_MILLIS = 1000 * 60;
    
    /**
     * Takes the modulates the current time by 24 hours, and shifts it with as many days as specified.
     * 
     * @param dayOffset
     * @return timestamp - timestamp%ONE_DAY_MILLIS + ONE_DAY_MILLIS*dayOffset
     */
    public static long getStartOfDayUTC(int dayOffset) {
        long timestamp = System.currentTimeMillis();
        return timestamp - timestamp%ONE_DAY_MILLIS + ONE_DAY_MILLIS*dayOffset;
    }
        
    /**
     * Returns the timezone offset for the device's default timezone. The input is required for deciding if we're in daylight savings or no.
     * @param input
     * @return
     */
    public static long getTimezoneOffset(Date input){
        boolean isInDaylightTime = TimeZone.getDefault().inDaylightTime(input);
        return TimeZone.getDefault().getRawOffset() + (isInDaylightTime? ONE_HOUR_MILLIS : 0);
    }
}