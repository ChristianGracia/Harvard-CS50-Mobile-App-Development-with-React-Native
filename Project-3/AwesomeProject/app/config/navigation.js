import React from "react";
import { TabNavigator } from "react-navigation";

import Home from '../views/Home';
import Crypto from '../views/Crypto';
import Search from '../views/Search';

export const BottomTab = TabNavigator({
  Home: {
    screen: Home,
  },
  Search: {
    screen: Search,
  },
  Markets: {
    screen: Crypto,
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: '#deecfb',
    activeBackgroundColor: "#1666ba",
    inactiveTintColor: '#deecfb',
    inactiveBackgroundColor: "#368ce7",

    labelStyle: {
      fontSize: 22,
      marginTop: -20,
    }
  }
});
