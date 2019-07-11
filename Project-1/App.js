import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 50, marginTop: 60}}>StudyCube</Text>
      <Image source={require('./assets/icon.png')} style={{width: '40%', height: '30%', marginTop: 80}} />
      <Text style={{marginTop: 30, fontSize: 24}}>Your little productivity buddy</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30AEEA',
    alignItems: 'center',
  },
});
