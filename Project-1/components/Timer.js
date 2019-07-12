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
      minutes: "00",
      seconds: "00"
    };
    this.startClock = this.startClock.bind(this)
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
      this.setState({ min25: false});
    }

  }
  hideTimeButtons5 = () => {
    this.setState({ minutes: "00" });
    this.setState({ seconds: "00" });

    if (this.state.buttonShow == true) {
      this.setState({ buttonShow: false });
      this.setState({ timerShow: true });
      this.setState({ min5: true});
    } else {
      this.setState({ buttonShow: true });
      this.setState({ timerShow: false });
      this.setState({ min5: false});

      }
  }
    startClock = (prev) => {
      if (this.state.min5 == true)
      {
        this.setState({ minutes: "5" });
        this.setState({ seconds: "00" });


      }
      else if (this.state.min25 == true)
       {
         this.setState({ minutes: "25" });
         this.setState({ seconds: "00" });
      }
  };

  render() {
    return (
      <View>
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
        {this.state.timerShow ? (<Text style={styles.timerHeader} className="timerTitle">TIMER: {this.state.minutes}:{this.state.seconds}</Text>): null}
        <View style={styles.buttonsAlter}>
          {this.state.timerShow ? <Button title="START TIMER" onPress={this.startClock}/> : null}
          {this.state.timerShow ? <Button title="STOP TIMER" /> : null}
          {this.state.timerShow ? <Button title="RESET TIMER" onPress={this.hideTimeButtons5} />: null}
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
