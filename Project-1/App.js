import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Timer from "./components/Timer.js";
import Clock from "./components/Clock.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startApp: true,
      clockShow: false
    }
  }

  hideButton = () => {
    if (this.state.startApp == true) {
      this.setState({ startApp: false });
    } else {
      this.setState({ startApp: true });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>StudyCube</Text>
        <Image source={require("./assets/icon.png")} style={styles.logoStyle} />
        <Text style={styles.slogan}>Your little productivity buddy</Text>
        {this.state.startApp ? <Button className="enterButton" title="Start Working" onPress={this.hideButton}  />: null}
        <View>
        {!this.state.startApp ? <Timer />: null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#30AEEA",
    alignItems: "center",
    fontWeight: "bold"
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 30,
    color: "#BA0ED4"
  },
  slogan: {
    marginTop: 30,
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#BA0ED4"
  },
  logoStyle: {
    width: "40%",
    height: "30%",
    marginTop: 40
  }
});
