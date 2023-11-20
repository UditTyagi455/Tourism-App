import {StyleSheet, Text, View, TouchableOpacity, Platform,Image} from 'react-native';
import React, {useEffect} from 'react';
import {style} from './style';
import {useNavigation} from '@react-navigation/native';
import {categoriesData} from '../Home/HomeJsonData';
import Icon from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';

const AboutCountry = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    console.log('route-data ==>', route.params.id);
  }, []);

  const OurData = categoriesData.filter(item => item.id === route.params.id);
  console.log("ourData =>",OurData)
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={Platform.OS === 'ios' ? style.GoBack : style.GoBackAndroid}>
        <Icon
          name="chevron-back"
          size={30}
          color="black"
          style={{
            marginLeft: 5,
            backgroundColor: 'white',
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>
      <View>
        {<Image source={{uri: OurData[0].image}} style={style.countryImage}/>}
        <View style={style.placeNames}>
        <View>
          <Text style={style.placeNamesCountry}>{OurData[0].country}</Text>
          <View style={style.cityPart}>
            <Icon name="location-outline" size={18} color="white" />
            <Text style={style.placeNamesCity}>{OurData[0].city}</Text>
          </View>
        </View>
      </View>
      </View>
    </View>
  );
};

export default AboutCountry;

const styles = StyleSheet.create({});
