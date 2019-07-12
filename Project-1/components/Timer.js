import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import PropTypes from 'prop-types';


class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      buttonShow: true,
      timeShow: false,
    }

  }

  hideTimeButtons = () => {

    if(this.state.buttonShow == true)
    {
      this.setState({buttonShow: false})
      this.setState({timerShow: true})
    }
    else
    {
      this.setState({buttonShow: true})
      this.setState({timerShow: false})
    }
  }

  render() {
    return(

      <View style={styles.container}>
      <View className="buttons" style={styles.button1}>
      {this.state.buttonShow ? <Button title="5 Minutes" color="#BA0ED4" onPress={this.hideTimeButtons}/>: null}
      </View>
      <View className="buttons"style={styles.button2}>

      {this.state.buttonShow ? <Button title= "25 minutes" color="#BA0ED4" onPress={this.hideTimeButtons}/>: null}
      </View>

      {this.state.timerShow ? <Text style={styles.timerHeader}>TIMER</Text>: null}
      {this.state.timerShow ? <Button title="STOP TIMER" onPress={this.hideTimeButtons}/>: null}
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
    borderColor: '#fff',
    marginRight: 30,
    backgroundColor:'#fff',
    borderRadius:10,
    borderWidth: 1,

  },
  button2: {
    borderColor: '#fff',
    marginLeft: 30,
    backgroundColor:'#fff',
    borderRadius:10,
    borderWidth: 1,
  },
  timerHeader: {
    marginLeft: -50,
    fontWeight: 'bold',
    fontSize: 40,
    color: 'red',
  }

});


export default Timer;