import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


/*
  https://github.com/expo/expo/tree/master/templates/expo-template-bare-minimum
  https://github.com/expo/expo-cli#-project-layout

npm install -g expo-cli
expo init my-project
*/

//expo start --android
//expo start --ios


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
