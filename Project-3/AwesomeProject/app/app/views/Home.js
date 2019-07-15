import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View } from 'react-native';

class Home extends Component {
 render() {
    return (
        <ScrollView style={styles.container}>
          <View style={styles.headerDiv}>
          <Text style={styles.header}>KRYPTO</Text>
          </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#bedaf7"
  },
  headerDiv:{
    backgroundColor: '#1666ba',
    height: 90
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#deecfb',
    marginTop: 15,
  },
});

export default Home;
