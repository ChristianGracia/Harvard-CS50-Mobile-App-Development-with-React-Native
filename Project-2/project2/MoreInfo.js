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
       <Text>Title: {this.props.navigation.state.params.data.Title}</Text>
       <Text>Year: {this.props.navigation.state.params.data.Year}</Text>
       <Text>Plot: {this.props.navigation.state.params.data.Plot}</Text>

       <Text>Genre(s): {this.props.navigation.state.params.data.Genre}</Text>

       <Text>Director: {this.props.navigation.state.params.data.Director}</Text>
       <Text>Actors: {this.props.navigation.state.params.data.Actors}</Text>
       <Text>Awards: {this.props.navigation.state.params.data.Awards}</Text>
       <Text>Rotten Tomatoes Rating: {this.props.navigation.state.params.data.Ratings[1].Value}</Text>


       </View>

    )
  }
}
const styles = StyleSheet.create({
})
