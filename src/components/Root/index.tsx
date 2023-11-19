import {useEffect, useState, useRef} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
import SplashScreen from 'react-native-lottie-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Root = () => {
  const navigation = useNavigation();
  const video = useRef(null);
  const [isReady, useIsReady] = useState(true);
  useEffect(() => {
    AsyncStorage.getItem('Auth_token').then(token => {
      if (token) {
        console.log('token', token);
        navigation.reset({
          index: 0,
          routes: [{name: 'BottomNavigation'}],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: 'InitialPage'}],
        });
      }
    });
    SplashScreen.hide(); // here
  }, []);

  //   if (isReady) {
  //     return (
  //       <ImageBackground
  //         style={{
  //           position: 'absolute',
  //           width: Dimensions.get('window').width,
  //           height: Dimensions.get('window').height,
  //         }}
  //         resizeMode={'cover'}
  //         source={require('../../assets/splashScreen.png')}>
  //         <Video
  //           ref={video}
  //           source={require('../../assets/splash.mp4')}
  //           style={{
  //             alignSelf: 'center',
  //             width: Dimensions.get('window').width,
  //             height: Dimensions.get('window').height,
  //           }}
  //           resizeMode="cover"
  //           isLooping={false}
  //           onReadyForDisplay={() => {
  //             setTimeout(() => {
  //               useIsReady(false);
  //             }, 5000);
  //           }}
  //         />
  //       </ImageBackground>
  //     );
  //   }
  return (
    <View>
      {/* <ImageBackground
        style={{
          position: 'absolute',
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        resizeMode={'cover'}
        source={require('../../assets/Traveller.png')}>
        </ImageBackground> */}
        <Text>please wait...</Text>
    </View>
  );
};

export default Root;

const styles = StyleSheet.create({});
