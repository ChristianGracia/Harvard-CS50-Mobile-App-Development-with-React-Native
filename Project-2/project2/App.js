import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titleHeader}>MovieSearch</Text>
       <Image source={require("./assets/icon.png")} />
      <Text style={styles.searchHeader}>Search for any movie!</Text>
      <TextInput   style={{height: 40, borderColor: 'gray', borderWidth: 1}}
             onChangeText={(text) => this.setState({text})}
             value={this.state.text}/>

     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleHeader: {
    fontSize: 50,
    fontWeight: 'bold'
  }
});