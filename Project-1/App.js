import React from "react";
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import Timer from "./components/Timer.js";
import  {index, vibrate }  from './utils/'

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
        <Text style={styles.title}>StudyBuddy</Text>
        <Image source={require("./assets/icon.png")} style={styles.logoStyle} />
        {this.state.startApp ? <Text style={styles.slogan}>LET'S GET SOME WORK DONE</Text>: null}
        {this.state.startApp ?<TouchableOpacity activeOpacity = { .5 } onPress={this.hideButton}><Text style={styles.welcomeButton}>Start Working</Text></TouchableOpacity>: null}
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
    backgroundColor: "#4614FF",
    alignItems: "center",
    fontWeight: "bold"
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 30,
    width: 'auto',
    color: "#FFFF44",
    backgroundColor: '#000000',
  },
  slogan: {
    marginTop: 30,
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#FFFFFF"
  },
  logoStyle: {
    width: "50%",
    height: "40%",
    marginTop: 30
  },
  welcomeButton: {
    marginTop: 50,
    fontSize: 43,
    color: "#FFFF44",
    fontWeight: 'bold',
    borderRadius: 30,

  }
});