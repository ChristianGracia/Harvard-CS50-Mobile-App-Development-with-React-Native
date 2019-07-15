import React, {Component} from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

class Crypto extends Component {
 render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Crypto</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#bedaf7"
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    color: '#1666ba',
  },
});

export default Crypto;
