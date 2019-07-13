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
   if (this.props.navigation.state.params.data.Search){
   this.setState({dataCheck: true})}
   else {
     this.setState({dataCheck: false})
   }
}


handleClick = (event) => {

  this.setState({ query: event.nativeEvent.text });
  alert('hi');

  var url = 'http://www.omdbapi.com/?t=%27' + this.state.query + '%27&apikey=791727ae'


  fetch(url)
  .then(res => res.json()).then(res => {
    var data = res
      this.props.navigation.navigate('MoreInfo', { data: data});
  }).catch()



}
  render()
  {
     return (
      <View style={styles.container}>
      <Text style={styles.resultsHeader}>Search Results</Text>
      <Text style={styles.resultsHeader}>Query: {this.props.navigation.state.params.queryName}</Text>
      {this.state.dataCheck ? <Text style={styles.clickHeader}>Click a movie for more information!</Text>: <Text>No results found, try changing your query</Text> }
      <FlatList style={styles.movieList} data= {this.props.navigation.state.params.data.Search} renderItem={({item}) => <Text onPress={this.handleClick} style={styles.listItems}>{item.Title}</Text> }/>

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
  },
  clickHeader: {
    padding: 15,

  }
})
