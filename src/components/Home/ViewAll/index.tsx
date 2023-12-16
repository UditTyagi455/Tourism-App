import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList,TouchableOpacity,Image,View,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import {useRoute} from '@react-navigation/native';
import { categoriesData } from "../HomeJsonData";
import {style} from "./styles"
import Header from "../../Header";
import { useTheme } from '@react-navigation/native';

const ScrollData = ({item}) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity style={style.allCategories} onPress={() => navigation.navigate("AboutCountry",{id: item.id})}>
        <View style={{display: "flex",flexDirection: "row"}}>

        <Image source={{uri: item.image}} style={style.categoriesImage} />
        <View style={{display: "flex",justifyContent: "center",marginHorizontal: 30}}>
        <Text style={{color: "black",fontWeight: "500",fontSize: 20,width: 130}}>{item.country}</Text>
        <Text style={{color: "black"}}>{item.city}</Text>
        </View>
        </View>
        <View style={style.placeNames}>
          <View>
            <Text style={style.placeNamesCountry}>{item.country}</Text>
            <View style={style.cityPart}>
              <Icon name="location-outline" size={18} color="white" />
              <Text style={style.placeNamesCity}>{item.city}</Text>
            </View>
          </View>
          {/* <View style={style.rating}>
            <Text style={style.ratingText}>4.6</Text>
            <Icon name="star-outline" size={12} color="white" />
          </View> */}
        </View>
      </TouchableOpacity>
    );
  };

const ViewAll = () => {
    const route = useRoute();
    const theme = useTheme();
    return(
        <SafeAreaView style={{ backgroundColor: theme.dark ? "black": "#f5ebe0"}}>
            <Header name="All Data" image={true}/>
            <View style={{marginBottom: 130}}>
            <FlatList
            keyExtractor={(item:number) => item.id}
            showsVerticalScrollIndicator={false}
            data={categoriesData.allData}
            renderItem={({item}) => <ScrollData item={item} />}
          />
            </View> 
        </SafeAreaView>
    )
}

export default ViewAll ;