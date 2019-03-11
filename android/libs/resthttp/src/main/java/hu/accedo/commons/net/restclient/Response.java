package hu.accedo.commons.net.restclient;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import org.apache.commons.io.IOUtils;

import java.net.HttpURLConnection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import hu.accedo.commons.logging.L;
import hu.accedo.commons.net.Parser;
import hu.accedo.commons.net.ThrowingParser;
import hu.accedo.commons.net.restclient.RestClient.LogLevel;
import hu.accedo.commons.tools.HttpTools;
import hu.accedo.commons.tools.StringParser;

/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class Response {
	private int code = -1;
	private byte[] response;
    private HttpURLConnection httpUrlConnection;
    private String charset;
    private String url;
    private Map<String, List<String>> headers;
    
    /**
     * @return the response code, or -1 if no connection was made
     */
    public int getCode() {
		return code;
	}
    
    /**
     * @return the response body, string encoded with the charset of the RestClient instance, that created this Response
     */
    public String getText() {
        return StringParser.tryCreateString(response, charset, null);
	}
    
    /**
     * @return the raw response body
     */
    public byte[] getRawResponse() {
    	return response;
    }
    
    /**
     * @return true, if the response code is 200 or 204
     */
    public boolean isSuccess() {
    	return code==200 || code==204;
    }
    
    /**
     * @return the url fetched
     */
    public String getUrl() {
    	return url;
    }

    /**
     * @return a map of response headers, or an empty map if no connection was established (never null)
     */
    public Map<String, List<String>> getHeaders() {
        return headers;
    }

    /**
     * @return the HttpURLConnection behind the RestClient instance, that created this Response
     */
    public HttpURLConnection getUrlConnection() {
		return httpUrlConnection;
	}
    
    public Response(HttpURLConnection httpUrlConnection, String url, String charset, LogLevel logLevel){
    	this.httpUrlConnection = httpUrlConnection;
    	this.url = url;
    	this.charset = charset;
    	
    	//Code
    	try{
    		code = httpUrlConnection.getResponseCode();
    	}catch(Exception e){}
    	
    	//Body
    	try{
    		response = IOUtils.toByteArray(httpUrlConnection.getInputStream());
    	}catch(Exception e1){
    		try{
    			response = IOUtils.toByteArray(httpUrlConnection.getErrorStream());
    		}catch(Exception e2){}
    	}

        //Headers
        if (httpUrlConnection != null && httpUrlConnection.getHeaderFields() != null) {
            headers = new HashMap<>(httpUrlConnection.getHeaderFields());
        } else {
            headers = new HashMap<>();
        }

        //Agressive closing
    	try{
    	    IOUtils.closeQuietly(httpUrlConnection.getInputStream());
    	}catch(Exception e){
    	}
    	try{
            IOUtils.closeQuietly(httpUrlConnection.getErrorStream());
        }catch(Exception e){
        }
    	
    	//Logging
    	if(LogLevel.NORMAL.equals(logLevel)){
    	    L.d(RestClient.TAG, "Response "+code+" for: "+getUrl()+"\n"+getText());
    	    
    	}else if(LogLevel.VERBOSE.equals(logLevel)){
    	    L.d(RestClient.TAG, "Response for: "+getUrl());
    	    L.d(RestClient.TAG, "Response headers: "+HttpTools.getPrintableResponseHeaders(httpUrlConnection));
            L.d(RestClient.TAG, "Response body: "+getText());
    	}
    }
    
    public Response(String url) {
        this.url = url;
    }
    
    /**
     * Domain-parses this response with the supplied parser
     * 
     * @param parser
     * @return The domain parsed variant of this Response's body
     */
    public <T> T getParsedText(Parser<Response, T> parser) {
        return parser.parse(this);
    }
    
    /**
     * Domain-parses this response with the supplied parser, or throws an exception on failure
     * 
     * @param parser
     * @return The domain parsed variant of this Response's body
     * @throws Exceptions, thrown by the parser.
     */
    public <T, E extends Exception> T getParsedText(ThrowingParser<Response, T, E> parser) throws E {
        return parser.parse(this);
    }
    
    /**
     * GSON parses this Response's body, into the supplied Class type
     * 
     * @param result the Class to parse this Response's body into
     * @return The domain parsed variant of this Response's body
     */
    public <T> T getGsonParsedText(Class<T> result) {
        try {
            return new Gson().fromJson(new String(response, charset), result);
        } catch (Exception e) {
            L.e(e);
        }
        return null;
    }

    /**
     * GSON parses this Response's body, into the type specified by the supplied TypeToken
     * 
     * @param result the TypeToken that specifies the type to parse into
     * @return The domain parsed variant of this Response's body
     */
    public <T> T getGsonParsedText(TypeToken<T> result) {
        return getGsonParsedText(new Gson(), result);
    }
    
    /**
     * GSON parses this Response's body, into the type specified by the supplied TypeToken, using the provided GSON instance
     * 
     * @param gson the GSON instance to use for mapping. Can be used to provide specific mapping rules
     * @param result the TypeToken that specifies the type to parse into
     * @return The domain parsed variant of this Response's body
     */
    public <T> T getGsonParsedText(Gson gson, TypeToken<T> result) {
        try {
            return gson.fromJson(new String(response, charset), result.getType());
        } catch (Exception e) {
            L.e(e);
        }
        return null;
    }
}