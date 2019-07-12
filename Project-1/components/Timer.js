import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import PropTypes from 'prop-types';


class Timer extends React.Component {
  render() {
    return(

      <View style={styles.container}>
      <View className="buttons" style={styles.button1}>
      <Button title="5 Minutes" />
      </View>
      <View className="buttons"  style={styles.button2}>
      <Button title= "25 minutes"/>
      </View>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },
  button1: {
    borderRadius:10,
    borderWidth: 2,
    borderColor: '#fff',
    marginRight: 30,

  },
  button2: {
    borderRadius:10,
    borderWidth: 2,
    borderColor: '#fff',
    marginLeft: 30,
  },

});


export default Timer;
