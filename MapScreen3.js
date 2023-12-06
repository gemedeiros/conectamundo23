import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export const MapScreen3 = () => {
  return (
    <View style={styles.container}>
      <WebView
        style={styles.map}
        source={{ html: getHTML() }}
      />
    </View>
  );
};

const getHTML = () => {
  return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body>
        <iframe
          width="100%"
          height="100%"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.020684894241!2d-51.56411352592054!3d-20.830871180769385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490bb1487dbb427%3A0x7a2a21884e4f832c!2sGruta%20e%20Capela%20de%20Nossa%20Senhora%20das%20Gra%C3%A7as!5e0!3m2!1spt-PT!2sbr!4v1701535846891!5m2!1spt-PT!2sbr"
          frameborder="0"
          allowfullscreen
          style="border: 1px solid black"
        ></iframe>
      </body>
    </html>
  `;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen3;