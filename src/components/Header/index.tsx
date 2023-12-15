import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text,View,TouchableOpacity,Image,Platform } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

const Header = ({name}) => {
    const navigation = useNavigation()
return(
    <View style={styles.ImageHeader}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={Platform.OS === 'ios' ? styles.GoBack : styles.GoBackAndroid}>
          <Icon
            name="chevron-back"
            size={30}
            color="black"
            style={{
              marginLeft: 5,
            }}
          />
        </TouchableOpacity>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CM62a88xZ_D3rXjqLWWbYXjx3Dow-MwDuVTBPBg&s',
          }}
          width={40}
          height={40}
          style={{borderRadius: 50}}
        />
        <View style={styles.NameContainer}>
          <Text style={styles.NameText}>{name}</Text>
        </View>
      </View>
)
};

export default Header;