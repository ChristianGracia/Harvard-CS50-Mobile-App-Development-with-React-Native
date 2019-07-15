import React, { Component } from 'react';
import { BottomTab } from "./config/navigation"
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import baseReducer from './config//reducers';


const store = createStore(baseReducer);

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  render(){
    return(

  <Provider store={store}>
    <BottomTab />
  </Provider>
)}
}
