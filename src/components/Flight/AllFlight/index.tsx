import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {Text,ScrollView,View,TouchableOpacity,Image} from "react-native"
import { useSelector,useDispatch } from "react-redux";
import { setTabBar } from "../../../features/TabBar/tabBar";
import Header  from "../../Header";
import {styles} from "./style"
import { useNavigation } from "@react-navigation/native";
import { useTheme } from '@react-navigation/native';

const AllFlight = () => {
  const theme = useTheme();
    const userData = useSelector(state => state.counter);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const tabBar = useSelector(state => console.log("state.navbar.value ==>",state))
    useEffect(()=>{
        dispatch(setTabBar(true)) 
        return () => {
            dispatch(setTabBar(false)) 
        }
    },[]);

    const notificationText = [
        {
          id: 1,
          text: 'AIR INDIA',
          image: "https://logowik.com/content/uploads/images/670_airindia.jpg"
        },
        {
          id: 2,
          text: 'VISTARA',
          image: "https://pbs.twimg.com/media/B3B6A-7CUAAjarl.jpg"
        },
        {
          id: 3,
          text: 'INDIGO',
          image: "https://seekvectorlogo.com/wp-content/uploads/2022/01/indigo-vector-logo-2022.png"
        },
        {
          id: 4,
          text: 'GO FIRST',
          image: "https://exchange4media.gumlet.io/news-photo/112942-main-2021-05-13T180220.205.jpg?w=400&dpr=2.6"
        },
        {
          id: 5,
          text: 'AKASA AIR',
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNgWbXRluZwrVZ23eTmyMqexV1F2JthvuvKnfplRroAw&s"
        },
      ];
    return(
        <SafeAreaView style={styles.container}>
        <Header name={userData.name} image={true}/>
        <ScrollView>
        <View style={styles.cardContainer}>
          {notificationText.map((item, index) => {
            return (
              <TouchableOpacity
                style={styles.favoriteTour}
                key={index}
                onPress={() => navigation.navigate("Flightdetail")}>
                <View style={styles.sidebar}></View>
                <Image source={{uri: item.image}} style={styles.imageStyle}/>
                <View style={styles.flex}>
                  <Text style={styles.favoriteText}>{item.text}</Text>
                  <Text style={[styles.dateText,{color: theme.dark ? "black": "black"}]}>8/15 to 8/20</Text>
                </View>
                <View style={styles.dot}>
                <Text style={styles.favoriteText}>805 $</Text>
                  <Text style={styles.favoriteText}>1200</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        </ScrollView>
        
      </SafeAreaView>
    )
}

export default AllFlight;