import * as React from 'react';
import { useEffect } from 'react';
import { Image, ActivityIndicator, View, StyleSheet, Dimensions, ImageBackground } from 'react-native';

export function LoadingScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('InitialScreen');
    }, 4000);
  }, []);

  return (  
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/fundo.jpg')} style={styles.backgroundImage} resizeMode="cover">
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <Image source={require('./assets/images/telainicialbaixa.jpeg')} style={styles.image} resizeMode="stretch" />
      </View>
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" color="white" />
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  image: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height - Dimensions.get('window').height * 0.12, 
  },
  activityIndicatorContainer: {
    position: 'absolute',
    bottom: Dimensions.get('window').height * 0.01,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 'auto',
    marginTop: Dimensions.get('window').height * 0.05,
  },
});

export default LoadingScreen;
