import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import PropTypes from "prop-types";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonShow: true,
      timeShow: false
    };
  }
  hideTimeButtons = () => {
    if (this.state.buttonShow == true) {
      this.setState({ buttonShow: false });
      this.setState({ timerShow: true });
    } else {
      this.setState({ buttonShow: true });
      this.setState({ timerShow: false });
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
                onPress={this.hideTimeButtons}
              />
            ) : null}
          </View>

          <View className="buttons" style={styles.button2}>
            {this.state.buttonShow ? (
              <Button
                title="25 Minutes"
                color="#BA0ED4"
                onPress={this.hideTimeButtons}
              />
            ) : null}
          </View>
        </View>
        {this.state.timerShow ? (
          <Text style={styles.timerHeader} className="timerTitle">
            TIMER:{" "}
          </Text>
        ) : null}
        <View style={styles.buttonsAlter}>
          {this.state.timerShow ? <Button title="START TIMER" /> : null}
          {this.state.timerShow ? <Button title="STOP TIMER" /> : null}
          {this.state.timerShow ? <Button title="RESET TIMER" onPress={this.hideTimeButtons} />: null}
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