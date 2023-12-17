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
  RefreshControl,
  TouchableWithoutFeedback,
  Switch
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {style} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {categoriesData} from './HomeJsonData';
import {categories} from './HomeJsonData';
import {popularData} from './HomeJsonData';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import { setThemeColor } from '../../features/Theme/theme';

const ScrollData = ({item}) => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <TouchableOpacity style={style.allCategories} onPress={() => navigation.navigate("AboutCountry",{id: item.id})}>
      <Image source={{uri: item.image}} style={style.categoriesImage} />
      <View style={style.placeNames}>
        <View>
          <Text style={[style.placeNamesCountry,{color: theme.dark ? "white": "white"}]}>{item.country}</Text>
          <View style={style.cityPart}>
            <Icon name="location-outline" size={18} color="white" />
            <Text style={[style.placeNamesCity,{color: theme.dark ? "white": "white"}]}>{item.city}</Text>
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
  const [active, setActive] = useState({id: 1,category: 'All',active: true});
  const [refreshing,setRefresh] = useState(false);
  const [onRefresh, setOnRefresh] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const dispatch = useDispatch();
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled)
    if(isEnabled)
    dispatch(setThemeColor("light"));
  else dispatch(setThemeColor("dark"));
  }
  const themeColor = useSelector(state => state.theme.theme);
  const userData = useSelector(state => state.counter);
  const navigation = useNavigation();
  const theme = useTheme();

  const categoryClick = (item: any) => {
    const obj = categories.filter(items => items.id === item.id);
    setActive(obj[0]);
    console.log('what-is-obj :::>', obj, active);
  };

  const _onRefresh = () => {
    setRefresh(true);
    setOnRefresh(false);
    setTimeout(() => {
      setRefresh(false);
      setActive({id: 1,category: 'All',active: true})
      setOnRefresh(true);
    }, 1000);
  }

  const Logout = async () => {
    await AsyncStorage.removeItem('Auth_token');
  };
  return (
    <SafeAreaView style={style.Container}>
       <ScrollView 
       refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={_onRefresh}
        />
      }>
       <StatusBar
        animated={true}
        backgroundColor={theme.dark === true ? "#000" : "#000"}
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
        hidden={false}
      />
      {/* Name header */}
      <View style ={{display: "flex",flexDirection: "row",justifyContent: "space-between"}}>
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
          <Text style={[style.WelcomeText,{color: theme.dark ? "white": "black"}]}>Welcome</Text>
          <Text style={[style.NameText,{color: theme.dark ? "white": "black"}]}>{userData.name}</Text>
        </View>
        </View>
        <View style={{marginRight: 15,display: "flex",alignSelf: "center"}}>
        <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => toggleSwitch()}
        value={isEnabled}
      />
        </View>
      </View>

      {/* Search box */}
      <View style={style.inputContainer}>
        <TextInput
          onChangeText={onSearchItem}
          style={[style.searchBox,{borderColor: theme.dark === true ? "white" : "black",color: "white"}]}
          value={searchItem}
          placeholder="Search destination..."
          placeholderTextColor={theme.dark === true ? "#fff" : "#000"}
        />
        <Icon
          name="search-outline"
          size={18}
          style={style.icon}
          color={theme.dark === true ? "white": "black"}
        />
      </View>
      {onRefresh && <View style={style.CategoriesView}>
        <View style={style.textStyling}>
        <Text style={[style.CategoriesText,{color: theme.dark ? "white": "black"}]}>Categories</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("ViewAll",{data: "allData"})}>
          <Text style={[style.viewAll,{color: theme.dark ? "white": "black"}]}>View All</Text>
        </TouchableWithoutFeedback>
        </View>
          
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categories.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    style.CategoriesData,
                    item.id === active.id && style.onActive,
                  ]}
                  onPress={() => categoryClick(item)}>
                  <Text
                    style={
                      item.id === active.id
                        ? {color: theme.dark ? "white": "white"}
                        : style.CategoryTextColor
                    }>
                    {item.category}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
         
          <FlatList
            keyExtractor={(item:number) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={active.category == "All" ? categoriesData.allData : categoriesData.allData.filter(item => item.category == active.category)}
            renderItem={({item}) => <ScrollData item={item} />}
          />

          <View style={style.popularView}>
            <Text style={[style.PopularText,{color: theme.dark ? "white": "black"}]}>Popular</Text>
            <FlatList
              keyExtractor={(item:number) => item.id}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={categoriesData.popularData}
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
        </View>}
        </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
