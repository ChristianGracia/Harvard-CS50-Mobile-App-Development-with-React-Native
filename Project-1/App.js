import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Timer from './components/Timer.js'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      startApp: true,
    }
  }

hideButton = () =>{

  if(this.state.startApp == true)
  {
    this.setState({startApp: false})
  }
  else
  {
    this.setState({startApp: true})
  }
}



render() {
  return (
    <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 50, marginTop: 30}}>StudyCube</Text>
        <Image source={require('./assets/icon.png')} style={{width: '40%', height: '30%', marginTop: 40}} />
        <Text style={{marginTop: 30, fontSize: 22, marginBottom: 20, fontWeight: 'bold'}}>Your little productivity buddy</Text>
        {this.state.startApp ? <Button className= "enterButton" title="Start Timer" onPress={this.hideButton} />: null}
        {!this.state.startApp ? <Timer />: null}
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