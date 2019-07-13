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
  {  return (
      <View style={styles.container}>
      <Text style={styles.resultsHeader}>Search Results</Text>
      <Text style={styles.resultsHeader}>Query: {this.props.navigation.state.params.queryName}</Text>
      <FlatList style={styles.movieList} data= {this.props.navigation.state.params.data.Search} renderItem={({item}) => <Text style={styles.listItems}>{item.Title}</Text> }/>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  resultsHeader: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  movieList: {
    paddingTop: 30,
  },
  listItems: {
    paddingTop: 20,
    color: 'red',
    fontSize: 20,
  }
})