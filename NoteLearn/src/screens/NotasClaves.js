import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, ImageBackground, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const perguntas = [
  {
    pergunta: 'Qual é a nota mostrada na clave de Sol?',
    resposta: 'Dó',
    opcoes: ['Dó', 'Ré', 'Mi'],
    imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\NotasClavesImagens\\NotasClaves-1.png')
  },
  {
    pergunta: 'O que representa esta pausa?',
    resposta: 'Semínima',
    opcoes: ['Semibreve', 'Semínima', 'Colcheia'],
    imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\NotasClavesImagens\\NotasClaves-2.png')
  },
  {
    pergunta: 'Qual é esta nota na clave de Fá?',
    resposta: 'Fá',
    opcoes: ['Lá', 'Fá', 'Dó'],
    imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\NotasClavesImagens\\NotasClaves-3.png')

  },
  {
    pergunta: 'Qual é a nota localizada na segunda linha da clave de Sol?',
    resposta: 'Sol',
    opcoes: ['Sol', 'Mi', 'Lá'],
    imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\NotasClavesImagens\\NotasClaves-4.png')
  },
  {
    pergunta: 'Qual é o valor de duração da figura chamada Semibreve?',
    resposta: '4 tempos',
    opcoes: ['1 tempo', '2 tempos', '4 tempos'],
    imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\NotasClavesImagens\\NotasClaves-5.png')

  },
  {
    pergunta: 'Quantas colcheias cabem dentro de uma semínima?',
    resposta: '2',
    opcoes: ['2', '3', '4'],
    imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\NotasClavesImagens\\NotasClaves-6.png')
  },
  {
    pergunta: 'Que nome recebe a pausa que equivale a uma mínima?',
    resposta: 'Pausa de mínima',
    opcoes: ['Pausa de semínima', 'Pausa de mínima', 'Pausa de colcheia'],
    imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\NotasClavesImagens\\NotasClaves-7.png')

  },
  {
    pergunta: 'Qual dessas figuras representa a menor duração?',
    resposta: 'Fusa',
    opcoes: ['Semibreve', 'Colcheia', 'Fusa'],
    imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\NotasClavesImagens\\NotasClaves-8.png')
  },
  {
    pergunta: 'Na clave de Fá, qual é a nota posicionada na terceira linha?',
    resposta: 'Ré',
    opcoes: ['Fá', 'Dó', 'Ré'],
    imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\NotasClavesImagens\\NotasClaves-9.png')
  },
  {
    pergunta: 'Qual é o nome da clave que posiciona o Dó central na terceira linha?',
    resposta: 'Clave de Dó',
    opcoes: ['Clave de Sol', 'Clave de Fá', 'Clave de Dó'],
    imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\NotasClavesImagens\\NotasClaves-10.png')
  },
  {
    pergunta: 'Que figura representa metade da duração de uma mínima?',
    resposta: 'Semínima',
    opcoes: ['Semínima', 'Colcheia', 'Semibreve'],
    imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\NotasClavesImagens\\NotasClaves-11.png')
  },
  {
    pergunta: 'O que indica um sustenido (#) antes de uma nota?',
    resposta: 'Aumenta um semitom',
    opcoes: ['Diminui um tom', 'Aumenta um semitom', 'Mantém igual'],
    imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\NotasClavesImagens\\NotasClaves-12.png')
  },
  {
    pergunta: 'O que representa um bemol (♭)?',
    resposta: 'Diminui um semitom',
    opcoes: ['Aumenta um semitom', 'Diminui um semitom', 'Aumenta um tom'],
    imagem: require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\NotasClavesImagens\\NotasClaves-13.png')
  }
];

export default function NotasClaves({ navigation }) {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [pontos, setPontos] = useState(0);

  const perguntaAtual = perguntas[indiceAtual];

  const verificarResposta = (opcao) => {
    if (opcao === perguntaAtual.resposta) {
      setPontos(pontos + 1);
      Alert.alert('Correto!', 'Você acertou!');
    } else {
      Alert.alert('Errado!', `A resposta certa era: ${perguntaAtual.resposta}`);
    }

    const proximo = indiceAtual + 1;
    if (proximo < perguntas.length) {
      setIndiceAtual(proximo);
    } else {
      Alert.alert('Fim do jogo', `Você acertou ${pontos + 1} de ${perguntas.length}`, [
        { text: 'Voltar ao menu', onPress: () => navigation.goBack() },
      ]);
    }
  };

  return (
    <ImageBackground
      source={require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\assets\\background2.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.section}>
          <View style={styles.titleRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back-circle-outline" size={40} color="#aa82f4" />
            </TouchableOpacity>
            <Text style={styles.title}>NOTAS E CLAVES</Text>
          </View>
          <View style={styles.titleDecoration} />

          {perguntaAtual.imagem && (
            <View style={styles.imageWrapper}>
              <Image 
                source={perguntaAtual.imagem} 
                style={styles.imagensTeoriaMusical} 
                resizeMode="contain" 
              />
            </View>
          )}

          <Text style={styles.question}>{perguntaAtual.pergunta}</Text>

          {perguntaAtual.opcoes.map((opcao, index) => (
            <TouchableOpacity key={index} style={styles.button} onPress={() => verificarResposta(opcao)}>
              <Text style={styles.buttonText}>{opcao}</Text>
            </TouchableOpacity>
          ))}

          <Text style={styles.score}>Pontuação: {pontos}</Text>
        </View>
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
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 25,
    elevation: 2,
    width: '100%',
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
  imageWrapper: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imagensTeoriaMusical: {
    width: 300,
    height: 200,
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#04c2d5',
    padding: 12,
    marginVertical: 5,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  score: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a9e4f',
  },
});
