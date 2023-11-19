import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const Login = async () => {};
  return (
    <KeyboardAvoidingView
      behavior={'height'}
      keyboardVerticalOffset={Dimensions.get('screen').height + 407}
      style={{flex: 1}}
      enabled>
      <StatusBar />
      <ScrollView>
        <ImageBackground
          source={require('../../assets/Background-images/Travel-bg.png')}
          resizeMode="cover"
          style={style.backgroundImage}>
          {/* upper airoplane image part  */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={Platform.OS === 'ios' ? style.GoBack : style.GoBackAndroid}>
            <Icon
              name="chevron-back"
              size={30}
              color="black"
              style={{
                marginLeft: 5,
                backgroundColor: "white",
                borderRadius: 50
              }}
            />
            <Text style={style.GoBackText}> Login</Text>
          </TouchableOpacity>

          <View style={style.UpperPart}>
            <Image
              source={require('../../assets/Images/world-tour-icon01.png')}
              style={style.world_tour_icon01}
            />
            <Text style={style.TourismText}>Tourism Application</Text>
          </View>

          {/* Below Part */}
          <View style={style.BelowPart}>
            <Text style={style.TextLine}>Please enter your email address:</Text>
            <TextInput
              style={style.input}
              onChangeText={setEmail}
              value={email}
              placeholder="Email"
              placeholderTextColor="#000"
            />

            <TouchableOpacity
              style={[style.LoginButton, style.shadowProp]}
              onPress={() => Login()}>
              <Text style={style.TextStyleLogin}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
