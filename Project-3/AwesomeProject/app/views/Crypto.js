import React, {Component} from 'react';
import { View, ScrollView, Text, StyleSheet, Button } from 'react-native';

class Crypto extends Component {
 render() {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.headerDiv}>
        <Text style={styles.header}>Top Ten</Text>
        <Text>{this.props.count}</Text>
        <Button onPress={this.increment} title="Click" />
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

export default Crypto;
