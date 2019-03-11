package hu.accedo.commons.tools;

import java.net.HttpURLConnection;
import java.util.List;
import java.util.Map.Entry;

/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class HttpTools {
    public static String getPrintableRequestProperties(HttpURLConnection httpUrlConnection){
        try{
            if(httpUrlConnection.getRequestProperties()!=null && !httpUrlConnection.getRequestProperties().isEmpty()){
                StringBuilder sb = new StringBuilder();
                for (Entry<String, List<String>> header : httpUrlConnection.getRequestProperties().entrySet()) {
                    sb.append(String.format("%s=%s\n", header.getKey(), header.getValue()));
                }
                return sb.toString();
            }
        }catch(Exception e){}
        return null;
    }

    public static String getPrintableResponseHeaders(HttpURLConnection httpUrlConnection){
        try{
            if(httpUrlConnection.getHeaderFields()!=null && !httpUrlConnection.getHeaderFields().isEmpty()){
                StringBuilder sb = new StringBuilder();
                for (Entry<String, List<String>> header : httpUrlConnection.getHeaderFields().entrySet()) {
                    sb.append(String.format("%s=%s\n", header.getKey(), header.getValue()));
                }
                return sb.toString();    
            }
        }catch(Exception e){}
        return null;
    }
}
