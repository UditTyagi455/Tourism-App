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
  Button,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {style} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import {initialValues, validationSchema} from '../../services/validate/Login';
import {useMutation} from 'react-query';
import {UserLogin} from '../../services/helpers/UserLogin';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppWriteContext} from '../../appwrite/AppWriteContext';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import { registerUser } from '../../features/RegisterUser/registerSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const state = useSelector(state =>
    console.log('what-is-state ==>', state.counter),
  );
  // const {appWrite,isLoggedIn,setIsLoggedIn} = useContext(AppWriteContext)

  const dispatch = useDispatch();

  const navigation = useNavigation();
  const Login = async () => {
    // await AsyncStorage.setItem('Auth_token', 'hello234@');
  };
  const submitForm = async (values: any) => {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(res => {
        console.log('user signed in ==>', res);
        setToken('jwt@$djhaf#42dfas3flsd');
        setLoading(false);
        AsyncStorage.setItem("signInWith","email")
        navigation.navigate('BottomNavigation');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        setLoading(false);
        console.error(error);
      });
    // mutate(values);
  };

  const setToken = async (token) => {
    await AsyncStorage.setItem('Auth_token', token);
  };

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'],
      webClientId:
        '902284174007-a59gkfsa8e8ja4fdraurlukklchlr5qn.apps.googleusercontent.com',
      offlineAccess: true,
    });
  }, []);

  const googleSignin = async () => {
    console.log('googleSignin press ==>');

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if(!!userInfo){
        console.log('userInfo ==>', userInfo);
        setToken(userInfo.idToken);
        dispatch(registerUser({name: userInfo.user.givenName,email: "",password: "",repeatPassword: ""}));
        AsyncStorage.setItem("signInWith","google")
        navigation.navigate('BottomNavigation');
      }
      
    } catch (error) {
      console.log('google login error ==>', error);
    }
  };

  // useEffect(() => {
  //   appWrite
  //   .getCurrentUser()
  //   .then((res) => {
  //     console.log("response ==>",res)

  //   }).catch(err => console.log("error occure ==>",err)
  //   )
  // },[appWrite,setIsLoggedIn])

  return (
    <KeyboardAwareScrollView extraHeight={50}>
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
                backgroundColor: 'white',
                borderRadius: 50,
              }}
            />
            <Text style={style.GoBackText}> Sign up</Text>
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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values: any, {resetForm}) => {
                console.log('my-values ==>', values);
                submitForm(values);
                resetForm({values: initialValues});
              }}>
              {({
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                handleBlur,
              }) => (
                <View>
                  <TextInput
                    name="email"
                    style={style.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="Email"
                    placeholderTextColor="#000"
                  />
                  <View style={{height: 15}}>
                    {!!errors.email && !!touched.email && (
                      <Text style={style.errorText}>* {errors?.email}</Text>
                    )}
                  </View>

                  <TextInput
                    name="password"
                    style={style.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="#000"
                  />
                  <View style={{height: 15}}>
                    {!!errors.password && !!touched.password && (
                      <Text style={style.errorText}>* {errors?.password}</Text>
                    )}
                  </View>
                  <TouchableWithoutFeedback onPress={handleSubmit}>
                    <View style={[style.LoginButton, style.shadowProp]}>
                      {loading ? (
                        <ActivityIndicator size="large" />
                      ) : (
                        <Text style={style.TextStyleLogin}>Login</Text>
                      )}
                    </View>
                  </TouchableWithoutFeedback>
                  {/* <Button onPress={handleSubmit} title="Submit" /> */}
                </View>
              )}
            </Formik>
            <Text style={{color: "white",display: "flex",alignSelf: "center",marginVertical: 10}}>Or Login with</Text>
            <TouchableOpacity onPress={() => googleSignin()} style={{display: "flex",alignSelf: "center",backgroundColor: "white",padding: 5,marginVertical: 10}}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/256/2702/2702602.png',
                }}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
            <View style={style.ForgotPasswordContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Forgot_Password')}>
                <Text style={style.ForgotPassword}>Forgot Password ?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({});
