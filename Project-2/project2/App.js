import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import AppNavigator from './AppNavigator';
import { Home } from "./Home"
import { Results } from "./Results"

//remove require cycle unnecessary warning
console.disableYellowBox = true;



export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}