import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

const naturais = [
  { nota: 'Dó', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\Do.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\do.mp3') },
  { nota: 'Ré', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\Re.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\re.mp3') },
  { nota: 'Mi', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\Mi.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\mi.mp3') },
  { nota: 'Fá', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\Fa.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\fa.mp3') },
  { nota: 'Sol', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\Sol.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\sol.mp3') },
  { nota: 'Lá', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\La.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\la.mp3') },
  { nota: 'Si', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\Si.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\si.mp3') },
];

const sustenidos = [
  { nota: 'Dó♯', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\DoSustenido.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\dosus.mp3') },
  { nota: 'Ré♯', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\ReSustenido.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\resus.mp3') },
  { nota: 'Fá♯', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\FaSustenido.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\fasus.mp3') },
  { nota: 'Sol♯', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\SolSustenido.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\solsus.mp3') },
  { nota: 'Lá♯', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\LaSustenido.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\lasus.mp3') },
];

const bemois = [
  { nota: 'Ré♭', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\ReBemol.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\dosus.mp3') },
  { nota: 'Mi♭', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\MiBemol.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\resus.mp3') },
  { nota: 'Sol♭', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\SolBemol.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\fasus.mp3') },
  { nota: 'Lá♭', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\LaBemol.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\solsus.mp3') },
  { nota: 'Si♭', imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\Notas\\SiBemol.png'), som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\lasus.mp3') },
];


function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const teclasBrancas = ['Dó', 'Ré', 'Mi', 'Fá', 'Sol', 'Lá', 'Si'];
const teclasPretas = [
  { nomes: ['Dó♯', 'Ré♭'], pos: 0, som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\dosus.mp3') },
  { nomes: ['Ré♯', 'Mi♭'], pos: 1, som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\resus.mp3') },
  { nomes: ['Fá♯', 'Sol♭'], pos: 3, som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\fasus.mp3') },
  { nomes: ['Sol♯', 'Lá♭'], pos: 4, som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\solsus.mp3') },
  { nomes: ['Lá♯', 'Si♭'], pos: 5, som: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\sounds\\lasus.mp3') },
];

export default function AcerteNota({ navigation }) {
  const [desafios, setDesafios] = useState(() => shuffle([
    ...naturais,
    ...sustenidos,
    ...bemois,
  ]));
  const [indice, setIndice] = useState(0);
  const [acertos, setAcertos] = useState(0);

  useEffect(() => {
    setDesafios(shuffle([
      ...naturais,
      ...sustenidos,
      ...bemois,
    ]));
    setIndice(0);
    setAcertos(0);
  }, []);

  const desafioAtual = desafios[indice];

  const playNote = async (nota) => {
    let som;

    som = naturais.find(n => n.nota === nota)?.som;
    if (!som) som = sustenidos.find(n => n.nota === nota)?.som;
    if (!som) som = bemois.find(n => n.nota === nota)?.som;
    if (!som) return;
    try {
      const soundObject = new Audio.Sound();
      await soundObject.loadAsync(som);
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

  const verificarResposta = (resposta) => {
    let correta = false;
    let notaParaSom = null;

    if (Array.isArray(resposta)) {
      correta = resposta.includes(desafioAtual.nota);
      notaParaSom = resposta[0]; 
    } else {
      
      correta = resposta === desafioAtual.nota;
      notaParaSom = resposta;
    }

    playNote(notaParaSom);

    if (correta) {
      setAcertos(acertos + 1);
      Alert.alert('Correto!', 'Você acertou!');
    } else {
      Alert.alert('Errado!', `A nota correta era: ${desafioAtual.nota}`);
    }
    const proximo = indice + 1;
    if (proximo < desafios.length) {
      setIndice(proximo);
    } else {
      Alert.alert('Fim do desafio', `Você acertou ${correta ? acertos + 1 : acertos} de ${desafios.length}`, [
        { text: 'Voltar ao menu', onPress: () => navigation.goBack() },
        {
          text: 'Reiniciar',
          onPress: () => {
            setDesafios(shuffle([
              ...naturais,
              ...sustenidos,
              ...bemois,
            ]));
            setIndice(0);
            setAcertos(0);
          }
        }
      ]);
    }
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
            <Text style={styles.title}>ACERTE A NOTA</Text>
          </View>
          <View style={styles.titleDecoration} />

          <Text style={styles.instruction}>
            Veja a nota na partitura e escolha a tecla correta no teclado virtual!
          </Text>

          <View style={styles.imageWrapper}>
            <Image
              source={desafioAtual.imagem}
              style={styles.imagemNota}
              resizeMode="contain"
            />
          </View>

          <View style={styles.tecladoContainer}>
            <View style={styles.teclasBrancasContainer}>
              {teclasBrancas.map((nota) => (
                <TouchableOpacity
                  key={nota}
                  style={styles.teclaBranca}
                  onPress={() => verificarResposta(nota)}
                />
              ))}
            </View>
            <View style={styles.teclasPretasContainer}>
              {teclasPretas.map((tecla, idx) => (
                <TouchableOpacity
                  key={tecla.nomes.join('/')}
                  style={[styles.teclaPreta, { left: tecla.pos * 60 + 40 }]}
                  onPress={() => verificarResposta(tecla.nomes)}
                />
              ))}
            </View>
          </View>
          <Text style={styles.score}>Acertos: {acertos}</Text>
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
  instruction: {
    marginVertical: 20,
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#333',
  },
  imageWrapper: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imagemNota: {
    width: 300,
    height: 120,
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