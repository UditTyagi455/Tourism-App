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
import { DataDetail } from '../Home/HomeJsonData';
import Header from '../Header';
import { useTheme } from '@react-navigation/native';

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
  const theme = useTheme();

  useEffect(() => {
    console.log('route-data ==>', route.params.id);
  }, []);

  const OurData = DataDetail.data.filter(item => item.id === route.params.id);
  console.log('ourData =>', OurData);
  return (
    <View style={{marginTop: Platform.OS === "ios" ? 25 : 0}}>
      <Header name="Udit Tyagi" image={true}/>
      <ScrollView
      showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
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
            <Text style={[style.aboutCountryText,{color: theme.dark ? "white": "black",fontWeight: theme.dark ? "400" : "300"}]}>
              {OurData[0].aboutCountry}
            </Text>
          </View>
          <View
            style={style.likeContainer}>
            <Image
              source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3yof_51X-DJ1BWvGgL_INknYimeWx14dfb9U7zf_KRg&s"}}
              style={style.thumbImage}
            />
            <Text style={{color: theme.dark ? "white" : "black"}}>3,560</Text>
          </View>
          <View>
            <Text style={[style.boldText,{color: theme.dark ? "white": "black"}]}>Sightseeing Places</Text>
            <FlatList
              keyExtractor={() => Math.random() * 30}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={OurData[0].sightseeingPlaces}
              renderItem={({item}) => <ScrollData item={item} />}
            />
            <Text style={[style.boldText,{color: theme.dark ? "white": "black"}]}>Best Hotels</Text>
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
                      <Text style={[style.bestHoterRatingText,{color: theme.dark ? "white": "black"}]}>
                        Hotel du Louvre
                      </Text>
                    </View>
                    <View style={style.flexCommon}>
                      <Image
                        source={require('../../assets/Images/heart.png')}
                        style={style.heartImage}
                      />
                      <Text style={[style.ratingText,{color: theme.dark ? "white": "black"}]}>2,520</Text>
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
