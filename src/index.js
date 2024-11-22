import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export const GumletEmbedPlayer = ({ video_id, style, enabled_player_control, requested_with, ...props }) => {
  const userAgent = Platform.select({
    ios: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1",
    android: "Mozilla/5.0 (Linux; Android 10; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.91 Mobile Safari/537.36",
  });

  if (!video_id) {
    throw new Error("video_id prop is required");
  }

  let srcURL = new URL(`https://play.gumlet.io/embed/${video_id}`);

  for (const [key, value] of Object.entries(props)) {
    srcURL.searchParams.append(key, String(value)); // Convert value to a string
  }

  if (enabled_player_control !== undefined) {
    for (const control of enabled_player_control) {
      srcURL.searchParams.append('enabled_player_control', String(control));
    }
  }

  return (
    <>
      <WebView
        scrollEnabled={false}
        allowsFullscreenVideo={true}
        allowsInlineMediaPlayback={true}
        userAgent={userAgent}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        originWhitelist={['*']}
        source={{ 
          uri: srcURL.toString(),
          headers: {
            'x-requested-with': `${requested_with || 'gumletreact-native-embed-player'}`,
          },
        }}
        style={style}
    />
    </>
  );
};
