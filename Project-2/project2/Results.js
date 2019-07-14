import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, FlatList, TouchableWithoutFeedback } from 'react-native';
import AppNavigator from './AppNavigator';

export default class Results extends React.Component {

  constructor(props){
   super(props);

   this.state = {
     title: "",
     dataCheck: true,
   }
   if (this.props.navigation.state.params.data[3] == null) {
     this.setState({dataCheck: false})

   }

}

handleMoviePick = (item) => {

  var movieChoice = item.Title.replace(/\s+/g, '%20');
  var url = 'http://www.omdbapi.com/?t=%27' + movieChoice +'%27&apikey=791727ae';

  fetch(url)
  .then(res => res.json()).then(res => {
    var data = res
      this.props.navigation.navigate('MoreInfo', { data: data});
  }).catch()
}
  render()
  {


     return (

       <View>
       <Text style={styles.titleHeader1}>
         <Text style={{ ...styles.titleHeader1, ...styles.titleHeader2 }}>
           Movie
         </Text>
         Wiki
       </Text>

      <View style={styles.container}>
      </View>
      <View style={styles.queryDiv}>
      <Text style={{...styles.resultsHeader,...styles.searchResults}}>Search Results</Text>
      <Text style={{...styles.resultsHeader, ...styles.resultsHeader1}}>Query:
      <Text style={{...styles.resultsHeader,...styles.queryShow,...styles.resultsHeader1}}>
      {this.props.navigation.state.params.queryName}</Text></Text>
      <Text style={styles.clickHeader}>Click a movie for more information!</Text>
      </View>
      <FlatList style={styles.movieList} data= {this.props.navigation.state.params.data.Search} renderItem={({item}) =>


       <TouchableOpacity onPress={ () => this.handleMoviePick(item)}>
       <View>
       <Text style={styles.listItems}>{item.Title}</Text>
       </View>
       </TouchableOpacity>
     } />





      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  resultsHeader: {
    paddingTop: 20,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultsHeader1: {
    fontSize: 17,
  },
  movieList: {
    paddingTop: 30,
  },
  listItems: {
    paddingTop: 20,
    color: '#26EA20',
    fontSize: 20,
    paddingLeft: 20,
  },
  clickHeader: {
    padding: 15,
    textAlign: 'center',

  },
  titleHeader1: {
    fontSize: 40,
    fontWeight: "bold",
    backgroundColor: "#26EA20",
    color: "#000000",
    width: 375,
    height: 80,
    textAlign: "center",
    paddingTop: 7
  },
  titleHeader2: {
    color: "#FFFFFF"
  },
  queryDiv: {
  },
  queryShow: {
    color: 'red',
    fontSize: 20,
  },
  searchResults: {
    color: '#26EA20',
  }
})
