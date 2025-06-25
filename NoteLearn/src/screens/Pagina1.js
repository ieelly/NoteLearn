import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, ImageBackground, Text, View, TouchableOpacity } from 'react-native';

export default function Pagina1({ navigation }) {
  return (
    <ImageBackground
      source={require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\assets\\background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image
          source={require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\assets\\logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.sobreButton} onPress={() => navigation.navigate('SobreApp')}>
          <Text style={styles.sobreButtonText}>Sobre o App 💬</Text>
        </TouchableOpacity>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TeoriaMusical')}>
            <Text style={styles.buttonText}>COMEÇAR</Text>
          </TouchableOpacity>

        </View>

        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 180,
  },
  buttonContainer: {
    gap: 25,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#04c2d5',
    paddingVertical: 25,
    paddingHorizontal: 40,
    borderRadius: 25,
    width: 300,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
  },
  logo: {
    width: 500,
    height: 400,
  },
  sobreButton: {
  position: 'absolute',
  top: 50,
  right: 20,
  paddingVertical: 8,
  paddingHorizontal: 15,
  elevation: 4,
  shadowColor: '#000',
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.3,
  shadowRadius: 2,
},
sobreButtonText: {
  color: '#aa82f4',
  fontWeight: '500',
  fontSize: 20,
},

});
