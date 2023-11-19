import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {style} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {categoriesData} from './HomeJsonData';
import {categories} from './HomeJsonData';
import {popularData} from './HomeJsonData';
import { useSelector, useDispatch } from 'react-redux';

const ScrollData = ({item}) => {
  return (
    <TouchableOpacity style={style.allCategories}>
      <Image source={{uri: item.image}} style={style.categoriesImage} />
      <View style={style.placeNames}>
        <View>
          <Text style={style.placeNamesCountry}>{item.country}</Text>
          <View style={style.cityPart}>
            <Icon name="location-outline" size={18} color="white" />
            <Text style={style.placeNamesCity}>{item.city}</Text>
          </View>
        </View>
        <View style={style.rating}>
          <Text style={style.ratingText}>4.6</Text>
          <Icon name="star-outline" size={12} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Home = () => {
  const [searchItem, onSearchItem] = useState('');
  const [active, setActive] = useState(1);
  const userData = useSelector(state => state.counter);

  const categoryClick = (item: any) => {
    const obj = categories.filter(items => items.id === item.id);
    setActive(obj[0].id);
    console.log('what-is-obj :::>', obj, active);
  };

  const Logout = async () => {
    await AsyncStorage.removeItem('Auth_token');
  };
  return (
    <SafeAreaView style={{marginTop: 20, marginLeft: 10}}>
      <ScrollView>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        hidden={false}
      />
      {/* Name header */}
      <View style={style.ImageHeader}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CM62a88xZ_D3rXjqLWWbYXjx3Dow-MwDuVTBPBg&s',
          }}
          width={40}
          height={40}
          style={{borderRadius: 50}}
        />
        <View style={style.WelcomeView}>
          <Text style={style.WelcomeText}>Welcome</Text>
          <Text style={style.NameText}>{userData.name}</Text>
        </View>
      </View>

      {/* Search box */}
      <View style={style.inputContainer}>
        <TextInput
          onChangeText={onSearchItem}
          style={style.searchBox}
          value={searchItem}
          placeholder="Search destination..."
          placeholderTextColor="#000"
        />
        <Icon
          name="search-outline"
          size={18}
          style={style.icon}
          color="black"
        />
      </View>
        <View style={style.CategoriesView}>
          <Text style={style.CategoriesText}>Categories</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    style.CategoriesData,
                    item.id === active && style.onActive,
                  ]}
                  onPress={() => categoryClick(item)}>
                  <Text
                    style={
                      item.id === active
                        ? style.onActiveCategoryTextColor
                        : style.CategoryTextColor
                    }>
                    {item.category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
          <FlatList
            keyExtractor={() => Math.random() * 30}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoriesData}
            renderItem={({item}) => <ScrollData item={item} />}
          />

          <View style={style.popularView}>
            <Text style={style.PopularText}>Popular</Text>
            <FlatList
              keyExtractor={() => Math.random() * 30}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={popularData}
              renderItem={({item}) => <ScrollData item={item} />}
            />
            {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {popularData.map((item, index) => {
              return (
                <TouchableOpacity style={style.allCategories} key={index}>
                  <Image
                    source={{uri: item.image}}
                    style={style.categoriesImage}
                  />
                  <View style={style.placeNames}>
                  <View>
                  <Text style={style.placeNamesCountry}>{item.country}</Text>
                  <View style={style.cityPart}>
                    <Icon name="location-outline" size={18} color="white" />
                    <Text style={style.placeNamesCity}>{item.city}</Text>
                  </View>
                  </View>
                  <View style={style.rating}>
                    <Text style={style.ratingText}>4.2</Text>
                    <Icon name="star-outline" size={12} color="white"/>
                  </View>
                </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView> */}
          </View>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
