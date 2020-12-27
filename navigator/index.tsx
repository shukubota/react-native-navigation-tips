import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Setting } from '../pages/Setting';
import { Login } from '../pages/Login';
import { Splash } from '../pages/Splash';
import { Home } from '../pages/Home';
import { HomeDetail } from '../pages/HomeDetail';

const Stack = createStackNavigator();

export function TopNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export function HomeTabNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="HomeDetail" component={HomeDetail} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTabNavigator" component={HomeTabNavigator} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  )
}