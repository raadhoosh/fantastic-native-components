package hu.accedo.commons.net;

import hu.accedo.commons.logging.L;
import hu.accedo.commons.types.Triplet;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Map;
import java.util.Map.Entry;

/**
 * Builder for creating application/x-www-form-urlencoded POST payloads.
 *
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class PostBody {
	private String charset = "UTF-8";
	private ArrayList<Triplet<String, String, Boolean>> queryParams = new ArrayList<Triplet<String, String, Boolean>>();

	/**
	 * @param charset the character set to be used while URL encoding. Default is "UTF-8"
	 * @return
	 */
	public PostBody setCharset(String charset) {
		this.charset = charset;
		return this;
	}

	/**
	 * URL Encodes, and adds a key-value pair to the payload.
	 * @param key
	 * @param value
	 * @return
	 */
	public PostBody addParam(String key, String value){
		queryParams.add(new Triplet<String, String, Boolean>(key, value, false));
		return this;
	}

	/**
	 * Adds a key-value pair to the payload. The key or the value WILL NOT be url-encoded.
	 * @param key
	 * @param value
	 * @return
	 */
	public PostBody addEscapedParam(String key, String value){
	    queryParams.add(new Triplet<String, String, Boolean>(key, value, true));
        return this;
    }

	/**
	 * URL Encodes, and adds the provided key-value pairs to the payload.
	 * @param params
	 * @return
	 */
	public PostBody addParams(Map<String, String> params){
		if(params!=null){
			for(Entry<String, String> entry : params.entrySet()){
				addParam(entry.getKey(), entry.getValue());
			}
		}
		return this;
	}

	/**
	 * Adds the provided key-value pairs to the payload. The keys and the values WILL NOT be url-encoded.
	 * @param params
	 * @return
	 */
	public PostBody addEscapedParams(Map<String, String> params){
		if(params!=null){
			for(Entry<String, String> entry : params.entrySet()){
				addEscapedParam(entry.getKey(), entry.getValue());
			}
		}
		return this;
	}
	
	public PostBody(){
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
	 * @return the constructed POST payload.
	 */
	@Override
	public String toString() {
		String result = "";
		for (Triplet<String, String, Boolean> triplet: queryParams) {
		    //Delimiter
			if (!result.isEmpty() && !result.endsWith("&")) {
				result += "&";
			}
			
			//Escape params
			String key;
			String value;
			if(!triplet.third){
    			key = urlEncode(triplet.first);
    			value = urlEncode(triplet.second);
			}else{
			    key = triplet.first;
                value = triplet.second;
			}
			
			//Add params
			result = result + String.format("%s=%s", key, value);
		}
		
		return result;
	}
	
	@Override
	public boolean equals(Object o) {
		String thisString = toString();
		
		if(thisString==null)
			return o==null;
		else if(o!=null)
			return thisString.equals(o.toString());
		else
			return false;
	}
}
