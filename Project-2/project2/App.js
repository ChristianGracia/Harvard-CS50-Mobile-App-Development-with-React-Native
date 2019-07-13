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
      <Text style={styles.titleHeader}>MovieWiKi</Text>
       <Image source={require("./assets/main.png")} />
      <Text style={styles.searchHeader}>Search for any movie!</Text>


      <View style={styles.SearchBar}>
      <TextInput
      style={styles.searchText}
      placeholder = "Search Here!"
      placeholderTextColor = "#000000"
      onChangeText={(text) => this.setState({text})}
      value={this.state.text}
      />
      <TouchableOpacity><Text>Search</Text></TouchableOpacity>
      </View>


    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: "center",
    fontWeight: "bold"
  },
  searchHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleHeader: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  searchBar: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  searchText: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: 160
  }
});