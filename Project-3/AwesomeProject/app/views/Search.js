import React, {Component} from 'react';
import { View, TouchableOpacity, ScrollView, Text, StyleSheet, TextInput } from 'react-native';

class Search extends Component {
 render() {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.headerDiv}>
        <Text style={styles.header}>Search</Text>
        </View>
        <View style={styles.searchContainer}>
        <TextInput style={styles.searchBar} placeholder="Type here!" placeholderTextColor="#bedaf7"/>
        <TouchableOpacity style={styles.submit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
         </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#bedaf7"
  },
  headerDiv:{
    backgroundColor: '#1666ba',
    height: 90
  },
  header: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#deecfb',
    marginTop: 15,
  },
  searchBar: {
    height: 40,
    borderColor: "#000",
    backgroundColor: "#fff",
    borderWidth: 1,
    width: 190,
    paddingLeft: 10,
    fontWeight: "bold",
    color: '#1666ba'
  },
   searchContainer: {
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     flexDirection: "row",
     paddingTop: 80,
     marginTop: 100,
   },
   submitText: {
   fontWeight: "bold",
   textAlign: "center",

   color: "#deecfb"
  },
  submit: {
   backgroundColor: "#1666ba",
  alignItems: "center",
  height: 40,
  width: 110,
  justifyContent: "center",
  marginLeft: 40,
}
})


export default Search;
