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
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {style} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {
  initialValues,
  validationSchema,
} from '../../services/validate/ForgotPassword';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const Login = async () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(res => {
        console.log('sed the email ::', res);
      })
      .catch(_err => console.log('forgot-password error ==>', _err));
  };
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
                backgroundColor: 'white',
                borderRadius: 50,
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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values: any, {resetForm}) => {
                console.log('my-values ==>', values);
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
                  <Text style={style.TextLine}>
                    Please enter your email address:
                  </Text>
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
                  {!!errors.email && !!touched.email && <Text style={{marginLeft: 15,color: "red",fontSize: 16}}>* {errors?.email}</Text>}
                  </View>

                  <TouchableWithoutFeedback>
                    <View style={[style.LoginButton, style.shadowProp]}>
                      <Text style={style.TextStyleLogin}>Submit</Text>
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              )}
            </Formik>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
