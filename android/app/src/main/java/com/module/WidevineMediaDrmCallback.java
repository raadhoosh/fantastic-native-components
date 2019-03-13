package com.module;

import android.annotation.TargetApi;
import android.support.annotation.NonNull;
import android.text.TextUtils;

import com.google.android.exoplayer2.drm.ExoMediaDrm;
import com.longtailvideo.jwplayer.media.drm.MediaDrmCallback;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import static com.google.android.exoplayer2.util.Util.toByteArray;

@TargetApi(18)
public class WidevineMediaDrmCallback implements MediaDrmCallback {

    private static String WIDEVINE_LICENSE_SERVER_BASE_URI =
            "https://proxy.uat.widevine.com/proxy";

    private static final String WIDEVINE_GTS_DEFAULT_BASE_URI =
            "https://proxy.uat.widevine.com/proxy";

    private final String defaultUri;
//    private final String licenseServerUrl;

    private boolean isProviderAvailable;

    private final Map<String, String> KEY_REQUEST_PROPERTIES = new HashMap<>();

    WidevineMediaDrmCallback() {
        isProviderAvailable = true;
//        licenseServerUrl = WIDEVINE_LICENSE_SERVER_BASE_URI;
        defaultUri = WIDEVINE_GTS_DEFAULT_BASE_URI;
    }

    WidevineMediaDrmCallback(String BASE_URI, String LICENSE_SERVER) {
        isProviderAvailable = true;
        defaultUri = BASE_URI;
//        licenseServerUrl = BASE_URI;
    }

    WidevineMediaDrmCallback(String BASE_URI, String LICENSE_SERVER,Map<String, String> maps) {
        isProviderAvailable = false;
        for (Map.Entry<String, String> entry : maps.entrySet()) {
            String key = entry.getKey();
            String value = entry.getValue();
            KEY_REQUEST_PROPERTIES.put( key, value );
            // do what you have to do here
            // In your case, another loop.
        }
//        licenseServerUrl = BASE_URI;
        defaultUri = BASE_URI;
    }


    @Override
    public byte[] executeProvisionRequest(UUID uuid, ExoMediaDrm.ProvisionRequest request) throws IOException {
        String url = request.getDefaultUrl() + "&signedRequest=" + new String( request.getData() );
        return executePost( url, null, null );
    }

    @Override
    public byte[] executeKeyRequest(UUID uuid, ExoMediaDrm.KeyRequest request) throws IOException {

        String url = request.getLicenseServerUrl();

        if (TextUtils.isEmpty( url )) {
            url = defaultUri;
        }

        return isProviderAvailable ?
                executePost( url, request.getData(), null ) :
                executePost( url, request.getData(), KEY_REQUEST_PROPERTIES );
    }

    /**
     * Executes a post request using {@link HttpURLConnection}.
     *
     * @param url               The request URL.
     * @param data              The request body, or null.
     * @param requestProperties Request properties, or null.
     * @return The response body.
     * @throws IOException If an error occurred making the request.
     */
    private static byte[] executePost(String url, byte[] data, Map<String, String> requestProperties)
            throws IOException {
        HttpURLConnection urlConnection = null;
        try {
            urlConnection = (HttpURLConnection) new URL( url ).openConnection();
            urlConnection.setRequestMethod( "POST" );
            urlConnection.setDoOutput( data != null );
            urlConnection.setDoInput( true );
            if (requestProperties != null) {
                for (Map.Entry<String, String> requestProperty : requestProperties.entrySet()) {
                    urlConnection.setRequestProperty( requestProperty.getKey(), requestProperty.getValue() );
                }
            }
            // Write the request body, if there is one.
            if (data != null) {
                OutputStream out = urlConnection.getOutputStream();
                try {
                    out.write( data );
                } finally {
                    out.close();
                }
            }

            // Read and return the response body.
            InputStream inputStream = urlConnection.getInputStream();
            try {
                return toByteArray( inputStream );
            } finally {
                inputStream.close();
            }
        } finally {
            if (urlConnection != null) {
                urlConnection.disconnect();
            }
        }
    }
}