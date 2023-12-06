import * as React from 'react';
import { useState } from 'react';
import { View, Text, Dimensions, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, useWindowDimensions, Modal, Image } from 'react-native';

const images = {
  imagem1: require('./assets/images/galeria/1/imagem1.jpg'),
  imagem2: require('./assets/images/galeria/1/imagem2.jpg'),
  imagem3: require('./assets/images/galeria/1/imagem3.jpg'),
  imagem4: require('./assets/images/galeria/1/imagem4.jpg'),
};

export const GaleriaDeImagens1 = ({ navigation }) => {
  const windowWidth = useWindowDimensions().width;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (imageKey) => {
    setSelectedImage(images[imageKey]);
    setModalVisible(true);
  };

  const renderImages = () => {
    const renderedImages = [];

    for (let i = 1; i <= 4; i++) {
      renderedImages.push(
        <TouchableOpacity key={i} onPress={() => handleImagePress(`imagem${i}`)}>
          <Image
            source={images[`imagem${i}`]}
            style={{
              width: windowWidth * 0.42,
              height: windowWidth * 0.3,
              marginBottom: windowWidth * 0.05, // 5% da largura da tela
              marginRight: '2.7%',
              marginLeft: '2.7%',
              borderRadius: 10,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      );
    }

    return renderedImages;
  };

  return (
    <ImageBackground
      source={require('./assets/images/fundo.jpg')}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <View style={styles.container}>
          <Text style={styles.title}>Ponte Ferroviária Francisco de Sá</Text>
      

        <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ position: 'absolute', top: 20, right: 20 }}>
              <Text style={{ color: 'white', fontSize: 18 }}>Fechar</Text>
            </TouchableOpacity>
            <Image source={selectedImage} style={{ width: '80%', height: '80%', resizeMode: 'contain' }} />
          </View>
        </Modal>

    {/*    <Image source={images['imagem1']} style={{ width: '100%', height: 200 }} resizeMode="cover" />
*/}
        <ScrollView style={{ marginVertical: '5%', marginLeft: '2.5%', marginRight: '2.5%' }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {renderImages()}
          </View>
        </ScrollView>

        
          <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.firstButton]}
          onPress={() => navigation.navigate('DetailsScreen')}
        >
          <Text style={styles.buttonText}>Pontos Turísticos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.secondButton]}
          onPress={() => navigation.navigate('MapScreen1')}
        >
          <Text style={[styles.buttonText, styles.secondButtonText]}>Localização</Text>
        </TouchableOpacity>
      </View>
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Dimensions.get('window').height * 0.005,
    paddingBottom: Dimensions.get('window').height * 0.02,
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    marginBottom: Dimensions.get('window').height * 0.01,
    fontWeight: '100',
    textShadowColor: 'rgba(55, 14, 67, 1)',
    textShadowOffset: { width: 0.2, height: 0.2 },
    textShadowRadius: 5,
  },
title: {
  fontSize: 35,
  textAlign: 'center',
  color: 'white',
  marginBottom: Dimensions.get('window').height * 0.1,
  marginTop: Dimensions.get('window').height * 0.05,
  fontWeight: '100',
  textShadowColor: 'rgba(55, 14, 67, 1)',
  textShadowOffset: { width: 0.2, height: 0.2 },
  textShadowRadius: 5,
  marginLeft: Dimensions.get('window').width*0.03,
    marginRight: Dimensions.get('window').width*0.03,
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
  width: Dimensions.get('window').width * 0.33,
},
secondButton: {
  backgroundColor: 'white',
  borderColor: '#370e43',
  borderWidth: 1,
  height: Dimensions.get('window').height * 0.1, 
  width: Dimensions.get('window').width * 0.43,
  
},
buttonText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: 'white',
  textAlign:'center',
},
secondButtonText: {
  color: '#370e43',
  textAlign:'center',
},
});

export default GaleriaDeImagens1;