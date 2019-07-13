import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import { StackNavigator } from 'react-navigation';
import AppNavigator from './AppNavigator';
import { Home } from "./Home"
import { Results } from "./Results"

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
