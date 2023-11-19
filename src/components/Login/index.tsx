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
} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import {initialValues, validationSchema} from '../../services/validate/Login';
import {useMutation} from 'react-query';
import {UserLogin} from '../../services/helpers/UserLogin';
import { useSelector,useDispatch } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const state = useSelector(state => console.log("what-is-state ==>",state.counter));

  const count = useSelector((state:any) => state.counter.value);
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const Login = async () => {
    // await AsyncStorage.setItem('Auth_token', 'hello234@');
  };
  const submitForm = (values: any,{resetForm}) => {
    console.log('values ===>', values);
  

    // mutate(values);
  };

  console.log("Counter-value :::",count);

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
                backgroundColor: "white",
                borderRadius: 50
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
              onSubmit={(values: any,{resetForm}) => {
                console.log("my-values ==>",values)
                if(values.email == "Udittyagi455@gmail.com" && values.password == "12345678"){
                  navigation.navigate("BottomNavigation")
                }
                resetForm({values: initialValues})
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
                  {!!errors.email && !!touched.email && <Text style={style.errorText}>* {errors?.email}</Text>}

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
                  {!!errors.password && !!touched.password &&<Text style={style.errorText}>* {errors?.password}</Text>}
                  <TouchableOpacity
                    style={[style.LoginButton, style.shadowProp]}
                    onPress={handleSubmit}>
                    <Text style={style.TextStyleLogin}>Login</Text>
                  </TouchableOpacity>
                  {/* <Button onPress={handleSubmit} title="Submit" /> */}
                </View>
              )}
            </Formik>

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
