import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, View, Image } from 'react-native';

class Home extends Component {
 render() {
    return (
        <ScrollView style={styles.container}>
          <View style={styles.headerDiv}>
          <Text style={styles.header}>KRYPTO</Text>
          </View>
          <View style={styles.imgContainer}>
          <Image source={require("../../assets/logo.jpg")} style={styles.logoStyle} />
          </View>

          <View style={styles.currentPricesDiv}>
          <Text style={styles.currentPricesText}>BTC: </Text>
          <Text style={styles.currentPricesText}>ETH: </Text>
          <Text style={styles.currentPricesText}>LTC: </Text>
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
  logoStyle: {
    width: 'auto',
    height: 200,
  },
  imgContainer: {
    paddingTop: 70,
  },
  currentPricesDiv: {
    paddingTop: 70,
    textAlign: 'center',
    alignItems: 'center'

  },
  currentPricesText: {
    color: '#1666ba',
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default Home;
