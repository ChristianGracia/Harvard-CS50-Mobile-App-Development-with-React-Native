import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import AppNavigator from './AppNavigator';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',

    }
    this.handleSearch = this.handleSearch.bind(this);
  }

    handleSearch = () => {
      this.props.navigation.navigate('Results')
    }
    changeSearch = (event) => {
       this.setState({query: event.nativeEvent.text});
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleHeader1}><Text style={{...styles.titleHeader1, ...styles.titleHeader2}}>Movie</Text>Wiki</Text>
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
        placeholderTextColor = "#000"
        onChange = {this.changeSearch}
        value={this.state.query}
        />
        <TouchableOpacity style={styles.submit} onPress={this.handleSearch}><Text style={styles.submitText}>Submit</Text></TouchableOpacity>
        </View>
        </View>
        <Text style={styles.bottomGreen}>h</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: "center",
    fontWeight: "bold",
  },
  searchHeader: {
    fontSize: 27,
    fontWeight: 'bold',
        color: '#26EA20'
  },
  titleHeader1: {
    fontSize: 40,
    fontWeight: 'bold',
    backgroundColor: '#26EA20',
    color: '#000000',
    width: 375,
    height: 80,
    textAlign: 'center',
    paddingTop: 23,

  },
  titleHeader2:{
    color: '#FFFFFF',
  },
  searchBar: {

  }
  ,
  searchText: {
      height: 40,
      borderColor: '#25EA20',
      borderWidth: 1,
      width: 190,
      paddingLeft: 10,
      fontWeight: 'bold',
  },
  submit: {
    backgroundColor: "#26EA20",
    alignItems: 'center',
    height: 40,
    width: 110,
    justifyContent: 'center',
    marginLeft: 40
  }
  ,
  submitText:{
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#fff"
  },
  imageDiv: {
  paddingTop: 100,
  alignItems: 'center',
  },
  sloganDiv: {
    paddingTop: 70,
    paddingBottom: 60,

  },
  submitContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20,
  },
  bottomGreen: {
    color: "#26EA20",
    backgroundColor: '#26EA20',
    width: 375,
    height: 30,
    paddingTop: 230,
    marginTop: 100
  }
});