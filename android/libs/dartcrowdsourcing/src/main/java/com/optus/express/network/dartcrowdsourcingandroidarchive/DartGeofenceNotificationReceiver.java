package com.optus.express.network.dartcrowdsourcingandroidarchive;

import android.app.Notification;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.media.AudioManager;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Build;
import android.util.Log;

import java.io.IOException;
import java.net.URL;

public class DartGeofenceNotificationReceiver extends BroadcastReceiver {

	private static final String TAG = DartGeofenceNotificationReceiver.class.getName();
	private static final int DART_NOTIFICATION_ID = DartGeofenceNotificationReceiver.class.hashCode();
	private static final String ACTION_GEOFENCE_NOTIFICATION = "DartGeofenceNotification.SEND_NOTIFICATION";

	private static final int GEOFENCE_TRANSITION_ENTER = 1;
	private static final int GEOFENCE_TRANSITION_EXIT = 2;
	private static final int GEOFENCE_TRANSITION_DWELL = 4;

	@Override
	public void onReceive(Context context, Intent intent) {

		if (intent != null) {

			if (ACTION_GEOFENCE_NOTIFICATION.equals(intent.getAction())) {
				String eventText = intent.getStringExtra(DartNotification.NOTIFICATION_TEXT.name());
				String eventUrl = intent.getStringExtra(DartNotification.NOTIFICATION_IMAGE_URL.name());
				String eventAndroidUrl = intent.getStringExtra(DartNotification.NOTIFICATION_ANDROID_URL.name());
				int eventType = intent.getIntExtra(DartNotification.NOTIFICATION_TYPE.name(), -1);

				if (eventType == GEOFENCE_TRANSITION_ENTER
						|| eventType == GEOFENCE_TRANSITION_EXIT
						|| eventType == GEOFENCE_TRANSITION_DWELL) {

					if (eventUrl != null)
						new ImageLoadTask(context, eventText, eventUrl, eventAndroidUrl).execute();
					else
						showNotification(context, eventText, eventUrl, eventAndroidUrl, null);
				}

			}
		}
	}

	private void showNotification(Context context, String eventtext, String eventurl, String androidurl, Bitmap icon) {

		boolean sound = true;
		boolean vibrate = true;
		AudioManager audioManager = (AudioManager) context.getSystemService(Context.AUDIO_SERVICE);

		if (audioManager.getRingerMode() == AudioManager.RINGER_MODE_SILENT) {
			sound = false;
			vibrate = false;
		} else if (audioManager.getRingerMode() == AudioManager.RINGER_MODE_VIBRATE) {
			sound = false;
		}

		// Notification Text Elements
		CharSequence contentTitle = context.getString(R.string.dartnotification_title);
		CharSequence contentText = eventtext;


		// pending intent is redirection
		Intent resultIntent = new Intent(Intent.ACTION_VIEW);
		resultIntent.setData(Uri.parse(androidurl));

		PendingIntent mContentIntent = PendingIntent.getActivity(context, 0, resultIntent, PendingIntent.FLAG_UPDATE_CURRENT);


		// if bitmap from server is null
		if (eventurl == null || icon == null) {
			icon = BitmapFactory.decodeResource(context.getResources(), R.mipmap.default_notification_icon);
		}

		Uri alarmSound = RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
		long[] pattern = {0, 200, 200, 300};

		// Build the Notification
		Notification.Builder notificationBuilder;
		if (sound) {
			notificationBuilder = new Notification.Builder(context)
					.setContentTitle(contentTitle)
					.setContentText(contentText)
					.setSmallIcon(R.mipmap.ic_action_search)
					.setLargeIcon(icon)
					.setContentIntent(mContentIntent)
					.setAutoCancel(true)
					.setLights(Color.BLUE, 500, 500)
					.setSound(alarmSound)
					.setVibrate(pattern);
		} else if (!vibrate) {
			notificationBuilder = new Notification.Builder(context)
					.setContentTitle(contentTitle)
					.setContentText(contentText)
					.setSmallIcon(R.mipmap.ic_action_search)
					.setLargeIcon(icon)
					.setContentIntent(mContentIntent)
					.setAutoCancel(true)
					.setLights(Color.BLUE, 500, 500)
					.setVibrate(pattern);
		} else {
			notificationBuilder = new Notification.Builder(context)
					.setContentTitle(contentTitle)
					.setContentText(contentText)
					.setSmallIcon(R.mipmap.ic_action_search)
					.setLargeIcon(icon)
					.setContentIntent(mContentIntent)
					.setAutoCancel(true)
					.setLights(Color.BLUE, 500, 500);
		}

		// Get the NotificationManager
		NotificationManager mNotificationManager = (NotificationManager) context
				.getSystemService(Context.NOTIFICATION_SERVICE);

		// Pass the Notification to the NotificationManager:
		if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
			mNotificationManager.notify(DART_NOTIFICATION_ID, notificationBuilder.build());
		} else {
			mNotificationManager.notify(DART_NOTIFICATION_ID, notificationBuilder.getNotification());
		}

	}

	private enum DartNotification {
		NOTIFICATION_MSG,
		NOTIFICATION_TEXT,
		NOTIFICATION_STAUTS,
		NOTIFICATION_IMAGE_URL,
		NOTIFICATION_ANDROID_URL,
		NOTIFICATION_TYPE
	}

	private class ImageLoadTask extends AsyncTask<Void, Void, Bitmap> {
		private Context ctx;
		private String eventText;
		private String eventUrl;
		private String androidUrl;

		public ImageLoadTask(Context ctx, String eventText, String eventUrl, String androidUrl) {
			this.ctx = ctx;
			this.eventText = eventText;
			this.eventUrl = eventUrl;
			this.androidUrl = androidUrl;
		}

		@Override
		protected Bitmap doInBackground(Void... params) {
			URL url = null;
			try {
				url = new URL(eventUrl);
				return BitmapFactory.decodeStream(url.openConnection().getInputStream());
			} catch (IOException e) {
				Log.e(TAG, e.toString());
			}
			return null;
		}

		@Override
		protected void onPostExecute(Bitmap icon) {
			showNotification(ctx, eventText, eventUrl, androidUrl, icon);
		}
	}
}
/* EOF */