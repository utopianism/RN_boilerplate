// @flow

import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Ionicon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import IntoNav from '../screens/IntoNav';
import FetchData from '../screens/FetchData';

import {
  navigationOptions,
  stackNavigatorConfig,
  tabBarConfig,
} from '../config/reactNavigationConfig';

/**
 * tabBar 下面的 screens
 */
const HomeTab = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Welcome',
      ...navigationOptions,
    },
  },
  Profile: {
    screen: IntoNav,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}'s Profile!`,
    }),
  },
}, { ...stackNavigatorConfig });

const MoreTab = StackNavigator({
  FetchData: {
    screen: FetchData,
    navigationOptions: {
      title: 'Redux example',
      ...navigationOptions,
    },
  },
}, { ...stackNavigatorConfig });

/**
 * tabBar 定义
 */
export default TabNavigator({
  Home: {
    screen: HomeTab,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicon name={focused ? 'ios-home' : 'ios-home-outline'} size={26} color={tintColor} />
        ),
    },

  },
  MoreTab: {
    screen: MoreTab,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => (
        <Ionicon name={focused ? 'ios-cube' : 'ios-cube-outline'} size={26} color={tintColor} />
      ),
    },
  },
}, { ...tabBarConfig });
