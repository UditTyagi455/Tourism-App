import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Profile from '../../components/Profile';
import FavoriteTour from '../../components/Profile/FavoriteTour';
import LastTour from '../../components/Profile/LastTour';
import OpenOrders from '../../components/Profile/OpenOrders';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerShown: false,
  };

const ProfileNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Profilescreen" screenOptions={screenOptions}>
      <Stack.Screen name="Profilescreen" component={Profile} />
      <Stack.Screen name="FavoriteTour" component={FavoriteTour} />
      <Stack.Screen name="LastTour" component={LastTour} />
      <Stack.Screen name="OpenOrder" component={OpenOrders} />
    </Stack.Navigator>
  )
}

export default ProfileNavigation

const styles = StyleSheet.create({});