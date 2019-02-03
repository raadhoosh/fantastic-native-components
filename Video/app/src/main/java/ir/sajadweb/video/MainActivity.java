package ir.sajadweb.video;

import android.support.design.widget.CoordinatorLayout;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import com.longtailvideo.jwplayer.JWPlayerView;

import com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents;
import com.longtailvideo.jwplayer.media.playlists.PlaylistItem;

public class MainActivity extends AppCompatActivity {
    /**
     * Reference to the {@link JWPlayerView}
     */
    private JWPlayerView mPlayerView;



    /**
     * Stored instance of CoordinatorLayout
     * http://developer.android.com/reference/android/support/design/widget/CoordinatorLayout.html
     */
    private CoordinatorLayout mCoordinatorLayout;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mPlayerView = findViewById(R.id.jwplayer);



        // Handle hiding/showing of ActionBar
       // mPlayerView.addOnFullscreenListener((VideoPlayerEvents.OnFullscreenListener) this);



        // Load a media source
        PlaylistItem pi = new PlaylistItem.Builder()
                .file("http://playertest.longtailvideo.com/adaptive/bipbop/gear4/prog_index.m3u8")
                .title("BipBop")
                .description("A   player testing video.")
                .build();

        mPlayerView.load(pi);
    }
}
