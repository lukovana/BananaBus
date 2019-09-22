import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import DriverScreen from '../screens/DriverScreen';
import SchoolScreen from '../screens/SchoolScreen';


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const DriverStack = createStackNavigator(
  {
    Driver:DriverScreen,
  },
  config
);

DriverStack.navigationOptions = {
  tabBarLabel:'Home Driver',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={
      Platform.OS === 'ios'
        ? `ios-information-circle${focused ? '' : '-outline'}`
        : 'md-information-circle'
    } />
  ),
};
DriverStack.path='';

const SchoolStack = createStackNavigator(
  {
    School:SchoolScreen,
  },
  config
);

SchoolStack.navigationOptions = {
  tabBarLabel:'School Info',
  tabBarIcon: ({focused}) => (
    <TabBarIcon focused={focused} name={
      Platform.OS === 'ios'
        ? `ios-information-circle${focused ? '' : '-outline'}`
        : 'md-information-circle'
    } />
  ),
};
SchoolStack.path='';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  DriverStack,
  SchoolStack
});

tabNavigator.path = '';

export default tabNavigator;
