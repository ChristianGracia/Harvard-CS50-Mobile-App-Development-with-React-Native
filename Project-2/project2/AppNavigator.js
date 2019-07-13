import React from 'react';
import { StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Home';
import Results from './Results';
import MoreInfo from './MoreInfo';

const AppNavigator = createStackNavigator({
  Home: { screen: Home},
  Results: { screen: Results},
  MoreInfo: { screen: MoreInfo}
});

export default createAppContainer(AppNavigator);
