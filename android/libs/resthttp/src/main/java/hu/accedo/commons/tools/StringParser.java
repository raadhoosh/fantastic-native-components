package hu.accedo.commons.tools;


/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class StringParser {
	/**
	 * Tries to parse the given string into an integer.
	 * On failure, instead of throwing a NumberFormatException, returns defaultValue.
	 * 
	 * @param input
	 * @param defaultValue
	 * @return
	 */
	public static int tryParseInt(String input, int defaultValue){
		try {
			return Integer.parseInt(input);
		} catch (Exception e) {
			return defaultValue;
		}
	}
	
	/**
	 * Tries to parse the given string into an Integer object.
	 * On failure, instead of throwing a NumberFormatException, returns defaultValue.
	 * 
	 * @param input
	 * @param defaultValue
	 * @return
	 */
	public static Integer tryParseInteger(String input, Integer defaultValue){
		try {
			return Integer.parseInt(input);
		} catch (Exception e) {
			return defaultValue;
		}
	}
	
	/**
	 * Tries to parse the given string into a long.
	 * On failure, instead of throwing a NumberFormatException, returns defaultValue.
	 * 
	 * @param input
	 * @param defaultValue
	 * @return
	 */
	public static long tryParseLong(String input, long defaultValue){
		try {
			return Long.parseLong(input);
		} catch (Exception e) {
			return defaultValue;
		}
	}
	
	/**
	 * Tries to parse the given string into a double.
	 * On failure, instead of throwing a NumberFormatException, returns defaultValue.
	 * 
	 * @param input
	 * @param defaultValue
	 * @return
	 */
	public static double tryParseDouble(String input, double defaultValue){
		try {
			return Double.parseDouble(input);
		} catch (Exception e) {
			return defaultValue;
		}
	}

	/**
     * Tries to create a new String instance from the given input data and encoding.
     * On failure, instead of throwing a NullPointer or UnsupportedEncodingException, returns defaultValue.
     * 
     * @param input
     * @param encoding
     * @param defaultValue
     * @return
     */
	public static String tryCreateString(byte[] input, String encoding, String defaultValue){
	    try {
            return new String(input, encoding);
        } catch (Exception e) {
            return defaultValue;
        }
	}
}
