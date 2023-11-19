import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import React from 'react';
import {style} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

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

          <TouchableOpacity
            style={style.LoginButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={style.TextStyleLogin}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[style.SignupButton, style.shadowProp]}
            onPress={() => navigation.navigate('Register')}>
            <Text style={style.TextStyleSignUp}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InitialPage;

const styles = StyleSheet.create({});
