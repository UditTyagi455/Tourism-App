import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../components/Home';
import Root from '../components/Root';
import Login from '../components/Login';
import Register from '../components/Register';
import InitialPage from '../components/InitialPage';
import ForgotPassword from '../components/ForgotPassword';
import BottomNavigation from './BottomNavigation';

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  const screenOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator initialRouteName="Root" screenOptions={screenOptions}>
      <Stack.Screen name="Root" component={Root} />
      <Stack.Screen name="InitialPage" component={InitialPage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Forgot_Password" component={ForgotPassword} />
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default NavigationScreen;

const styles = StyleSheet.create({});
