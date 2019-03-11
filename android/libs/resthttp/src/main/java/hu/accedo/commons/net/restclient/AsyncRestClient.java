package hu.accedo.commons.net.restclient;

import hu.accedo.commons.net.Parser;
import hu.accedo.commons.net.restclient.RestClient.OnResponseListener;
import hu.accedo.commons.threading.CancellableAsyncTask;

import java.util.concurrent.Executor;
import java.util.concurrent.Executors;

import android.util.Pair;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class AsyncRestClient {
    public static final Executor EXECUTOR_THREADPOOL = Executors.newCachedThreadPool();
    public static final Executor EXECUTOR_SERIAL = Executors.newSingleThreadExecutor();
    
    private RestClient restClient;
    private OnResponseListener onResponseListener;
    private Executor executor = EXECUTOR_THREADPOOL;
    
    public AsyncRestClient setExecutor(Executor executor) {
        this.executor = executor;
        return this;
    }
    
    AsyncRestClient(RestClient restClient){
        this.onResponseListener = restClient.onResponseListener;
        this.restClient = restClient;
        this.restClient.setOnResponseListener(null);
    }
    
    /**
     * Shoot and forget call to connect in an asynchronous manner
     * @return the AsyncTask used for threading by the call
     */
    public CancellableAsyncTask<Void, Void, Pair<Response, Void>> connect(){
        return doConnectParse(null, null, null, null);
    }
    
    /**
     * Connects in an asynchronous manner, and returns the obtained response in an OnResponse callback
     * @param onResponse the callback to be called when a response is obtained. This is the same as that is set by setOnResponseListener(OnResponse onResponseListener)
     * @return the AsyncTask used for threading by the call
     */
    public CancellableAsyncTask<Void, Void, Pair<Response, Void>> connect(OnResponseListener onResponseListener){
        this.onResponseListener = onResponseListener;
        return doConnectParse(null, null, null, null);
    }
    
    /**
     * Connects in an asynchronous manner, and returns the obtained response, and it's domain parsed variant in an OnParsedResponse callback
     * @param parser the parser to be used for domain object parsing
     * @param onParsedResponse the callback to be called when a response is obtained and parsed
     * @return the AsyncTask used for threading by the call
     */
    public <T> CancellableAsyncTask<Void, Void, Pair<Response, T>> connectParse(Parser<Response, T> parser, OnParsedResponse<T> onParsedResponse){
        return doConnectParse(null, null, parser, onParsedResponse);
    }

    /**
     * Connects in an asynchronous manner, and returns the obtained response, and it's GSON mapped variant in an OnGsonParsedResponse callback.
     * The target of the mapping is determined by the callback's generic type.
     * @param onGsonParsedResponse the callback to be called when a response is obtained and parsed
     * @return the AsyncTask used for threading by the call
     */
    public <T> CancellableAsyncTask<Void, Void, Pair<Response, T>> connectParse(OnGsonParsedResponse<T> onGsonParsedResponse){
        return doConnectParse(null, onGsonParsedResponse, null, null);
    }
    
    /**
     * Connects in an asynchronous manner, and returns the obtained response, and it's GSON mapped variant in an OnGsonParsedResponse callback.
     * The target of the mapping is determined by the callback's generic type.
     * @param gson the GSON instance to be used while mapping. Can be used to specify special mapping rules
     * @param onGsonParsedResponse the callback to be called when a response is obtained and parsed
     * @return the AsyncTask used for threading by the call
     */
    public <T> CancellableAsyncTask<Void, Void, Pair<Response, T>> connectParse(Gson gson, OnGsonParsedResponse<T> onGsonParsedResponse){
        return doConnectParse(gson, onGsonParsedResponse, null, null);
    }
    
    /**
     * Releases this connection so that its resources may be either reused or closed.
     */
    public void disconnect(){
        restClient.disconnect();
    }
    
    public <T> CancellableAsyncTask<Void, Void, Pair<Response, T>> doConnectParse(final Gson gson, final OnGsonParsedResponse<T> onGsonParsedResponse, final Parser<Response, T> parser, final OnParsedResponse<T> onParsedResponse){
        CancellableAsyncTask<Void, Void, Pair<Response, T>> asyncTask = new CancellableAsyncTask<Void, Void, Pair<Response, T>>() {
            @Override
            protected void onPreExecute() {
                if(onParsedResponse!=null){
                    onParsedResponse.onPreExecute();
                }
                if(onGsonParsedResponse!=null){
                    onGsonParsedResponse.onPreExecute();
                }
            }
            
            @Override
            protected void onCancelled() {
                if(onParsedResponse!=null){
                    onParsedResponse.onCancelled();
                }
                if(onGsonParsedResponse!=null){
                    onGsonParsedResponse.onCancelled();
                }
            }
            
            @Override
            protected void onCancelled(Pair<Response, T> result) {
                if(onParsedResponse!=null){
                    onParsedResponse.onCancelled(result);
                }
                if(onGsonParsedResponse!=null){
                    onGsonParsedResponse.onCancelled(result);
                }
            }
            
            @Override
            protected Pair<Response, T> doInBackground(Void... params) {
                Response response = restClient.connect(); //Safe to call this, because we've stripped the restclient free of onresponse listeners
                T parsedResponse = null;
                
                if(onParsedResponse!=null && parser!=null){
                    parsedResponse = parser.parse(response);
                }else if(onGsonParsedResponse!=null){
                    if(gson!=null){
                        parsedResponse = response.getGsonParsedText(gson, onGsonParsedResponse);
                    }else{
                        parsedResponse = response.getGsonParsedText(onGsonParsedResponse);
                    }
                }
                
                return new Pair<Response, T>(response, parsedResponse);
            }
            
            @Override
            protected void onPostExecute(Pair<Response, T> result) {
                if(onResponseListener!=null){
                    onResponseListener.onResponse(result.first);
                }
                if(onParsedResponse!=null){
                    onParsedResponse.onResponse(result.first, result.second);
                }
                if(onGsonParsedResponse!=null){
                    onGsonParsedResponse.onResponse(result.first, result.second);
                }
            }
        };
        asyncTask.executeOnExecutor(executor);
        return asyncTask;
    }
    
    public static abstract class OnParsedResponse<T> {
        public void onPreExecute(){};
        public void onCancelled(){};
        public void onCancelled(Pair<Response, T> result){};
        public abstract void onResponse(Response response, T parsedResponse);
    }
    /*
     * The reason this is separated from OnParsedResponse is to be able to use OnParsedResponse without including GSON to the project.
     */
    public static abstract class OnGsonParsedResponse<T> extends TypeToken<T>{ 
        public void onPreExecute(){};
        public void onCancelled(){};
        public void onCancelled(Pair<Response, T> result){};
        public abstract void onResponse(Response response, T parsedResponse);
    }
}