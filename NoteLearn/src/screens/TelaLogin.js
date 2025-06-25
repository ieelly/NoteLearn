import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, ImageBackground, Text, View, TouchableOpacity } from 'react-native';

export default function Pagina1({ navigation }) {
  return (
<View> teste </View>
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
