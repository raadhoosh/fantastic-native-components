package com.module;

import android.util.Log;

import com.longtailvideo.jwplayer.media.playlists.MediaSource;
import com.longtailvideo.jwplayer.media.playlists.MediaType;
import com.longtailvideo.jwplayer.media.playlists.PlaylistItem;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MySamplePlaylist {


  public   static List<PlaylistItem> getSampleDRM(List<GsonFormat.PlaylistBean> playlist) {
        List<PlaylistItem> playlistItemList = new ArrayList<>();
        Log.i( "SajjadLog", "--------- MySamplePlaylist : getSampleDRM ------1---" );
        for (int i = 0; i < playlist.size(); i++) {
            Log.i( "SajjadLog", "--------- MySamplePlaylist : getSampleDRM ------2---" );
            List<GsonFormat.PlaylistBean.SourcesBean> sourceList = playlist.get( i ).getSources();
            Log.i( "SajjadLog", "--------- MySamplePlaylist : getSampleDRM ------3---" );
            for (int j = 0; j < playlist.size(); j++) {
                Log.i( "SajjadLog", "--------- MySamplePlaylist : getSampleDRM ------4---" );
                playlistItemList.add( getPlaylistItem( sourceList.get( j ) ) );
            }
        }
        Log.i( "SajjadLog", "--------- MySamplePlaylist : getSampleDRM ------5---" );
        return playlistItemList;
    }


  public   static PlaylistItem getPlaylistItem(GsonFormat.PlaylistBean.SourcesBean sourceList) {
      Log.i( "SajjadLog", "--------- MySamplePlaylist : getPlaylistItem ------1---" );
        String url = sourceList.getDrm().getWidevine().getUrl();
        String serverCertificateUrl = sourceList.getDrm().getWidevine().getServerCertificateUrl();
      Log.i( "SajjadLog", "--------- MySamplePlaylist : getPlaylistItem ------2---" );
        List<GsonFormat.PlaylistBean.SourcesBean.DrmBean.WidevineBean.LicenseRequestHeadersBean> listHeader =
                sourceList.getDrm()
                        .getWidevine()
                        .getLicenseRequestHeaders();
        Map<String, String> requestProperties = new HashMap<>();
        for (int n = 0; n < listHeader.size(); n++) {
            requestProperties.put( listHeader.get( n ).getName(), listHeader.get( n ).getValue() );
        }
        WidevineMediaDrmCallback widevineMediaDrmCallback;
        if (requestProperties.isEmpty()) {
            widevineMediaDrmCallback = new WidevineMediaDrmCallback( url, serverCertificateUrl );

        } else {
            widevineMediaDrmCallback = new WidevineMediaDrmCallback( url, serverCertificateUrl, requestProperties );
        }

        return new PlaylistItem.Builder()
                .sources( buildMediaSource( sourceList.getFile(), MediaType.MPD ) )
                .mediaDrmCallback( widevineMediaDrmCallback )
                .build();
    }


    /*
     * MediaSource Example used for WidevineMediaDrm
     * */
    private static List<MediaSource> buildMediaSource(String file, MediaType type) {

        List<MediaSource> mediaSourceList = new ArrayList<>();

        MediaSource ms = new MediaSource.Builder()
                .file( file )
                .type( type )
                .build();

        mediaSourceList.add( ms );

        return mediaSourceList;
    }
}
