import * as React from 'react';
import { useState } from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, useWindowDimensions, Modal, Image } from 'react-native';

const images = {
  imagem1: require('./assets/images/imagem1.jpg'),
  imagem2: require('./assets/images/imagem2.jpg'),
  imagem3: require('./assets/images/imagem3.jpg'),
  imagem4: require('./assets/images/imagem4.jpg'),
  imagem5: require('./assets/images/imagem5.jpg'),
  imagem6: require('./assets/images/imagem6.jpg'),
  imagem7: require('./assets/images/imagem7.jpg'),
  imagem8: require('./assets/images/imagem8.jpg'),
  imagem9: require('./assets/images/imagem9.jpg'),
  imagem10: require('./assets/images/imagem10.jpg'),
  imagem11: require('./assets/images/imagem11.jpg'),
  imagem12: require('./assets/images/imagem12.jpg'),
};

const GaleriaDeImagens = ({ navigation }) => {
  const windowWidth = useWindowDimensions().width;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePress = (imageKey) => {
    setSelectedImage(images[imageKey]);
    setModalVisible(true);
  };

  const renderImages = () => {
    const renderedImages = [];

    for (let i = 2; i <= 12; i++) {
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
      <View style={{ flex: 1 }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            marginTop: 20,
            color: 'violet',
            textShadowColor: 'white',
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 2,
          }}
        >
          Galeria de Imagens
        </Text>

        <Modal visible={modalVisible} transparent={true} onRequestClose={() => setModalVisible(false)}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ position: 'absolute', top: 20, right: 20 }}>
              <Text style={{ color: 'white', fontSize: 18 }}>Fechar</Text>
            </TouchableOpacity>
            <Image source={selectedImage} style={{ width: '80%', height: '80%', resizeMode: 'contain' }} />
          </View>
        </Modal>

        <Image source={images['imagem1']} style={{ width: '100%', height: 200 }} resizeMode="cover" />

        <ScrollView style={{ marginVertical: '5%', marginLeft: '2.5%', marginRight: '2.5%' }}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {renderImages()}
          </View>
        </ScrollView>

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 15,
            borderRadius: 10,
            marginVertical: '5%',
            marginLeft: '5%',
            marginRight: '5%',
          }}
          onPress={() => navigation.navigate('Inicial')}
        >
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 18 }}>
            Voltar para Inicial
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default GaleriaDeImagens;