import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function PontoTuristico1({ navigation }) {
  return (
    <LinearGradient
      colors={['#003293', '#00134d', '#3f1048']}
      style={styles.backgroundGradient}
    >
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>Ponte Ferroviária Francisco de Sá</Text>
        <View style={styles.imageContainer}>
        <Image source={require('./assets/images/galeria/1/imagem1.jpg')} style={styles.imageLarge} resizeMode="cover" />
        </View>
        <Text style={styles.description}>
        A Ponte Francisco de Sá liga Castilho/SP a Três Lagoas/MS, transpondo o Rio Paraná. Possui 1024 metros de comprimento. ponte centenária totalmente construída em ferro e inaugurada em 1926, no início do Século XX.
A travessia do Rio Paraná, no ponto chamado de Jupiá, até então era feita por balsas. Duas locomotivas, uma de cada lado do rio, carregavam e descarregavam vagões nas balsas
O nome Francisco de Sá é uma homenagem ao ministro de viação e obras públicas, que chefiou este ministério durante os anos de construção da ponte.</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.firstButton]}
          onPress={() => navigation.navigate('GaleriaDeImagens1')}
        >
          <Text style={styles.buttonText}>Imagens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondButton]}
          onPress={() => navigation.navigate('MapScreen1')}
        >
          <Text style={[styles.buttonText, styles.secondButtonText]}>Localização</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({

  backgroundGradient: {
    flex: 1,
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Dimensions.get('window').height * 0.01,
    paddingBottom: Dimensions.get('window').height * 0.01,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
    fontWeight: '100',
    textShadowColor: 'rgba(55, 14, 67, 1)',
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 5,
    marginLeft: Dimensions.get('window').width*0.1,
    marginRight: Dimensions.get('window').width*0.1,
  },
  description: {
    fontSize: 14,
    textAlign: 'justify',
    color: 'white',
    marginBottom: Dimensions.get('window').height * 0.03,
    marginLeft: Dimensions.get('window').width*0.1,
    marginRight: Dimensions.get('window').width*0.1,
  },
  imageLarge: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.3,
    marginBottom: Dimensions.get('window').height * 0.03,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: Dimensions.get('window').width*0.8,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Dimensions.get('window').height * 0.04,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginHorizontal: 10, 
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20, 
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 1,
    paddingHorizontal: 20, 
  },
  firstButton: {
    borderColor: 'white',
    borderWidth:1,
    height: Dimensions.get('window').height * 0.1, 
    width: Dimensions.get('window').width * 0.31,
  },
  secondButton: {
    backgroundColor: 'white',
    borderColor: '#370e43',
    borderWidth: 1,
    height: Dimensions.get('window').height * 0.1, 
    width: Dimensions.get('window').width * 0.45,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  secondButtonText: {
    color: '#370e43',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Dimensions.get('window').height * 0.02,
    paddingHorizontal: Dimensions.get('window').width * 0.1,
  },
  imageSmall: {
    width: Dimensions.get('window').width * 0.25, // Ajuste o tamanho conforme necessário
    height: Dimensions.get('window').height * 0.15, // Ajuste o tamanho conforme necessário
    marginBottom: Dimensions.get('window').height * 0.01,
  },
});

export default PontoTuristico1;
