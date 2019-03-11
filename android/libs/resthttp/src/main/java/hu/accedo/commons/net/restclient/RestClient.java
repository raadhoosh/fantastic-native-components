package hu.accedo.commons.net.restclient;

import android.content.Context;
import android.net.http.HttpResponseCache;
import android.util.Log;

import org.apache.commons.io.IOUtils;

import java.io.File;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.HttpCookie;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLSocketFactory;

import hu.accedo.commons.logging.L;
import hu.accedo.commons.net.PathUrl;
import hu.accedo.commons.net.PostBody;
import hu.accedo.commons.tools.HttpTools;
import hu.accedo.commons.tools.StringParser;

/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class RestClient {
	public static final String TAG = "RestClient";
	protected static final int DEFAULT_TIMEOUT_CONNECT = 5000;
	protected static final int DEFAULT_TIMEOUT_READ = 10000;
	protected static final long DEFAULT_CACHE_SIZE = 10 * 1024 * 1024;  // 10 MiB
    /*Store the ssl factory for every domian nae, key is domain name and value is cer file*/
    private static HashMap<String,SSLSocketFactory> SSL_FACTORIES = new HashMap<String,SSLSocketFactory>();

	public static enum Method{
		GET,
		POST,
		PUT,
		DELETE
	}
	public static enum LogLevel{
	    OFF,
	    NORMAL,
	    VERBOSE
	}
	
	protected String url;
	protected HttpURLConnection httpUrlConnection;
	protected byte[] payload;
	protected String charset = "UTF-8";
    protected ArrayList<HttpCookie> cookies = new ArrayList<HttpCookie>();
    protected LogLevel logLevel = LogLevel.NORMAL;
    
    protected OnResponseListener onResponseListener;
    
    /**
     * @return the HttpURLConnection behind this RestClient instance
     */
    public HttpURLConnection getUrlConnection() {
		return httpUrlConnection;
	}
    
    /**
     * @return the url this RestClient instance is trying to fetch
     */
    public String getUrl() {
        return url;
    }
    
    /**
     * Sets the HTTP method of the call.
     * @param method GET, POST, PUT or DELETE
     * @return this RestClient instance for chaining
     */
    public RestClient setMethod(Method method){
    	try {
    	    httpUrlConnection.setRequestMethod(method.name());
		} catch (Exception e) {
			L.w(TAG, e);
		}
    	return this;
    }
    
    /**
     * Sets the value of the specified request header field. 
     * @param key the header name to be added
     * @param value the header value to be added
     * @return this RestClient instance for chaining
     */
    public RestClient setHeader(String key, String value){
    	if(httpUrlConnection!=null) {
    	    httpUrlConnection.setRequestProperty(key, value);
    	}
		return this;
    }

    /**
     * Sets the SSLSocketFactory for each domain name
     * @param url the url need to be set ssl
     * @param socketFactory the socketFactory to be added
     * @return this RestClient instance for chaining
     */
    public static void setSSLSocketFactory(String url, SSLSocketFactory socketFactory){
        SSL_FACTORIES.put(url,socketFactory);
    }

    /**
     * Sets the SSLSocketFactory
     * @return this RestClient instance for chaining
     */
    public void setSSLSocketFactory(){
        try{
            if( url.contains("https") && httpUrlConnection!=null){
                String urlPath = url.substring(0,url.indexOf("?") == -1 ? url.length() : url.indexOf("?"));
                for(Map.Entry<String,SSLSocketFactory> entry: SSL_FACTORIES.entrySet()){
                    if( entry.getValue() !=null && urlPath.contains(entry.getKey())){
                        ((HttpsURLConnection) httpUrlConnection).setSSLSocketFactory(entry.getValue());
                        break;
                    }
                }
            }
        }catch (Exception e){
            e.printStackTrace();
        }

    }
    
    /**
     * Adds the given property to the request header. Existing properties with the same name will not be overwritten by this method.
     * @param key the header name to be added
     * @param value the header value to be added
     * @return this RestClient instance for chaining
     */
    public RestClient addHeader(String key, String value){
        if(httpUrlConnection!=null) {
            httpUrlConnection.addRequestProperty(key, value);
        }
        return this;
    }
    
    /**
     * Sets the given cookies to the request as a "Cookie" header. All previously set cookies will be removed.
     * @param cookies the cookies to be added
     * @return this RestClient instance for chaining
     */
    public RestClient setCookies(List<HttpCookie> cookies){
    	this.cookies.clear();
    	return addCookies(cookies);
    }
    
    /**
     * Appends the given cookies to the request's "Cookie" header.
     * @param cookies the cookies to be added
     * @return this RestClient instance for chaining
     */
    public RestClient addCookies(List<HttpCookie> cookies){
    	if(cookies==null)
    		return this;
    	
    	//Append list
    	this.cookies.addAll(cookies);
    	
    	//Build current cookie string 
    	StringBuilder cookieString = new StringBuilder();
    	for (HttpCookie cookie : this.cookies) {
			if(cookie!=null) {
				cookieString.append(String.format("%s=\"%s\"; ", cookie.getName(), cookie.getValue()));
			}
    	}
    	
    	//Set to urlConnection
		if(httpUrlConnection!=null) {
		    httpUrlConnection.setRequestProperty("Cookie", cookieString.toString());
		}
		
		return this;
    }
    
    /**
     * Sets the payload to be sent in the request body. The PostBody will be processed with the charset active at the time this value is set.
     * !!To make sure that this value is encoded properly, make sure the charset is set before calling this method.!! 
     * @param postBody The PostBody to be sent in the request body.
     * @return this RestClient instance for chaining
     */
    public RestClient setPayload(PostBody postBody) {
        if (postBody != null) {
            try {
                this.payload = postBody.toString().getBytes(charset);
            } catch (UnsupportedEncodingException e) {
                L.w(TAG, e);
            }
        } else {
            this.payload = null;
        }
        return this;
    }
    
    /**
     * Sets the payload to be sent in the request body. The string will be processed with the charset active at the time this value is set.
     * !!To make sure that this value is encoded properly, make sure the charset is set before calling this method.!! 
     * @param output The string to be sent in the request body.
     * @return this RestClient instance for chaining
     */
    public RestClient setPayload(String payload) {
        if (payload != null) {
            try {
                this.payload = payload.getBytes(charset);
            } catch (UnsupportedEncodingException e) {
                L.w(TAG, e);
            }
        } else {
            this.payload = null;
        }

        return this;
    }
    
    /**
     * Sets the payload to be sent in the request body.  
     * @param rawOutput The data to be sent in the request body.
     * @return this RestClient instance for chaining
     */
    public RestClient setPayload(byte[] payload) {
        this.payload = payload;
        return null;
    }
    
    /**
     * Sets the timeouts for the request.
     * @param connect the timeout value for the connection to be established
     * @param read the timeout value for the fetching operation to be completed
     * @return this RestClient instance for chaining
     */
    public RestClient setTimeout(int connect, int read){
    	if(httpUrlConnection!=null){
    	    httpUrlConnection.setConnectTimeout(connect);
    	    httpUrlConnection.setReadTimeout(read);
    	}
    	return this;
    }

    /**
     * Sets the character set to be used while processing the request. The default value is UTF-8.
     * @param charset the RestClient instance should use. Doesn't accept null.
     * @return this RestClient instance for chaining
     */
    public RestClient setCharset(String charset) {
        if(charset!=null){
            this.charset = charset;
        }
		return this;
	}

    /**
     * Sets a response listener to be called when a response is obtained.  
     * @param onResponseListener 
     * @return this RestClient instance for chaining
     */
    public RestClient setOnResponseListener(OnResponseListener onResponseListener) {
		this.onResponseListener = onResponseListener;
		return this;
	}
    
    /**
     * Sets the level of logging this RestClient instance should do. Possible values: <br/>
     *  OFF - Quite mode <br/>
     *  NORMAL - Logs request URL, response code, and response body (DEFAULT)<br/>
     *  VERBOSE - Logs URLs, headers, and bodies in both directions
     * @param logLevel this RestClient instance should use. Doesn't accept null.
     * @return this RestClient instance for chaining
     */
    public RestClient setLogLevel(LogLevel logLevel){
        if(logLevel!=null){
            this.logLevel = logLevel;
        }
        return this;
    }
    
    /**
     * Enables or disables response caching for this RestClient instance. The default behavior is disabled.
     * This method will set up a global caching space, if none is specified yet.
     * HttpResponseCache.install(new File(context.getCacheDir(), "http"), 10 megabytes);
     * 
     * @param context needed to access context.getCacheDir(). The context itself is not stored. 
     * @param enabled
     * @return this RestClient instance for chaining
     */
    public RestClient setResponseCache(Context context, boolean enabled){
        if(context==null || httpUrlConnection==null){
            return this;
        }
        
        //Set this instance to use caches
        httpUrlConnection.setUseCaches(enabled);
        
        //Setup global caching space, if necessary
        if(enabled && HttpResponseCache.getInstalled()==null){
            try {
                File httpCacheDir = new File(context.getCacheDir(), "http");
                HttpResponseCache.install(httpCacheDir, DEFAULT_CACHE_SIZE);
            } catch (Exception e) {
                L.w(TAG, "Failed to set up HttpResponseCache. " + e.getMessage());
            }
        }
        
        return this;
    }
    
    public RestClient(PathUrl pathUrl){
    	this(pathUrl!=null? pathUrl.toString() : null);
    }
    
    public RestClient(String url){
        this.url = url;
        
        try {
            httpUrlConnection = (HttpURLConnection) (new URL(url).openConnection());
        } catch (Exception e) {
            L.w(TAG, e);
        }
    	
    	if(httpUrlConnection!=null){
    	    httpUrlConnection.setConnectTimeout(DEFAULT_TIMEOUT_CONNECT);
            httpUrlConnection.setReadTimeout(DEFAULT_TIMEOUT_READ);
    	    httpUrlConnection.setUseCaches(false);
    	}
    }
    
    /**
     * Used for connecting asynchronously, using callbacks.
     * @return an AsyncRequest instance, containing this RestClient instance 
     */
    public AsyncRestClient async(){
        setSSLSocketFactory();
    	return new AsyncRestClient(this);
    }
    
    /**
     * Connects and tries to obtain a response.
     * @return the obtained Response. Never null.
     */
    public Response connect() {
        Response response = fetchResponse();
    	
        //Notify listeners
        if (onResponseListener != null) {
            onResponseListener.onResponse(response);
        }
    	
    	return response;
    }
    
    public <E extends Exception> Response connect(ResponseChecker<E> responseChecker) throws E {
        Response response = fetchResponse();
        
        //Check response, and throw if necessary
        if (responseChecker != null) {
            responseChecker.throwIfNecessary(response);
        }

        //Notify listeners if we're still here
        if (onResponseListener != null) {
            onResponseListener.onResponse(response);
        }
        
        return response;
    }
    
    /**
     * Releases this connection so that its resources may be either reused or closed.
     */
    public void disconnect(){
        httpUrlConnection.disconnect();
    }
    
    private Response fetchResponse(){
        Response response = new Response(url);
        OutputStream os = null;
        if(httpUrlConnection!=null && httpUrlConnection.getURL()!=null){
            try {
                //Logging
                if(!LogLevel.OFF.equals(logLevel)){
                    L.i(TAG, "Sending "+httpUrlConnection.getRequestMethod()+" request: "+httpUrlConnection.getURL().toString());
                }
                if(LogLevel.VERBOSE.equals(logLevel)){
                    L.d(TAG, "Request headers: "+HttpTools.getPrintableRequestProperties(httpUrlConnection));
                    L.d(TAG, "Request body: "+StringParser.tryCreateString(payload, charset, null));
                }
                
                //Request
                httpUrlConnection.connect();
                if(payload!=null){
                    os = httpUrlConnection.getOutputStream();
                    os.write(payload);
                    os.flush();
                    os.close();
                }
                response = new Response(httpUrlConnection, url, charset, logLevel);
            } catch (Exception e) { 
                L.w(TAG, e);
            } finally {
                IOUtils.closeQuietly(os);
            }
        }
        
        return response;
    }
    
    public static interface OnResponseListener {
    	public void onResponse(Response response);
    }
    public static interface ResponseChecker<T extends Exception> {
        public void throwIfNecessary(Response response) throws T;
    }
}