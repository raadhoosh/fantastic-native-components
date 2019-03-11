package hu.accedo.commons.net;

import android.util.Pair;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.Field;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import hu.accedo.commons.logging.L;

/**
 * URL builder, that can be used to construct parameterized, properly urlencoded URLs, with query params.
 *
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class PathUrl {
	private String charset = "UTF-8";
	private String baseUrl;
	private String path;
	private boolean isValid = true;

	private ArrayList<Object> objectParams = new ArrayList<Object>();
	private LinkedHashMap<String, Pair<String, Boolean>> fixedParams = new LinkedHashMap<>();
	private LinkedHashMap<String, Pair<String, Boolean>> queryParams = new LinkedHashMap<>();

	/**
	 * @param charset to be used for URLEncoding
	 * @return this PathUrl instance for chaining
	 */
	public PathUrl setCharset(String charset) {
		this.charset = charset;
		return this;
	}

	/**
	 * @param baseUrl this will be added before the path created: baseUrl + path
	 * @return this PathUrl instance for chaining
	 */
	public PathUrl setBaseUrl(String baseUrl) {
		this.baseUrl = baseUrl;
		return this;
	}

	/**
	 * @param object the public fields of this object will be used to resolve :param inside the given path
	 * @return this PathUrl instance for chaining
	 */
	public PathUrl addObjectParam(Object object){
		if(object!=null) {
			objectParams.add(object);
		}
		return this;
	}

	/**
	 * Overrides a :param inside the given path, with a fixed value. The value will be URLEncoded.
	 * @param key the :param to override
	 * @param value the value to override with
	 * @return this PathUrl instance for chaining
	 */
	public PathUrl addFixedParam(String key, String value){
		if(key!=null) {
			fixedParams.put(key, Pair.create(value, false));
		}
		return this;
	}

	/**
	 * Overrides a :param inside the given path, with a fixed value. The value will NOT be URLEncoded.
	 * @param key the :param to override
	 * @param value the value to override with
	 * @return this PathUrl instance for chaining
	 */
	public PathUrl addEscapedFixedParam(String key, String value){
		if(key!=null) {
			fixedParams.put(key, Pair.create(value, true));
		}
		return this;
	}

	/**
	 * The given key value-pair will be added to the final URL as query params. The value will be URLEncoded.
	 * @param key
	 * @param value
	 * @return this PathUrl instance for chaining
	 */
	public PathUrl addQueryParam(String key, String value){
		if (key != null) {
			queryParams.put(key, new Pair<String, Boolean>(value, false));
		}
		return this;
	}

	/**
	 * The given key value-pair will be added to the final URL as query params. The value will NOT be URLEncoded.
	 * @param key
	 * @param value
	 * @return this PathUrl instance for chaining
	 */
	public PathUrl addEscapedQueryParam(String key, String value){
		if (key != null) {
			queryParams.put(key, new Pair<String, Boolean>(value, true));
		}
		return this;
	}

	/**
	 * Sets this pathUrl to be valid or no. By default, it is valid. This value is ignored by the class itself, and may be used for various purposes.
	 * @param isValid
	 * @return this PathUrl instance for chaining
	 */
	public PathUrl setValidity(boolean isValid) {
		this.isValid = isValid;
		return this;
	}

	/**
	 * @return the validity of this pathUrl. This value is ignored by the class itself, and may be used for various purposes.
	 */
	public boolean isValid() {
		return isValid;
	}

	/**
	 * @param path the path that may or may not contain :params. For example /movie/:id/ where :id is a param that will have to be resolved with either fixed or object params.
	 */
	public PathUrl(String path){
		this.path = path;
	}

	private List<String> getParametersFromPath(String input){
		Pattern pattern = Pattern.compile(":[a-zA-Z._]*");
		Matcher matcher = pattern.matcher(input);

		ArrayList<String> result = new ArrayList<String>();
		while(matcher.find()) {
			result.add(input.substring(matcher.start(), matcher.end()));
		}

		return result;
	}

	private Object getFieldValueByName(Object o, String name){
		try {
			String nameparts[] = name.split(".");
			String namepart;
			if(nameparts.length<2){
				namepart = name;
			}else{
				namepart = nameparts[0];
			}

			Field field = o.getClass().getDeclaredField(namepart);
			field.setAccessible(true);
			Object fieldValue = field.get(o);

			if(nameparts.length<2){
				return fieldValue;
			}else{
				return getFieldValueByName(fieldValue, name.substring(nameparts[0].length()+1));
			}


		} catch (NoSuchFieldException e) {
			L.e(e);
		} catch (IllegalAccessException e) {
			L.e(e);
		} catch (IllegalArgumentException e) {
			L.e(e);
		}
		return null;
	}

	@SuppressWarnings("deprecation")
	private String urlEncode(String input){
		if(input == null)
			return null;

		String result;

		try {
			result = URLEncoder.encode(input, charset);
		} catch (UnsupportedEncodingException e) {
			L.e(e);
			result = URLEncoder.encode(input);
		}

		return result;
	}


	/**
	 * @return the final generalted URL
	 */
	@Override
	public String toString() {
		if(path==null)
			return null;

		String result = path;

		//Process all the parameters in the path
		for(String param : getParametersFromPath(path)){
			Object paramValue = null;
			boolean isParamValueEscaped = false;

			//Try and get this paramValue from the fixedParams
			for (Iterator<Map.Entry<String, Pair<String, Boolean>>> iterator = fixedParams.entrySet().iterator(); iterator.hasNext() && paramValue == null; ) {
				Map.Entry<String, Pair<String, Boolean>> fixedParam = iterator.next();
				if (param.replaceFirst(":", "").equals(fixedParam.getKey().replaceFirst(":", ""))) {
					paramValue = fixedParam.getValue().first;
					isParamValueEscaped = fixedParam.getValue().second;
				}
			}

			//If we didn't have a fixed param, we need to try from the objects
			if (paramValue == null) {
				for (int i = 0; i < objectParams.size() && paramValue == null; i++) {
					paramValue = getFieldValueByName(objectParams.get(i), param.replaceFirst(":", ""));
				}
			}

			//Escape param
			String paramValueString;
			if (paramValue == null) {
				paramValueString = null;
			} else if (isParamValueEscaped) {
				paramValueString = paramValue.toString();
			} else {
				paramValueString = urlEncode(paramValue.toString());
			}

			//Replace param with value (even if it's null)
			result = result.replaceFirst(param, ""+paramValueString);
		}

		//Remove any remaining \\ escapes from the path
		result = result.replaceAll("\\\\", "");

		//Add all the queryParams
		for (Map.Entry<String, Pair<String, Boolean>> entry : queryParams.entrySet()) {
			//First the delimiter
			if (!result.contains("?")) {
				result += "?";
			} else if (!(result.endsWith("&") || result.endsWith("?"))) {
				result += "&";
			}

			//Escape params
			String key;
			String value;
			if(!entry.getValue().second){
				key = urlEncode(entry.getKey());
				value = urlEncode(entry.getValue().first);
			}else{
				key = entry.getKey();
				value = entry.getValue().first;
			}

			//Add params
			result = result + String.format("%s=%s", key, value);
		}

		//Add the baseUrl if any
		if(baseUrl!=null)
			result = baseUrl + result;

		return result;
	}

	@Override
	public int hashCode() {
		return toString().hashCode();
	}

	@Override
	public boolean equals(Object o) {
		String thisString = toString();

		if (thisString == null) {
			return o==null;
		} else if(o!=null) {
			return thisString.equals(o.toString());
		} else {
			return false;
		}
	}
}
