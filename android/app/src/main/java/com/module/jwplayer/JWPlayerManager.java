package com.module.jwplayer;



import android.content.Context;
import android.graphics.Color;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Toast;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.longtailvideo.jwplayer.JWPlayerView;
import com.longtailvideo.jwplayer.media.playlists.PlaylistItem;

public class JWPlayerManager extends ViewGroupManager<ViewGroup> {
    JWPlayerView jwview;
    PlaylistItem pi;
    @Override
    public String getName() {
        return "JWPlayer";
    }

    @Override
    protected JWPlayerView createViewInstance(ThemedReactContext reactContext) {
        AttributeSet attr = null;
        jwview= new JWPlayerView(reactContext,attr);


        return jwview;
    }

    @ReactProp(name= "buttonText")
    public  void setButtonText(JWPlayerView v, String buttonText){
        if(buttonText.equals( "a" )){
            pi= new PlaylistItem.Builder()
                    .file("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8")
                    .title("BipBop")
                    .description("A  player testing video.")
                    .build();
            jwview.load(pi);
        }
        v.setBackgroundColor( Color.red( 22 ));
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
