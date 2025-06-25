import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

// Notas jogáveis (teclas brancas)
const notasJogaveis = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si'];
const teclasBrancas = notasJogaveis;
const teclasPretas = [
  { nome: 'Dó♯/Ré♭', pos: 0 },
  { nome: 'Ré♯/Mi♭', pos: 1 },
  { nome: 'Fá♯/Sol♭', pos: 3 },
  { nome: 'Sol♯/Lá♭', pos: 4 },
  { nome: 'Lá♯/Si♭', pos: 5 },
];

// Sons das notas
const notaParaSom = {
  'Dó': require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\do.mp3'),
  'Ré': require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\re.mp3'),
  'Mi': require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\mi.mp3'),
  'Fá': require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\fa.mp3'),
  'Sol': require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\sol.mp3'),
  'Lá': require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\la.mp3'),
  'Si': require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\si.mp3'),
};

// Imagens das partituras (adicione o caminho correto da sua imagem)
const melodias = [
  {
    nome: 'Brilha, Brilha Estrelinha (parte 1)',
    sequencia: ['Dó', 'Dó', 'Sol', 'Sol', 'Lá', 'Lá', 'Sol'],
    partitura: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\brilha1.jpg'), // Imagem da partitura da parte 1
  },
  {
    nome: 'Brilha, Brilha Estrelinha (parte 2)',
    sequencia: ['Fá', 'Fá', 'Mi', 'Mi', 'Ré', 'Ré', 'Dó'],
    partitura: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\brilha2.png'), // Imagem da partitura da parte 2
  },
];

export default function ToqueMelodia({ navigation }) {
  const [indiceMelodia, setIndiceMelodia] = useState(0);
  const [entrada, setEntrada] = useState([]);
  const [pontos, setPontos] = useState(0);

  const melodiaAtual = melodias[indiceMelodia];

  const playNote = async (nota) => {
    try {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(notaParaSom[nota]);
      await soundObject.playAsync();
      soundObject.setOnPlaybackStatusUpdate(status => {
        if (status.didJustFinish) {
          soundObject.unloadAsync();
        }
      });
    } catch (error) {
      console.log('Erro ao tocar som', error);
    }
  };

  const tocarNota = (nota) => {
    playNote(nota);

    const novaEntrada = [...entrada, nota];
    setEntrada(novaEntrada);

    const index = novaEntrada.length - 1;

    if (nota !== melodiaAtual.sequencia[index]) {
      Alert.alert('Erro!', `A nota correta era: ${melodiaAtual.sequencia[index]}`, [
        { text: 'Tentar novamente', onPress: resetarMelodia },
        { text: 'Voltar', onPress: () => navigation.goBack() },
      ]);
      return;
    }

    if (novaEntrada.length === melodiaAtual.sequencia.length) {
      setPontos(pontos + 1);
      const proximaMelodia = indiceMelodia + 1;

      if (proximaMelodia < melodias.length) {
        Alert.alert('Acertou!', 'Vamos para a próxima parte!');
        setIndiceMelodia(proximaMelodia);
        setEntrada([]);
      } else {
        Alert.alert('Parabéns!', `Você acertou todas as melodias! Pontos: ${pontos + 1}`, [
          { text: 'Voltar ao menu', onPress: () => navigation.goBack() },
        ]);
      }
    }
  };

  const resetarMelodia = () => {
    setEntrada([]);
  };

  return (
    <ImageBackground
      source={require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\assets\\background2.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.section}>
          <View style={styles.titleRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle-outline" size={40} color="#aa82f4" />
            </TouchableOpacity>
            <Text style={styles.title}>TOQUE A MELODIA</Text>
          </View>
          <View style={styles.titleDecoration} />

          <Text style={styles.subtitle}>Melodia: {melodiaAtual.nome}</Text>

          <Text style={styles.instruction}>Veja a partitura e toque no teclado:</Text>

          <View style={styles.imageWrapper}>
            <Image
              source={melodiaAtual.partitura}
              style={styles.imagemPartitura}
              resizeMode="contain"
            />
          </View>

          {/* Teclado igual ao design das outras páginas */}
          <View style={styles.tecladoContainer}>
            <View style={styles.teclasBrancasContainer}>
              {teclasBrancas.map((nota, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.teclaBranca}
                  onPress={() => tocarNota(nota)}
                />
              ))}
            </View>

            <View style={styles.teclasPretasContainer}>
              {teclasPretas.map((tecla, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.teclaPreta, { left: tecla.pos * 60 + 40 }]}
                  onPress={() => Alert.alert('Nota preta (fora da melodia)', tecla.nome)}
                />
              ))}
            </View>
          </View>

          <Text style={styles.score}>Pontuação: {pontos}</Text>
        </View>
      </ScrollView>
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
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 25,
    elevation: 2,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
    color: '#aa82f4',
  },
  titleDecoration: {
    width: 150,
    height: 4,
    backgroundColor: '#aa82f4',
    borderRadius: 2,
    alignSelf: 'center',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 4,
    textAlign: 'center',
    color: '#04c2d5',
    fontWeight: '700',
  },
  instruction: {
    marginVertical: 20,
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
  },
  imageWrapper: {
    alignItems: 'center',
    marginVertical: 18,
  },
  imagemPartitura: {
    width: 320,
    height: 110,
  },
  tecladoContainer: {
    width: 420,
    height: 200,
    position: 'relative',
    marginTop: 10,
    alignSelf: 'center',
  },
  teclasBrancasContainer: {
    flexDirection: 'row',
    zIndex: 1,
  },
  teclaBranca: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    width: 60,
    height: 200,
    marginRight: -1,
  },
  teclasPretasContainer: {
    position: 'absolute',
    top: 0,
    height: 120,
    width: '100%',
    zIndex: 2,
  },
  teclaPreta: {
    position: 'absolute',
    backgroundColor: '#000',
    width: 40,
    height: 120,
    borderRadius: 4,
  },
  score: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a9e4f',
    textAlign: 'center',
  },
});