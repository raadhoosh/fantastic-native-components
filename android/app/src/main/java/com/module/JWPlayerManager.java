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
    Toast toast;

    @Override
    public String getName() {
        return "JWPlayer";
    }

    @Override
    protected JWView createViewInstance(ThemedReactContext reactContext) {
        Log.i( "SajjadLog", "--------JWView createViewInstance----------" );
        context = reactContext;
        toast = new Toast( reactContext );
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

//        toast.setGravity( Gravity.CENTER_VERTICAL, 0, 0);
//        toast.setDuration(Toast.LENGTH_LONG);
////        toast.setView(v);
//        toast.setText( "test" );
//        toast.show();
        try {

            Log.i( "SajjadLog", "--------- JWPlayer Manager : setSrc ---------" );
            if (src != null) {
                Gson gson = new Gson();
                Log.i( "SajjadLog", "--------- JWPlayer Manager : 1 ---------" );
                GsonFormat player = gson.fromJson( src, GsonFormat.class );
                Log.i( "SajjadLog", "--------- JWPlayer Manager : 2 ---------" );
                List<PlaylistItem> lp =   new ArrayList<>();
                Log.i( "SajjadLog", "--------- JWPlayer Manager : 3 ---------" );
                List<GsonFormat.PlaylistBean> playlist = player.getPlaylist();
                Log.i( "SajjadLog", "--------- JWPlayer Manager : 4 ---------" );
                final int size = playlist.size();
                Log.i( "SajjadLog", "--------- JWPlayer Manager : 5 ---------" );

                Log.i( "SajjadLog", "--------- JWPlayer Manager : 6 ---------" );
                List<MediaSource> source = new List<MediaSource>() {
                    @Override
                    public int size() {
                        return 0;
                    }

                    @Override
                    public boolean isEmpty() {
                        return false;
                    }

                    @Override
                    public boolean contains(Object o) {
                        return false;
                    }

                    @NonNull
                    @Override
                    public Iterator<MediaSource> iterator() {
                        return null;
                    }

                    @NonNull
                    @Override
                    public Object[] toArray() {
                        return new Object[0];
                    }

                    @NonNull
                    @Override
                    public <T> T[] toArray(@NonNull T[] a) {
                        return null;
                    }

                    @Override
                    public boolean add(MediaSource mediaSource) {
                        return false;
                    }

                    @Override
                    public boolean remove(Object o) {
                        return false;
                    }

                    @Override
                    public boolean containsAll(@NonNull Collection<?> c) {
                        return false;
                    }

                    @Override
                    public boolean addAll(@NonNull Collection<? extends MediaSource> c) {
                        return false;
                    }

                    @Override
                    public boolean addAll(int index, @NonNull Collection<? extends MediaSource> c) {
                        return false;
                    }

                    @Override
                    public boolean removeAll(@NonNull Collection<?> c) {
                        return false;
                    }

                    @Override
                    public boolean retainAll(@NonNull Collection<?> c) {
                        return false;
                    }

                    @Override
                    public void clear() {

                    }

                    @Override
                    public MediaSource get(int index) {
                        return null;
                    }

                    @Override
                    public MediaSource set(int index, MediaSource element) {
                        return null;
                    }

                    @Override
                    public void add(int index, MediaSource element) {

                    }

                    @Override
                    public MediaSource remove(int index) {
                        return null;
                    }

                    @Override
                    public int indexOf(Object o) {
                        return 0;
                    }

                    @Override
                    public int lastIndexOf(Object o) {
                        return 0;
                    }

                    @NonNull
                    @Override
                    public ListIterator<MediaSource> listIterator() {
                        return null;
                    }

                    @NonNull
                    @Override
                    public ListIterator<MediaSource> listIterator(int index) {
                        return null;
                    }

                    @NonNull
                    @Override
                    public List<MediaSource> subList(int fromIndex, int toIndex) {
                        return null;
                    }
                };
                Log.i( "SajjadLog", "--------- JWPlayer Manager : 7 ---------" );
                Log.i( "SajjadLog", "--------- playlist ---------" + playlist );
                Log.i( "SajjadLog", "--------- size1 ---------" + size );

                for (int i = 0; i < size; i++) {
                    Log.i( "SajjadLog", "--------- JWPlayer Manager : 8 ---------" );
                    List<GsonFormat.PlaylistBean.SourcesBean> sourceList = playlist.get( i ).getSources();
                    Log.i( "SajjadLog", "--------- JWPlayer Manager : 9 ---------" );
                    final int size2 = sourceList.size();
                    Log.i( "SajjadLog", "--------- JWPlayer Manager : 10 ---------" );
                    for (int j = 0; j < size2; j++) {
                        Log.i( "SajjadLog", "--------- JWPlayer Manager : 11 ---------" );
                        List<GsonFormat.PlaylistBean.SourcesBean.DrmBean.WidevineBean.LicenseRequestHeadersBean> listheader =
                                sourceList.get( i )
                                        .getDrm()
                                        .getWidevine()
                                        .getLicenseRequestHeaders();
                        Log.i( "SajjadLog", "--------- JWPlayer Manager : 13 ---------" );
                        Map<String, String> requestProperties = new HashMap<>();
                        Log.i( "SajjadLog", "--------- JWPlayer Manager : 14 ---------" );
                        final int size3 = listheader.size();
                        Log.i( "SajjadLog", "--------- listheader ---------" + listheader );
                        Log.i( "SajjadLog", "--------- size3 ---------" + size3 );

                        Log.i( "SajjadLog", "--------- JWPlayer Manager : 15 ---------" );
                        for (int n = 0; n < size3; n++) {
                            Log.i( "SajjadLog", "--------- JWPlayer Manager : 16 ---------" );
                            requestProperties.put( listheader.get( n ).getName(), listheader.get( n ).getValue() );
                            Log.i( "SajjadLog", "--------- JWPlayer Manager : 17 ---------" );
                        }
                        PlaylistItem p = new PlaylistItem.Builder()
                                .title( playlist.get( i ).getTitle() )
                                .description( playlist.get( i ).getDescription() )
                                .image( playlist.get( i ).getImage() )
                                .mediaDrmCallback( new WidevineMediaDrmCallback( playlist.get( i ).getMediaid(), requestProperties ) )
                                .build();
                        Log.i( "SajjadLog", "--------- JWPlayer Manager : 20 ---------" );
                        lp.add( p );
                        Log.i( "SajjadLog", "--------- JWPlayer Manager : 21 ---------" );
                    }


                    Log.i( "SajjadLog", "--------- JWPlayer Manager : 22 ---------" );


                    Log.i( "SajjadLog", "--------- JWPlayer Manager : 23 ---------" );

                    //do something with i
                }
                Log.i( "SajjadLog", "--------- JWPlayer Manager : 24 ---------" );

                PlayerConfig playerConfig = new PlayerConfig.Builder()
                        .playlist( lp )
                        .build();
                Log.i( "SajjadLog", "--------- JWPlayer Manager : 25 ---------" );
                Log.i( "SajjadLog", "--------- JWPlayer Manager : playerConfig : 26 ---------" + playerConfig.toString() );
                jwview.setup( playerConfig );
            }
        } catch (Exception e) {
            Log.i( "SajjadLog-----------", e.getMessage());

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
//    @ReactProp(name = "setup")
//    public void setup(JWView v,PlayerConfig param) {
//        jwview.setup( param );
//    }

}
