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
            <Text style={{color: 'black', fontSize: 15, paddingVertical: 15}}>
              {OurData[0].aboutCountry}
            </Text>
          </View>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
              Sightseeing Places
            </Text>
            <FlatList
              keyExtractor={() => Math.random() * 30}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={OurData[0].sightseeingPlaces}
              renderItem={({item}) => <ScrollData item={item} />}
            />
            <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
              Best Hotels
            </Text>
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
                  <View
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: 260,
                      height: 30,
                      borderWidth: 1,
                      borderColor: "#8CC0DE",
                      marginRight: 8,
                      borderRadius: 12,
                      marginBottom: 20,
                      marginTop: 10,
                      // alignItems: "center"
                    }}
                    key={index}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                      <View
                        style={{
                          borderTopLeftRadius: 5,
                          borderBottomLeftRadius: 5,
                          backgroundColor: '#8CC0DE',
                          width: 18,
                          height: '100%',
                        }}></View>
                      <Text style={{marginTop: 5,color: "black",fontSize: 13,fontWeight: "bold",paddingLeft: 5}}>Hotel du Louvre</Text>
                    </View>
                    <View style={{display: "flex",flexDirection: "row"}}>
                      <Image source={require("../../assets/Images/heart.png")} style={{width: 10,height: 10,marginTop: 10,marginRight: 5}}/>
                      <Text style={{marginTop: 5,marginRight: 3,fontWeight: "bold",color: "black"}}>2,520</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
            <TouchableWithoutFeedback >
              <View style={{backgroundColor: "#8CC0DE",padding: 25,display: "flex",justifyContent: "center",marginBottom: 20,alignItems: "center",borderRadius: 15}}>

              <Text style={{color: "white",fontSize: 30,alignItems: "center"}}>Book</Text>
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
