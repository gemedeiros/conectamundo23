import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export const MapScreen4 = () => {
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.54962636099!2d-51.48755802591996!3d-20.849885480754967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490b731b9c91a55%3A0xc6ec6cb3168dcbd0!2sPortal%20Binha%20Colombo!5e0!3m2!1spt-PT!2sbr!4v1701536126276!5m2!1spt-PT!2sbr"
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

export default MapScreen4;