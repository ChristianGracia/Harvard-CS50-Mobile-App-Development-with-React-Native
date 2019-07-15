import React, { Component } from "react";
import { ScrollView, Text, StyleSheet } from 'react-native';

class Home extends Component {
 render() {
    return (
        <ScrollView style={styles.container}>
          <Text style={styles.header}>Welcome</Text>
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

export default Home;
