package com.module;

import android.annotation.TargetApi;
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

    private String mLicenseServer;

//    public WidevineMediaDrmCallback(String licenseServer, String axDrmMessage) {
//        // license server URL has hardcoded value of: "https://drm-widevine-licensing.axtest.net/AcquireLicense"
//        // defined in SampleChooserActivity class
//        mLicenseServer = licenseServer;
//        mAxDrmMessage = axDrmMessage;
//    }
//
//    @Override
//    public byte[] executeProvisionRequest(UUID uuid, ExoMediaDrm.ProvisionRequest request) throws IOException {
//        String url = request.getDefaultUrl() + "&signedRequest=" + new String(request.getData());
//        return Util.executePost(url, null, null);
//     // return  null;
//    }
//
//    // Requesting key from license server using license token obtained from the authorization service
//    @Override
//    public byte[] executeKeyRequest(UUID uuid, ExoMediaDrm.KeyRequest request) throws IOException {
//        Map<String, String> requestProperties = new HashMap<>();
//        requestProperties.put("X-AxDRM-Message", mAxDrmMessage);
//        //return  null;
//        return Util.executePost(mLicenseServer, request.getData(), requestProperties);
//    }

    private static final String WIDEVINE_LICENSE_SERVER_BASE_URI =
            "https://drm-widevine-licensing.axtest.net/AcquireLicense";

    private final String defaultUri;
    Map<String, String> mAxDrmMessage;

    public WidevineMediaDrmCallback(String contentId, Map<String, String> mad) {
        String params = "?video_id=" + contentId;
        mAxDrmMessage = mad;
        defaultUri = WIDEVINE_LICENSE_SERVER_BASE_URI + params;
    }

    @Override
    public byte[] executeProvisionRequest(UUID uuid, ExoMediaDrm.ProvisionRequest request) throws IOException {
        String url = request.getDefaultUrl() + "&signedRequest=" + new String( request.getData() );
        return executePost( url, null, mAxDrmMessage );
    }

    @Override
    public byte[] executeKeyRequest(UUID uuid, ExoMediaDrm.KeyRequest request) throws IOException {
        String url = request.getDefaultUrl();
        if (TextUtils.isEmpty( url )) {
            url = defaultUri;
        }
        return executePost( url, request.getData(), mAxDrmMessage );
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
    public static byte[] executePost(String url, byte[] data, Map<String, String> requestProperties)
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
