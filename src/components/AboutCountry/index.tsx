import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useEffect} from 'react';
import {style} from './style';
import {useNavigation} from '@react-navigation/native';
import {categoriesData} from '../Home/HomeJsonData';
import Icon from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';

const ScrollData = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={style.allCategories}>
      <Image source={{uri: item.image}} style={style.categoriesImage} />
      <View style={style.placeNames}>
        <View>
          <Text style={style.placeNamesCountry}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const AboutCountry = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    console.log('route-data ==>', route.params.id);
  }, []);

  const OurData = categoriesData.filter(item => item.id === route.params.id);
  console.log('ourData =>', OurData);
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
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 50,
          showsVerticalScrollIndicator: false,
          showsHorizontalScrollIndicator: false,
        }}>
        <View>
          {
            <Image
              source={{uri: OurData[0].image}}
              style={style.countryImage}
            />
          }
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
        {/* below part  */}
        <View style={{paddingHorizontal: 8}}>
          <View style={{marginVertical: 8}}>
            <Text style={style.aboutCountryText}>
              {OurData[0].aboutCountry}
            </Text>
          </View>
          <View
            style={style.likeContainer}>
            <Image
              source={require('../../assets/Images/thumbs.png')}
              style={style.thumbImage}
            />
            <Text>3,560</Text>
          </View>
          <View>
            <Text style={style.boldText}>Sightseeing Places</Text>
            <FlatList
              keyExtractor={() => Math.random() * 30}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={OurData[0].sightseeingPlaces}
              renderItem={({item}) => <ScrollData item={item} />}
            />
            <Text style={style.boldText}>Best Hotels</Text>
            <FlatList
              keyExtractor={() => Math.random() * 30}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={OurData[0].bestHotels}
              renderItem={({item}) => <ScrollData item={item} />}
            />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {OurData[0].bestHotels.map((item, index) => {
                return (
                  <View style={style.belowContainer} key={index}>
                    <View style={style.flexCommon}>
                      <View style={style.innerContainer}></View>
                      <Text style={style.bestHoterRatingText}>
                        Hotel du Louvre
                      </Text>
                    </View>
                    <View style={style.flexCommon}>
                      <Image
                        source={require('../../assets/Images/heart.png')}
                        style={style.heartImage}
                      />
                      <Text style={style.ratingText}>2,520</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
            <TouchableWithoutFeedback>
              <View style={style.bookButton}>
                <Text style={style.buttonText}>Book</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AboutCountry;

const styles = StyleSheet.create({});
