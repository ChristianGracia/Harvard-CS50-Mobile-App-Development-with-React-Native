import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import PropTypes from "prop-types";


class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonShow: true,
      timeShow: false,
      min25: false,
      min5: false,
      minutes: "05",
      seconds: "00",

      timer: null,

      startClock: true,
      stopClock: false,
    };


    this.onButtonStart = this.onButtonStart.bind(this);
    this.onButtonStop = this.onButtonStop.bind(this);
    this.onButtonClear = this.onButtonClear.bind(this);
    this.start = this.start.bind(this);
    // this.startClock = this.startClock.bind(this);
  }

    componentDidMount() {
        this.start();
    }


    componentWillUnmount() {
        clearInterval(this.state.timer);
    }

    start() {
        var self = this;
        let timer = setInterval(() => {
            var num = (Number(this.state.seconds) - 1).toString()
                count = this.state.minutes

            if( Number(this.state.seconds) == 0 ) {
                count = (Number(this.state.minutes) - 1).toString();
                num = '59';
            }

            self.setState({
                minutes: count.length == 1 ? '0' + count : count,
                seconds: num.length == 1 ? '0' + num : num
            });
        }, 1000);
        this.setState({timer});
    }

  onButtonStart = () => {

      this.start();
      this.setState({startClock: true, stopClock: false});
  }


  onButtonStop = () => {
      clearInterval(this.state.timer);
      this.setState({startClock: false, stopClock: true});
  }


  onButtonClear = () => {
      this.setState({
          timer: null,
          counter: '00',
          seconds: '00',
      });
  }



  hideTimeButtons25 = () => {
    this.setState({ minutes: "00" });
    this.setState({ seconds: "00" });

    if (this.state.buttonShow == true) {
      this.setState({ buttonShow: false });
      this.setState({ timerShow: true });
      this.setState({ min25: true });
    } else {
      this.setState({ buttonShow: true });
      this.setState({ timerShow: false });
      this.setState({ min25: false });
    }
  };

  hideTimeButtons5 = () => {
    this.setState({ minutes: "00" });
    this.setState({ seconds: "00" });

    if (this.state.buttonShow == true) {
      this.setState({ buttonShow: false });
      this.setState({ timerShow: true });
      this.setState({ min5: true });
    } else {
      this.setState({ buttonShow: true });
      this.setState({ timerShow: false });
      this.setState({ min5: false });
    }
  };

//     startClock = () => {
//
//     if (this.state.min25 == true)
//     {
//       this.setState({ minutes: "25" });
//       this.setState({ seconds: "00" });
//     }
//     else
//       this.setState({ minutes: "5" });
//       this.setState({ seconds: "00" });
// }


  render() {
    return (
         <View>
        <Text>{this.state.counter}:{this.state.seconds}</Text>
        <Button title="Start" onPress={this.onButtonStart}/>
        <Button title="Stop" onPress={this.onButtonStop}/>
        <Button title="Clear" onPress={this.onButtonClear}/>
        <View style={styles.buttonBoth}>
          <View className="buttons" style={styles.button1}>
            {this.state.buttonShow ? (
              <Button
                title="5 Minutes"
                color="#BA0ED4"
                onPress={this.hideTimeButtons5}
              />
            ) : null}
          </View>

          <View className="buttons" style={styles.button2}>
            {this.state.buttonShow ? (
              <Button
                title="25 Minutes"
                color="#BA0ED4"
                onPress={this.hideTimeButtons25}
              />
            ) : null}
          </View>
        </View>

        <View style={styles.buttonsAlter}>

          {this.state.timerShow ? (
            <Button title="RESET TIMER" onPress={this.hideTimeButtons5} />
          ) : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button1: {
    borderColor: "#fff",
    backgroundColor: "#fff",
    marginBottom: 20
  },
  button2: {
    borderColor: "#fff",
    backgroundColor: "#fff",
    marginTop: 20
  },
  buttonBoth: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
    fontSize: 40
  },
  timerHeader: {
    fontWeight: "bold",
    fontSize: 40,
    color: "red",
    marginTop: -40
  },
  buttonsAlter: {}
});

export default Timer;