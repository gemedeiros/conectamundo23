import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export const MapScreen5 = () => {
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
          src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5272.200246278244!2d-51.490617929421965!3d-20.87170579373716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9490b7117aff1825%3A0x95a40575963bd39f!2sPra%C3%A7a%20da%20Matriz%2C%20Castilho%20-%20SP%2C%2016920-000!5e0!3m2!1spt-PT!2sbr!4v1701536204718!5m2!1spt-PT!2sbr"
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

export default MapScreen5;