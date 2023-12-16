import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../Header';

const Notification = () => {
  const navigation = useNavigation();
  const notificationText = [
    {
      id: 1,
      text: 'A new airline has been added to our program.',
    },
    {
      id: 2,
      text: 'Travel to Paris with the most discounts',
    },
    {
      id: 3,
      text: 'Get to know the new hotel in Phuket',
    },
    {
      id: 4,
      text: 'Get to know the new hotel in Phuket',
    },
    {
      id: 5,
      text: 'Travel to Paris with the most discounts',
    },
    {
      id: 6,
      text: 'Get to know the new hotel in Phuket',
    },
    {
      id: 7,
      text: 'Get to know the new hotel in Phuket',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header name="Message Inbox" image={true}/>
      <ScrollView>
      <View style={styles.cardContainer}>
        {notificationText.map((item, index) => {
          return (
            <TouchableOpacity
              style={styles.favoriteTour}
              key={index}
              onPress={() => navigation.navigate("Messagescreen")}>
              <View style={styles.sidebar}></View>
              <View style={styles.flex}>
                <Text style={styles.favoriteText}>{item.text}</Text>
                {index == 0 && (
                  <Text style={styles.clickText}>Click if you want</Text>
                )}
              </View>
              <View style={styles.dot}></View>
            </TouchableOpacity>
          );
        })}
      </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default Notification;
