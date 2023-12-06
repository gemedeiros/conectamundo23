import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export const MapScreen1 = () => {
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.5477805787796!2d-51.628482632286506!3d-20.791088160390583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490a32505aa2a2b%3A0x2af2a259d0b23821!2sPonte%20Ferrovi%C3%A1ria%20Francisco%20de%20S%C3%A1!5e0!3m2!1spt-BR!2sbr!4v1701445568559!5m2!1spt-BR!2sbr"
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

export default MapScreen1;