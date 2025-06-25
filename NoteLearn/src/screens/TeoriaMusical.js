import { ScrollView, StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function TeoriaMusical({ navigation }) {
  return (
    <ImageBackground
      source={require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\assets\\background2.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar style="auto" />

        <Image
          source={require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\assets\\logo.png')}
          style={styles.logo}
        />
        <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>VOLTAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Pagina2')}>
            <Text style={styles.backText}>PRATICAR</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.section}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Teoria Musical 🎼</Text>
        </View>
          <Text style={styles.sectionTitle}>Notação Musical</Text>
          <Text style={styles.sectionText}>
            A notação musical é composta por todos os elementos usados para escrever música. Ela se divide em três partes principais:
            {'\n'}Representação da altura dos sons: através da pauta, notas e claves.
            {'\n'}Representação da duração dos sons: figuras musicais.
            {'\n'}Representação dos silêncios: figuras de pausa.
          </Text>
        <View style={{ alignItems: 'center' }}>
        <Image
          source={require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\assets\\NotacaoMusical.jpg')}
          style={styles.imagensTeoriaMusical}
        />
        </View>

          <Text style={styles.sectionTitle}>Pauta</Text>
          <Text style={styles.sectionText}>
            A pauta (ou pentagrama) é composta por 5 linhas e 4 espaços horizontais. Notas são posicionadas sobre essas linhas e espaços, contados de baixo para cima. Quando necessário, adicionam-se linhas suplementares acima ou abaixo para representar notas mais agudas ou mais graves.
          </Text>
        <View style={{ alignItems: 'center' }}>
        <Image
          source={require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\assets\\pentagrama1.png')}
          style={styles.imagensTeoriaMusical}
        />
        </View>
        <View style={{ alignItems: 'center' }}>
        <Image
          source={require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\assets\\pentagrama2.jpg')}
          style={styles.imagensTeoriaMusical}
        />
        </View>
          <Text style={styles.sectionTitle}>Claves</Text>
          <Text style={styles.sectionText}>
            A clave é um símbolo que determina a altura das notas na pauta. As principais são:
            {'\n'}Clave de Sol – posiciona a nota Sol na segunda linha da pauta.
            {'\n'}Clave de Fá – posiciona o Fá na quarta linha.
            {'\n'}Clave de Dó – utilizada em diferentes posições (terceira linha, por exemplo).
            {'\n'}Instrumentos graves usam a clave de Fá, os agudos usam a de Sol. O piano usa duas claves: Sol para a mão direita e Fá para a esquerda.
          </Text>

            <View style={{ alignItems: 'center' }}>
            <Image
            source={require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\assets\\Claves.png')}
            style={styles.imagensTeoriaMusical}
            />
            </View>

          <Text style={styles.sectionTitle}>Localização das Notas na Clave de Sol</Text>
          <Text style={styles.sectionText}>
            Na clave de Sol, a segunda linha representa a nota Sol. A partir dela, subindo ou descendo, identificamos as demais:
            {'\n'}- Primeira linha suplementar inferior: Dó
            {'\n'}- Primeiro espaço suplementar inferior: Ré
            {'\n'}- Primeira linha: Mi
            {'\n'}- Primeiro espaço: Fá
            {'\n'}- Segunda linha: Sol
            {'\n'}- Segundo espaço: Lá
            {'\n'}- Terceira linha: Si
            {'\n'}- Terceiro espaço: Dó
            {'\n'}- Quarta linha: Ré
            {'\n'}- Quarto espaço: Mi
            {'\n'}- Quinta linha: Fá
          </Text>
            <View style={{ alignItems: 'center' }}>
            <Image
            source={require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\assets\\ClaveSol.jpg')}
            style={styles.imagensTeoriaMusical}
            />
            </View>

        <Text style={styles.sectionTitle}>Acidentes Musicais</Text>
        <Text style={styles.sectionText}>
        Sustenido (♯): indica que a nota deve ser tocada meio tom acima.
        {'\n'}Exemplo: Dó♯ é meio tom acima do Dó.
        {'\n\n'}Bemol (♭): indica que a nota deve ser tocada meio tom abaixo.
        {'\n'}Exemplo: Mi♭ é meio tom abaixo do Mi.
        {'\n\n'}Esses símbolos aparecem antes da nota na partitura e alteram o som da nota enquanto estiver no mesmo compasso, a menos que um bequadro (♮) anule o acidente.
        </Text>
            <View style={{ alignItems: 'center' }}>
            <Image
            source={require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\assets\\Acidentes.png')}
            style={styles.imagensTeoriaMusical}
            />
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
    padding: 30,
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  titleContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    color: '#aa82f4',
  },
  logo: {
    width: 300,
    height: 200,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 35,
    elevation: 2,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 20,
    color: '#04c2d5',
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
    padding: 10,
  },
  backButton: {
    marginBottom: 20,
    backgroundColor: '#04c2d5',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 25,
    elevation: 3,
  },
  backText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '600',
  },
  buttonRow: {
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 50,
  marginBottom: 10,
},
imagensTeoriaMusical: {
    width: 300,
    height: 200,
    marginBottom: 30,
    marginTop: 30,
},
});
