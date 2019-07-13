import React from 'react';
import { StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Results from './Results';

const AppNavigator = createStackNavigator({
  Home: { screen: Home},
  Results: { screen: Results},
});

export default createAppContainer(AppNavigator);
