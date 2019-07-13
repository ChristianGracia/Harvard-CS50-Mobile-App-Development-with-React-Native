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
        <View style={styles.imageDiv}>
       <Image style={styles.imageHeader} source={require("./assets/main.png")} />
       </View>

       <View style={styles.sloganDiv}>
      <Text style={styles.searchHeader}>Search for any movie!</Text>
      </View>



      <View style={styles.SearchBar}>
      <View style={styles.submitContainer}>
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


    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: "center",
    fontWeight: "bold",
  },
  searchHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleHeader: {
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: '#26EA20',
    color: '#000000',
    width: 375,
    height: 80,
    textAlign: 'center',
    paddingTop: 23,

  },
  searchBar: {

  }
  ,
  searchText: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: 160,
  },
  submit: {
    color: 'red',
    backgroundColor: "red",
    alignItems: 'center',
    height: 40,
    width: 130,
    justifyContent: 'center',
  }
  ,
  submitText:{
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageDiv: {
    paddingTop: 100,

  },
  sloganDiv: {
    paddingTop: 70,
    paddingBottom: 60
  },
  submitContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  }
});
