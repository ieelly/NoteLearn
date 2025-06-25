import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './Navigation';
import Pagina2 from './src/screens/Pagina2';
import Pagina1 from './src/screens/Pagina1';
import SobreApp from './src/screens/SobreApp';
import TeoriaMusical from './src/screens/TeoriaMusical';


export default function App() {
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
