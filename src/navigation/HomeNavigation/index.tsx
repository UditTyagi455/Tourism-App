import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Home from '../../components/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AboutCountry from '../../components/AboutCountry';
import ViewAll from '../../components/Home/ViewAll';

const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: false,
  };


const HomeNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Homescreen" screenOptions={screenOptions}>
      <Stack.Screen name="Homescreen" component={Home} />
      <Stack.Screen name="AboutCountry" component={AboutCountry}/>
      <Stack.Screen name="ViewAll" component={ViewAll} />
    </Stack.Navigator>
  )
}


export default HomeNavigation;