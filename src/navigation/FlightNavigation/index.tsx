import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Flight from '../../components/Flight';
import AllFlight from '../../components/Flight/AllFlight';
import FlightDetail from '../../components/Flight/FlightDetail';

const Stack = createNativeStackNavigator();

const FlightNavigation = () => {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator
      initialRouteName="Flightscreen"
      screenOptions={screenOptions}>
      <Stack.Screen name="Flightscreen" component={Flight} options={{tabBarStyle: {display: 'none'}}}/>
      <Stack.Screen name="Allflight" component={AllFlight} />
      <Stack.Screen name="Flightdetail" component={FlightDetail} />
    </Stack.Navigator>
  );
};

export default FlightNavigation;
