import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import PropTypes from 'prop-types';


class Clock extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      }

    }
    // startTimer = () => {
      // const secondsConversion5 = ((25 * 60)*(1000));
      // const secondsConverion25 = ((5 * 60)*(1000));
      //
      // let timerId = setInterval(() => this.setState({counter: counter++}, secondsConversion5));
      //    setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
      // }

      // setInterval(()=> render(< count={count++})>, document.getElementsByclassNames('timerTitle')

  render() {
    return(

      <View>
      <Text>0:00</Text>

      </View>
  )
  }
}

const styles = StyleSheet.create({
});

export default Clock;