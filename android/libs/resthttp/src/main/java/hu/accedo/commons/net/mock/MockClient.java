package hu.accedo.commons.net.mock;

import hu.accedo.commons.logging.L;
import hu.accedo.commons.net.Parser;

import java.io.File;
import java.io.IOException;
import java.util.Random;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;

import android.content.Context;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class MockClient {
	private static Random random = new Random();
	
	private Context context;
	private String filename;
    private boolean isExternalFilename;
	private int failFrequency = 0;
	private int delay = 0;
	private int deviation = 0;
	
	/**
	 * Makes every X th request fail, and return null. Default is 0, which never fails.
	 * @param failFrequency non negative failFrequency. Automatically set to 0 if negative value is entered
	 * return this MockRequest instance for chaining.
	 */
	public MockClient setFailFrequency(int failFrequency) {
        this.failFrequency = Math.max(0, failFrequency);
        return this;
    }
	
	/**
	 * Sets how much time the requests should take. If higher than 0, calls Thread.sleep(deviation + random.nextInt(delay)); 
	 * @param delay non negative delay. Automatically set to 0 if negative value is entered
	 * @param deviation  non negative deviation. Automatically set to 0 if negative value is entered
	 * return this MockRequest instance for chaining.
	 */
	public MockClient setDelay(int delay, int deviation) {
        this.delay = Math.max(0, delay);
        this.deviation = Math.max(0, deviation);
        return this;
    }
	
	public MockClient(Context context, String filename){
	    this(context, filename, false);
	}

    /**
     * Creates a MockClient instance
     * @param context
     * @param filename the name of the file, if you want to use the assets folder, it should be a full path, if you use a file from the external storage
     * @param isExternalFilename it's true if the file is available on the external storage (in this case you need to use the full path). It's true when you want to use the assets folder from the bundle.
     * @author Peter Santa
     */
    public MockClient(Context context, String filename, boolean isExternalFilename){
        this.context = context;
        this.filename = filename;
        this.isExternalFilename = isExternalFilename;
    }
	
	/**
	 * @return the contents of the mock file specified in the constructor, that is stored in the assets folder or in the external storage
	 */
	public String readMockFile(){
	    try {
	        //Read
            String result = null;
            if(!isExternalFilename){
                result = IOUtils.toString(context.getAssets().open(filename));
            } else {
                File file = new File(filename);
                if (file.exists()) {
                    result = FileUtils.readFileToString(file);
                } else {
                    L.e("The given file <"+filename+"> is not available on the device.");
                }
            }
            
            //Fail every once in a while
            if(failFrequency>0 && random.nextInt(failFrequency)==0){
                result = null;
            }
            
            //Wait, if a delay is specified
            if(delay>0 || deviation>0){
                try {
                    Thread.sleep(delay + (deviation>0? random.nextInt(deviation) : 0));
                } catch (InterruptedException e) {
                    L.e(e);
                }
            }
            
            //Log out the response
            L.d("MockRequest", "Result: "+result);
            
            return result;
        } catch (IOException e) {
            L.e(e);
            return null;
        }
	}
	
	/**
     * @return the parsed contents of the mock file specified in the constructor, that is stored in the assets folder
     */
    public <T> T readParseMockFile(Parser<String, T> parser){
        return parser.parse(readMockFile());
    }
	
	/**
     * @return the GSON parsed contents of the mock file specified in the constructor, that is stored in the assets folder
     */
	public <T> T readGsonParseMockFile(TypeToken<T> typeToken){
	    try{
	        return new Gson().fromJson(readMockFile(), typeToken.getType());
	    }catch(Exception e){
	        L.e(e);
	        return null;
	    }
	}
	
	/**
     * Used for returning mock data asynchronously, using callbacks.
     * @return an AsyncMockRequest instance, containing this MockClient instance 
     */
    public AsyncMockClient async(){
        return new AsyncMockClient(this);
    }
}