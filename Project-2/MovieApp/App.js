import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import AppNavigator from './config/AppNavigator';
import { Home } from "./components/Home"
import { Results } from "./components/Results"

//remove require cycle unnecessary warning
console.disableYellowBox = true;



export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
