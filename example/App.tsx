import { StyleSheet, View } from 'react-native';
import { GumletEmbedPlayer } from '../';

export default function App() {
  return (
    <View style={styles.container}>
      <GumletEmbedPlayer
        video_id="646fb01f27e4d4aff971d631"
        enabled_player_control={['play', 'play-large', 'fullscreen']}
        autoplay={true}
        style={styles.box}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    height: 500,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 400,
    height: 500,
    top: 0,
    backgroundColor: 'black',
  },
});
