
import { View, Text, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native';

export default function SobreApp({ navigation }) {
  return (
    <ImageBackground
      source={require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\assets\\background2.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('C:\\Users\\Ranielly\\Desktop\\ProjetoH1\\NoteLearn\\assets\\logo.png')}
          style={styles.logo}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>VOLTAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Sobre o App</Text>
          </View>

          <Text style={styles.sectionText}>
            O aplicativo tem como principal objetivo auxiliar estudantes de música no processo de aprendizagem da leitura de partituras e identificação de notas musicais. Muitos iniciantes enfrentam dificuldades nessa etapa. Para ajudá-los, o app oferece uma abordagem interativa, utilizando jogos educativos que estimulam a prática constante de forma leve e divertida.{"\n\n"}
            A proposta é transformar o estudo da teoria musical em uma experiência mais dinâmica, motivando o usuário a praticar com frequência e, assim, desenvolver suas habilidades de forma mais eficiente. Os jogos vão desafiar o usuário a reconhecer notas, intervalos, claves e ritmos.{"\n\n"}
            <Text style={{fontWeight: 'bold'}}>Público-alvo:</Text> estudantes de música, especialmente iniciantes e intermediários.
          </Text>

          <Text style={styles.sectionTitle}>Jogos e funcionalidades</Text>
          <View style={styles.box}>
            <Text style={styles.featureTitle}>Notas e Claves</Text>
            <Text style={styles.featureText}>
              Aprenda os fundamentos da partitura: identificação de notas, compreensão das claves e o papel das pausas. Tudo de forma clara e interativa para facilitar a leitura musical.
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.featureTitle}>Memória Musical</Text>
            <Text style={styles.featureText}>
              Treine sua memória auditiva e visual, reconhecendo notas e padrões musicais. Com desafios interativos, você vai aprimorar sua capacidade de lembrar e identificar músicas, intervalos e acordes de forma rápida e eficiente.
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.featureTitle}>Acerte a Nota</Text>
            <Text style={styles.featureText}>
              Desafie-se a identificar notas musicais visualmente! Veja a nota na partitura e escolha a tecla correta no teclado virtual. Um exercício para melhorar sua leitura e reconhecimento de notas.
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.featureTitle}>Toque a Melodia</Text>
            <Text style={styles.featureText}>
              Aprenda a tocar melodias simples a partir da partitura! Visualize as notas e toque-as no teclado virtual, praticando sua leitura musical e desenvolvendo sua coordenação motora.
            </Text>
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
  logo: {
    width: 300,
    height: 200,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 50,
    marginBottom: 10,
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
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 35,
    elevation: 2,
    width: '100%',
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
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
    marginBottom: 10,
  },
  box: {
    backgroundColor: '#f3f1fa',
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    marginTop: 4,
  },
  featureTitle: {
    fontWeight: 'bold',
    color: '#aa82f4',
    fontSize: 17,
    marginBottom: 2,
  },
  featureText: {
    color: '#333',
    fontSize: 15,
    lineHeight: 20,
  },
  imagensSobre: {
    width: 300,
    height: 200,
    marginBottom: 30,
    marginTop: 30,
  },
});