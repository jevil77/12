import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Compteur from './Components/Compteur';

export default function App() {
  return (
    <View style={styles.container}>
      <Compteur />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
