import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notification from '../../components/Notification';
import MessageBox from '../../components/Notification/MessageBox';

const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: false,
  };


const NotificationNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Notificationscreen" screenOptions={screenOptions}>
      <Stack.Screen name="Notificationscreen" component={Notification} />
      <Stack.Screen name="Messagescreen" component={MessageBox}/>
    </Stack.Navigator>
  )
}


export default NotificationNavigation;