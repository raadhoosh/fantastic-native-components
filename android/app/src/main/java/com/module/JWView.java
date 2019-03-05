package com.module;

import android.app.Activity;
import android.content.Context;
import android.util.AttributeSet;
import android.widget.FrameLayout;

import com.facebook.react.bridge.ReactContext;
import com.longtailvideo.jwplayer.JWPlayerView;
import com.longtailvideo.jwplayer.configuration.PlayerConfig;
import com.longtailvideo.jwplayer.media.playlists.PlaylistItem;

public class JWView extends FrameLayout {


    private final Context _context;
    private Activity activity = null;
    JWPlayerView playerView;
    public JWView(Context context) {
        super(context);
        this._context = context;
        this.activity = ((ReactContext) getContext()).getCurrentActivity();
        this.playerView = new JWPlayerView(this.activity, (AttributeSet) null );
        addView(this.playerView);
    }

    private final Runnable measureAndLayout = new Runnable() {
        @Override
        public void run() {
            measure(
                    MeasureSpec.makeMeasureSpec(getWidth(), MeasureSpec.EXACTLY),
                    MeasureSpec.makeMeasureSpec(getHeight(), MeasureSpec.EXACTLY));
            layout(getLeft(), getTop(), getRight(), getBottom());
        }
    };

    @Override
    public void requestLayout() {
        super.requestLayout();

        // The spinner relies on a measure + layout pass happening after it calls requestLayout().
        // Without this, the widget never actually changes the selection and doesn't call the
        // appropriate listeners. Since we override onLayout in our ViewGroups, a layout pass never
        // happens after a call to requestLayout, so we simulate one here.
        post(measureAndLayout);
    }


    public void load(PlaylistItem param) {
        this.playerView.load( param );
    }

    public void setup(PlayerConfig param) {
        this.playerView.setup( param );
    }
}