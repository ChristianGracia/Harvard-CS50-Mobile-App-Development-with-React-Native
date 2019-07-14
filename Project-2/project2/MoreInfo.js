import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';
import AppNavigator from './AppNavigator';

export default class Results extends React.Component {

  constructor(props){
   super(props);

   this.state = {
   }
}

  render()
  {
     return (
       <View>
       <Text>{this.props.navigation.state.params.data}</Text>
       </View>

    )
  }
}
const styles = StyleSheet.create({
})
