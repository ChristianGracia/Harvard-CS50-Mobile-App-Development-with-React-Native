import React, {Component} from 'react';
import { View, TouchableOpacity, ScrollView, Text, StyleSheet, TextInput } from 'react-native';

class Search extends Component {
 render() {
    return (
      <ScrollView style={styles.container}>
      <View style={styles.headerDiv}>
        <Text style={styles.header}>Search</Text>
        </View>


        <View style={styles.lookUpDiv}>
        <Text style={styles.lookUpText}>Look up any coin!</Text>
        </View>

        <View style={styles.searchContainer}>

        <TextInput style={styles.searchBar} placeholder="Type here!" placeholderTextColor="#368ce7"/>
        <TouchableOpacity style={styles.submit}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
         </View>
         <View style={styles.instructionDiv}>
         <Text style={styles.instruction}>Use the abbreviation (BTC, LTC, ETH, ENG, etc.)</Text>
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
    backgroundColor: "#deecfb",
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
     paddingTop: 40

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
},
lookUpText: {
  textAlign: 'center',
  fontSize: 30,
  color: '#1666ba',
  fontWeight: 'bold',
  paddingBottom: 20

},
lookUpDiv: {
  paddingTop: 50,
  marginTop: 80,

},
instruction: {
  paddingTop: 50,
  color: '#1666ba',
  fontSize: 12,
  fontWeight: 'bold',
},
instructionDiv: {
  paddingTop: 30,
  textAlign: 'center',
  alignItems: 'center'
}
})


export default Search;
