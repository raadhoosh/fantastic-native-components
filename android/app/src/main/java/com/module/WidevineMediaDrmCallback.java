package com.module;

import android.annotation.TargetApi;

import com.google.android.exoplayer2.drm.ExoMediaDrm;
import com.google.android.exoplayer.util.Util;
import com.longtailvideo.jwplayer.media.drm.MediaDrmCallback;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@TargetApi(18)
public class WidevineMediaDrmCallback implements MediaDrmCallback {

    private String mLicenseServer, mAxDrmMessage;

    public WidevineMediaDrmCallback(String licenseServer, String axDrmMessage) {
        // license server URL has hardcoded value of: "https://drm-widevine-licensing.axtest.net/AcquireLicense"
        // defined in SampleChooserActivity class
        mLicenseServer = licenseServer;
        mAxDrmMessage = axDrmMessage;
    }

    @Override
    public byte[] executeProvisionRequest(UUID uuid, ExoMediaDrm.ProvisionRequest request) throws IOException {
        String url = request.getDefaultUrl() + "&signedRequest=" + new String(request.getData());
        return Util.executePost(url, null, null);
     // return  null;
    }

    // Requesting key from license server using license token obtained from the authorization service
    @Override
    public byte[] executeKeyRequest(UUID uuid, ExoMediaDrm.KeyRequest request) throws IOException {
        Map<String, String> requestProperties = new HashMap<>();
        requestProperties.put("X-AxDRM-Message", mAxDrmMessage);
        //return  null;
        return Util.executePost(mLicenseServer, request.getData(), requestProperties);
    }
}
