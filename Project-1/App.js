import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Timer from './components/Timer.js'

export default class App extends React.Component {
  state = {
    showButton: 'visible',
  };

    hideButton = () => {
      this.setState({
        showButton: 'hidden'
      })
    };


render() {
  return (
    <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 50, marginTop: 30}}>StudyCube</Text>
        <Image source={require('./assets/icon.png')} style={{width: '40%', height: '30%', marginTop: 40}} />
        <Text style={{marginTop: 30, fontSize: 22, marginBottom: 20, fontWeight: 'bold'}}>Your little productivity buddy</Text>
        <Button title="Start Timer" style = {{visibility: this.state.showButton}} onPress = {this.hideButton}/>
        <Timer />
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30AEEA',
    alignItems: 'center',
    fontWeight: 'bold',
  },
});
