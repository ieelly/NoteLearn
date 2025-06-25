import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const notasJogaveis = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si'];

const teclasBrancas = notasJogaveis;
const teclasPretas = [
  { nome: 'Dó♯/Ré♭', pos: 0 },
  { nome: 'Ré♯/Mi♭', pos: 1 },
  { nome: 'Fá♯/Sol♭', pos: 3 },
  { nome: 'Sol♯/Lá♭', pos: 4 },
  { nome: 'Lá♯/Si♭', pos: 5 },
];

const notaParaSom = {
  'Dó': require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\do.mp3'),
  'Ré': require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\re.mp3'),
  'Mi': require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\mi.mp3'),
  'Fá': require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\fa.mp3'),
  'Sol': require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\sol.mp3'),
  'Lá': require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\la.mp3'),
  'Si': require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\si.mp3'),
};

export default function MemoriaMusical({ navigation }) {
  const [sequencia, setSequencia] = useState([]);
  const [entradaUsuario, setEntradaUsuario] = useState([]);
  const [rodada, setRodada] = useState(1);
  const [pontos, setPontos] = useState(0);
  const [mostrandoSequencia, setMostrandoSequencia] = useState(false);
  const [notaAtiva, setNotaAtiva] = useState('');

  useEffect(() => {
    iniciarRodada([]);

  }, []);

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

  const iniciarRodada = (sequenciaInicial = null) => {
    setEntradaUsuario([]);
    const baseSequencia = sequenciaInicial !== null ? sequenciaInicial : sequencia;
    const novaNota = notasJogaveis[Math.floor(Math.random() * notasJogaveis.length)];
    const novaSequencia = [...baseSequencia, novaNota];
    setSequencia(novaSequencia);
    mostrarSequencia(novaSequencia);
  };

  const mostrarSequencia = async (sequenciaParaMostrar) => {
    setMostrandoSequencia(true);
    for (let i = 0; i < sequenciaParaMostrar.length; i++) {
      setNotaAtiva(sequenciaParaMostrar[i]);
      await playNote(sequenciaParaMostrar[i]);
      await new Promise((resolve) => setTimeout(resolve, 600));
      setNotaAtiva('');
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
    setMostrandoSequencia(false);
  };

  const tocarNota = (nota) => {
    if (mostrandoSequencia) return;

    playNote(nota);

    const novaEntrada = [...entradaUsuario, nota];
    setEntradaUsuario(novaEntrada);
    const index = novaEntrada.length - 1;

    if (nota !== sequencia[index]) {
      Alert.alert('Erro!', 'Sequência incorreta.', [
        { text: 'Tentar novamente', onPress: resetarJogo },
        { text: 'Voltar', onPress: () => navigation.goBack() },
      ]);
      return;
    }

    if (novaEntrada.length === sequencia.length) {
      setPontos(pontos + 1);
      setRodada(rodada + 1);
      setTimeout(() => iniciarRodada(), 1000);
    }
  };

  const resetarJogo = () => {
    setRodada(1);
    setPontos(0);
    setSequencia([]);
    setEntradaUsuario([]);
    setTimeout(() => iniciarRodada([]), 400);
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
            <Text style={styles.title}>MEMÓRIA MUSICAL</Text>
          </View>
          <View style={styles.titleDecoration} />

          <Text style={styles.subtitle}>Rodada: {rodada}</Text>
          <Text style={styles.subtitle}>Pontos: {pontos}</Text>
          <Text style={styles.instruction}>
            {mostrandoSequencia ? 'Memorize a sequência...' : 'Toque no teclado!'}
          </Text>

          <View style={styles.sequenciaContainer}>
            {notasJogaveis.map((nota, index) => (
              <View
                key={index}
                style={[
                  styles.notaQuadrado,
                  nota === notaAtiva && styles.notaAtiva,
                ]}
              >
                <Text style={styles.notaTexto}>{nota}</Text>
              </View>
            ))}
          </View>

          <View style={styles.tecladoContainer}>
            <View style={styles.teclasBrancasContainer}>
              {teclasBrancas.map((nota, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.teclaBranca}
                  onPress={() => tocarNota(nota)}
                  disabled={mostrandoSequencia}
                />
              ))}
            </View>

            <View style={styles.teclasPretasContainer}>
              {teclasPretas.map((tecla, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.teclaPreta, { left: tecla.pos * 60 + 40 }]}
                  onPress={() => Alert.alert('Nota preta (fora do jogo)', tecla.nome)}
                />
              ))}
            </View>
          </View>
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
  sequenciaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  notaQuadrado: {
    backgroundColor: '#04c2d5',
    paddingVertical: 13,
    paddingHorizontal: 18,
    borderRadius: 8,
    margin: 6,
    minWidth: 48,
    alignItems: 'center',
  },
  notaTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  notaAtiva: {
    backgroundColor: '#028f9c',
    transform: [{ scale: 0.95 }],
  },
  tecladoContainer: {
    width: 420,
    height: 200,
    position: 'relative',
    marginTop: 30,
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
});