import React from 'react';
import { StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../components/Home';
import Results from '../components/Results';
import MoreInfo from '../components/MoreInfo';

const AppNavigator = createStackNavigator({
  Home: { screen: Home},
  Results: { screen: Results},
  MoreInfo: { screen: MoreInfo}
});

export default createAppContainer(AppNavigator);
