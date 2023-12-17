import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {style} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Config from "react-native-config";

const InitialPage = () => {
  const navigation = useNavigation();
  const Login = async () => {
    // await AsyncStorage.setItem('Auth_token', 'hello234@');
  };
  
  return (
    <View>
      <ImageBackground
        source={require('../../assets/Background-images/Travel-bg.png')}
        resizeMode="stretch"
        style={style.backgroundImage}>
        {/* upper airoplane image part  */}
        <View style={style.UpperPart}>
          <Image
            source={require('../../assets/Images/world-tour-icon01.png')}
            style={style.world_tour_icon01}
          />
          <Text style={style.TourismText}>Tourism Application</Text>
        </View>

        {/* Below Part */}
        <View style={style.BelowPart}>
          <View style={style.TextAlign}>
            <Text style={style.DiscoverText}>Discover best</Text>
            <Text style={style.DiscoverText}>place to vacation</Text>
          </View>

          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Login')}>
              <View style={style.LoginButton}>
            <Text style={style.TextStyleLogin}>Login</Text>
              </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Register')}>
              <View style={[style.SignupButton, style.shadowProp]}>
              <Text style={style.TextStyleSignUp}>Sign up</Text>
              </View>
          </TouchableWithoutFeedback>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InitialPage;

const styles = StyleSheet.create({});
