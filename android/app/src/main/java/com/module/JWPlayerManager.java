package com.module;


import android.support.annotation.NonNull;
import android.util.Log;
import android.view.Gravity;
import android.widget.Toast;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.google.gson.Gson;
import com.longtailvideo.jwplayer.configuration.PlayerConfig;
import com.longtailvideo.jwplayer.media.playlists.MediaSource;
import com.longtailvideo.jwplayer.media.playlists.MediaType;
import com.longtailvideo.jwplayer.media.playlists.PlaylistItem;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.Set;

import javax.annotation.Nullable;

public class JWPlayerManager extends SimpleViewManager<JWView> {
    JWView jwview;
    ThemedReactContext context;
    PlaylistItem pi;
    String uri, title, description;
//    Toast toast;

    @Override
    public String getName() {
        return "JWPlayer";
    }

    @Override
    protected JWView createViewInstance(ThemedReactContext reactContext) {
        Log.i( "SajjadLog", "--------JWView createViewInstance----------" );
        context = reactContext;
//        toast = new Toast( reactContext );
//         PlayerConfig playerConfig = new PlayerConfig.Builder().build();
        jwview = new JWView(context);
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
//        try {
            Log.i( "SajjadLog", "--------- JWPlayer Manager : setSrc -------1--" );
            if (src != null) {
                Gson gson = new Gson();
                GsonFormat player = gson.fromJson( src, GsonFormat.class );
                Log.i( "SajjadLog", "--------- JWPlayer Manager : setSrc ------3---" );
                List<GsonFormat.PlaylistBean> playlist = player.getPlaylist();
                Log.i( "SajjadLog", "--------- JWPlayer Manager : setSrc ------4---" );
                List<PlaylistItem> lp =   MySamplePlaylist.getSampleDRM(playlist);
                Log.i( "SajjadLog", "--------- JWPlayer Manager : setSrc ------5---" );
                PlayerConfig playerConfig = new PlayerConfig.Builder()
                        .playlist( lp )
                        .build();
               jwview.setup( playerConfig );
            }
//        } catch (Exception e) {
//            Log.i( "SajjadLog-----------", e.getMessage());
//
//        }
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
//    @ReactProp(name = "setup")
//    public void setup(JWView v,PlayerConfig param) {
//        jwview.setup( param );
//    }

}
