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
       <Text style={styles.titleHeader1}>
         <Text style={{ ...styles.titleHeader1, ...styles.titleHeader2 }}>
           Movie
         </Text>
         Wiki
       </Text>
       <View style={styles.container}>
       </View>
       <Text style={styles.header}>{this.props.navigation.state.params.data.Title}</Text>

       <Text style={styles.detail}>Plot: <Text style={styles.description}>{this.props.navigation.state.params.data.Plot}</Text></Text>
       <Text>Director: {this.props.navigation.state.params.data.Director}</Text>
       <Text>Actors: {this.props.navigation.state.params.data.Actors}</Text>
       <Text>Year: {this.props.navigation.state.params.data.Year}</Text>
       <Text>Genre(s): {this.props.navigation.state.params.data.Genre}</Text>

       <Text>Awards: {this.props.navigation.state.params.data.Awards}</Text>


       </View>

    )
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    fontSize: 20,
    color: "#26EA20",
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  detail: {
    fontSize: 23,
    color: 'red',
    paddingBottom: 20,
  },
  description: {
    color: 'black',
    fontSize: 15,
  },
  titleHeader1: {
    fontSize: 40,
    fontWeight: "bold",
    backgroundColor: "#26EA20",
    color: "#000000",
    width: 375,
    height: 80,
    textAlign: "center",
    paddingTop: 7,
  },
  titleHeader2: {
    color: "#FFFFFF",
}})
