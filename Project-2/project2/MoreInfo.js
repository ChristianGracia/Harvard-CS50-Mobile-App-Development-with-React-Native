import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import AppNavigator from './AppNavigator';

export default class Results extends React.Component {

  constructor(props){
   super(props);

   this.state = {
     query: '',
     dataCheck: false,
   }
}

  render()
  {
     return (
       <Text>Hi</Text>

    )
  }
}
const styles = StyleSheet.create({
})
