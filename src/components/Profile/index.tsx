import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ProfilePic from './ProfilePic';
import {style} from './style';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ProfilePic />
      <View style={style.allFields}>
        <TouchableOpacity
          style={style.favoriteTour}
          onPress={() => navigation.navigate('FavoriteTour')}>
          <View style={style.sidebar}></View>
          <Text style={style.favoriteText}>Favorites Tours</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.favoriteTour}
          onPress={() => navigation.navigate('LastTour')}>
          <View style={style.sidebar}></View>
          <Text style={style.favoriteText}>Last Tours</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.favoriteTour}
          onPress={() => navigation.navigate('OpenOrder')}>
          <View style={style.sidebar}></View>
          <Text style={style.favoriteText}>Tracking Open Orders</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
