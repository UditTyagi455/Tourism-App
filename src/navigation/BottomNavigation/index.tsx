import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from '../HomeNavigation';
import Notification from '../../components/Notification';
import NotificationNavigation from '../NotificationNavigation';
import Flight from '../../components/Flight';
import FlightNavigation from '../FlightNavigation';
import ProfileNavigation from '../ProfileNavigation';
import Profile from '../../components/Profile/ProfilePic';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/core';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const [hide, setHide] = useState(false);
  const navigation = useNavigation();
  const initialLayout = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  };
  const iconClicked = (route: any) => {
    navigation.navigate(route);
  };
  return (
    <View
      style={{
        flex: 1,
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'red',
        borderRadius: 50,
      }}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarLabelPosition: 'below-icon',
          headerShown: false,
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontSize: focused ? 12 : 10,
                fontWeight: focused ? '400' : '200',
                color: 'blue',
                display: 'flex',
                flexDirection: 'row',
              }}>
              {route.name}
            </Text>
          ),
          tabBarShowLabel: false,
          tabBarIndicatorStyle: {
            backgroundColor: '#000',
            height: 12,
          },
          tabBarStyle: {
            display: 'flex',
          },
          tabBarIcon: ({focused}) => (
            <TouchableWithoutFeedback onPress={() => iconClicked(route.name)}>
              <View
                style={[
                  {
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    alignContent: 'center',
                    flex: 1,
                    paddingLeft: 25,
                    paddingRight: 25,
                    borderTopWidth: 3,
                    // backgroundColor:"red",
                  },
                  focused ? {borderColor: '#f87f81'} : {borderColor: '#fff'},
                ]}>
                {route.name == 'Home' && focused ? (
                  <Ionicons name="home" style={styles.Icon} color="black" />
                ) : null}

                {route.name == 'Home' && !focused ? (
                  <TouchableWithoutFeedback
                    onPress={() => iconClicked(route.name)}>
                    <Ionicons
                      name="home-outline"
                      style={styles.Icon}
                      color="black"
                    />
                  </TouchableWithoutFeedback>
                ) : null}
                {route.name == 'Notification' && focused ? (
                  <Ionicons
                    name="notifications"
                    type="Ionicons"
                    style={styles.Icon}
                    color="black"
                  />
                ) : null}

                {route.name == 'Notification' && !focused ? (
                  <TouchableWithoutFeedback
                    onPress={() => iconClicked(route.name)}>
                    <Ionicons
                      name="notifications-outline"
                      type="Ionicons"
                      style={styles.Icon}
                      color="black"
                    />
                  </TouchableWithoutFeedback>
                ) : null}

                {route.name == 'Flight' && focused ? (
                  <Ionicons
                    name="airplane"
                    type="Ionicons"
                    style={styles.Icon}
                    color="black"
                  />
                ) : null}

                {route.name == 'Flight' && !focused ? (
                  <TouchableWithoutFeedback
                    onPress={() => iconClicked(route.name)}>
                    <Ionicons
                      name="airplane-outline"
                      type="Ionicons"
                      style={styles.Icon}
                      color="black"
                    />
                  </TouchableWithoutFeedback>
                ) : null}

                {route.name == 'Profile' && focused ? (
                  <Ionicons
                    name="person"
                    type="Ionicons"
                    style={styles.Icon}
                    color="black"
                  />
                ) : null}

                {route.name == 'Profile' && !focused ? (
                  <TouchableWithoutFeedback
                    onPress={() => iconClicked(route.name)}>
                    <Ionicons
                      name="person-outline"
                      type="Ionicons"
                      style={styles.Icon}
                      color="black"
                    />
                  </TouchableWithoutFeedback>
                ) : null}
              </View>
            </TouchableWithoutFeedback>
          ),
        })}>
        <Tab.Screen name="Home" component={HomeNavigation} options={{}} />
        <Tab.Screen name="Notification" component={NotificationNavigation} />
        <Tab.Screen
          name="Flight"
          component={FlightNavigation}
          options={{tabBarStyle: {display: 'none'}}}
        />
        <Tab.Screen name="Profile" component={ProfileNavigation} />
      </Tab.Navigator>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  Icon: {
    fontSize: 22,
  },
});
