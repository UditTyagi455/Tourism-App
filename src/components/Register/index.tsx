import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Image,
  TextInput,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  validationSchema,
  initialValues,
} from '../../services/validate/Register';
import {Formik} from 'formik';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSelector, useDispatch } from 'react-redux';
import { registerUser } from '../../features/RegisterUser/registerSlice';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const dispatch = useDispatch();
  

  const navigation = useNavigation();
  const Login = async () => {
    // await AsyncStorage.setItem('Auth_token', 'hello234@');
  };
  return (
    <KeyboardAwareScrollView>
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
                borderRadius: 50,
              }}
            />
            <Text style={style.GoBackText}>Login</Text>
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
                dispatch(registerUser(values));
                resetForm({values: initialValues});
                alert("Register successfully!!")
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
                    name="name"
                    style={style.input}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    placeholder="Name"
                    placeholderTextColor="#000"
                  />
                  {!!errors.name && !!touched.name && (
                    <Text style={style.errorText}>* {errors?.name}</Text>
                  )}
                  <TextInput
                    name="email"
                    style={style.input}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    placeholder="Email"
                    placeholderTextColor="#000"
                  />
                  {!!errors.email && touched.email &&  (
                    <Text style={style.errorText}>* {errors?.email}</Text>
                  )}
                  <TextInput
                    name="password"
                    style={style.input}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    placeholder="Password"
                    placeholderTextColor="#000"
                  />
                  {!!errors.password && touched.password &&  (
                    <Text style={style.errorText}>* {errors?.password}</Text>
                  )}
                  <TextInput
                    name="repeatPassword"
                    style={style.input}
                    onChangeText={handleChange('repeatPassword')}
                    onBlur={handleBlur('repeatPassword')}
                    value={values.repeatPassword}
                    placeholder="Repeat Password"
                    placeholderTextColor="#000"
                  />
                  {!!errors.repeatPassword && touched.repeatPassword && (
                    <Text style={style.errorText}>
                      * {errors?.repeatPassword}
                    </Text>
                  )}
                  <TouchableOpacity
                    style={[style.LoginButton, style.shadowProp]}
                    onPress={handleSubmit}>
                    <Text style={style.TextStyleLogin}>Submit</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </ImageBackground>
      </ScrollView>
      </KeyboardAwareScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({});
