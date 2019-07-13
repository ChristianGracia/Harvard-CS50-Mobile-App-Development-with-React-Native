import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);



    this.state = {
      text: "",
    }
  }

  render() {
    return(
    <View style={styles.container}>
      <Text style={styles.titleHeader}>MovieWiki</Text>
       <Image style={styles.imageHeader} source={require("./assets/main.png")} />
      <Text style={styles.searchHeader}>Search for any movie!</Text>


      <View style={styles.SearchBar}>
      <TextInput
      style={styles.searchText}
      placeholder = "Search Here!"
      placeholderTextColor = "#000000"
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
      />
      <TouchableOpacity style={styles.submit}><Text style={styles.submitText}>Submit</Text></TouchableOpacity>
      </View>


    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    fontWeight: "bold",
  },
  searchHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleHeader: {
    fontSize: 60,
    fontWeight: 'bold',
    marginTop: 50,
    paddingBottom: 100,
  },
  searchBar: {
    marginTop: 40,
    alignItems: 'center',
  },
  searchText: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: 160
  },
  submit: {
    color: 'red',
    backgroundColor: "red",
    alignItems: 'center',
    height: 20,
    width: 80

  }
  ,
  submitText:{
        fontWeight: 'bold',

  },
  imageHeader: {
  }
});
