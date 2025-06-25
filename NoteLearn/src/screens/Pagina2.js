import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Pagina2({ navigation }) {
  return (
      <ImageBackground
        source={require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\assets\\background.png')}
        style={styles.background}
        resizeMode="cover"
      >
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-circle-outline" size={50} color="#aa82f4" style={styles.icon}/>
      </TouchableOpacity>
      <Text style={styles.title}>SELECIONE UM JOGO</Text>
    </View>
    <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NotasClaves')}>
        <Text style={styles.buttonText}>NOTAS E CLAVES</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MemoriaMusical')}>
        <Text style={styles.buttonText}>MEMÓRIA MUSICAL</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AcerteNota')}>
        <Text style={styles.buttonText}>ACERTE A NOTA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ToqueMelodia')}>
        <Text style={styles.buttonText}>TOQUE A MELODIA</Text>
      </TouchableOpacity>
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
    justifyContent: 'center',
    marginBottom: 200,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#04c2d5',
  },
  button: {
    backgroundColor: '#04c2d5',
    paddingVertical: 35,
    width: 350,
    borderRadius: 35,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
header: {
  marginTop: 220,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
},
icon: {
  marginRight: 20,
},

});

