import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import AppNavigator from './AppNavigator';

export default class Results extends React.Component {

  constructor(props){
   super(props);

   this.state = {
       // name: this.props.navigation.state.params.movie.title,
       query: '',
   }

 }

  render() {
    return (
      <View>
      <Text>Search Results</Text>
      <Text>{JSON.stringify(this.props.navigation.state.params)}</Text>
      </View>
    )
  }
}
