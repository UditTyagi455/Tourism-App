import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import Header from '../../Header';
import { useTheme } from '@react-navigation/native';

const MessageBox = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <SafeAreaView>
      <Header name="Message Inbox" image={true}/>

      {/* below part */}

      <View style={styles.favoriteTour}>
        <View style={styles.sidebar}></View>
        <View style={styles.flex}>
            <View style={{display: "flex",flexDirection: "row",alignItems: "center",marginBottom: 35}}>
            <Image source={require("../../../assets/Images/thyaq.png")} style={{width: 35,height: 35}}/>
                <Text style={{color: theme.dark ? "black":"black"}}>Turkism Airline</Text>
            </View>
          <Text style={styles.favoriteText}>
            Turkish Airlines Description {"\n"}Turkish Airlines (Turkish: Türk Hava
            Yolları) or officially Türk Hava Yolları Anonim Ortaklığı is the
            flag carrier of Turkey. As of 2022, it operates scheduled services
            to 340 destinations in Europe, Asia, Africa, and the Americas,
            making it the largest mainline carrier in the world by number of
            passenger destinations.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MessageBox;
