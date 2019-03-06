package com.module;


import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.google.gson.Gson;
import com.longtailvideo.jwplayer.configuration.PlayerConfig;
import com.longtailvideo.jwplayer.media.drm.MediaDrmCallback;
import com.longtailvideo.jwplayer.media.playlists.MediaSource;
import com.longtailvideo.jwplayer.media.playlists.MediaType;
import com.longtailvideo.jwplayer.media.playlists.PlaylistItem;

import org.json.JSONObject;

import java.util.List;

import javax.annotation.Nullable;

public class JWPlayerManager extends SimpleViewManager<JWView> {
    JWView jwview;
    ThemedReactContext context;
    PlaylistItem pi;
    String uri, title, description;

    @Override
    public String getName() {
        return "JWPlayer";
    }

    @Override
    protected JWView createViewInstance(ThemedReactContext reactContext) {
        context = reactContext;
//         PlayerConfig playerConfig = new PlayerConfig.Builder().build();
        jwview = new JWView( reactContext );
//         pi= new PlaylistItem.Builder()
//                    .file("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8")
//                    .title("BipBop")
//                    .description("A  player testing video.")
//                    .build();
//         jwview.load(pi);
        return jwview;
//        return new View(context);
    }

    //
    @ReactProp(name = "src")
    public void setSrc(JWView v, @Nullable String src) {
        if (src != null) {
            Gson gson = new Gson();

            GsonFormat player = gson.fromJson( src, GsonFormat.class );
            List<PlaylistItem> lp= null;
            List<GsonFormat.PlaylistBean> playlist = player.getPlaylist();
            final int size = playlist.size();
            for (int i = 0; i < size; i++) {
                List<GsonFormat.PlaylistBean.SourcesBean> sourceList = playlist.get( i ).getSources();
//                final int size2 = sourceList.size();
//                for (int j = 0; j < size2; j++)
//                {
//                    MediaSource ms = null;
//                    ms.setFile( sourceList.get( j ).getFile() );
//                    ms.setType( MediaType.HLS);
//                    source.add( ms);
//                }

                PlaylistItem p = new PlaylistItem.Builder()
                        .title( playlist.get( i ).getTitle() )
                        .description( playlist.get( i ).getDescription() )
                        .image( playlist.get( i ).getImage() )

                        .mediaDrmCallback( (MediaDrmCallback) sourceList )
                        .build();
                        lp.add( p );
                //do something with i
            }
            PlayerConfig playerConfig = new PlayerConfig.Builder()
                    .playlist( lp )
                    .build();
            jwview.setup( playerConfig );
        }
    }

    //
    @ReactProp(name = "title")
    public void setTitle(JWView v, @Nullable String title) {
        this.title = title;
    }

    @ReactProp(name = "description")
    public void setDescription(JWView v, @Nullable String description) {
        this.description = description;
    }

    @ReactProp(name = "play")
    public void setPlay(JWView v, Boolean play) {

        if (play) {
            if (this.uri != null) {
//                if(this.title!= null){
//                    if(this.description!= null){
//                        pi= new PlaylistItem.Builder()
//                                .file("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8")
//                                .title("BipBop")
//                                .description("A player testing video.")
//                                .build();
//                v.load(pi);
//                    }
//                }
            }

        }

    }

//    @ReactProp(name= "player")
//    public  void setPlayer(JWPlayerView jw,Boolean player){

//        if(start){
////            pi= new PlaylistItem.Builder()
////                    .file("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8")
////                    .title("BipBop")
////                    .description("A   player testing video.")
////                    .build();
////            jw.load(pi);
//        }
//
//    }


}
