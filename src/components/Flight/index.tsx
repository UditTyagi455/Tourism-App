import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {style} from './style';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {Formik} from 'formik';
import {
  validationSchema,
  initialValues,
} from '../../services/validate/FlightForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

const Flight = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showCalendar,setShowCalendar] = useState(false);

  const navigation = useNavigation();
  const userData = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const originalStartDate = new Date(startDate ? startDate : "");
 
  const startday = originalStartDate.getDate();


  const originalEndDate = new Date(endDate ? endDate : "");
  const endyear = originalEndDate.getFullYear();
const endmonth = originalEndDate.getMonth() + 1; // Months are zero-indexed
const endday = originalEndDate.getDate();

  // const minDate = new Date(); // Today
  // const maxDate = new Date(2017, 6, 3);

  const onDateChange = (date, type) => {
    console.log('selected-date :::', date, type);
    if (type === 'END_DATE') {
      setEndDate(date);
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };


  const calendarPress = () => {
    setShowCalendar(!showCalendar);
  }

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView>
        <ImageBackground
          source={require('../../assets/Background-images/Travel-bg.png')}
          resizeMode="cover"
          style={style.backgroundImage}>
          {/* header part */}
          <View style={style.headerPart}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={
                Platform.OS === 'ios' ? style.GoBack : style.GoBackAndroid
              }>
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
            </TouchableOpacity>
            <View style={style.ImageHeader}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CM62a88xZ_D3rXjqLWWbYXjx3Dow-MwDuVTBPBg&s',
                }}
                width={40}
                height={40}
                style={{borderRadius: 50,marginLeft: 10}}
              />
              <View style={style.WelcomeView}>
                <Text style={style.NameText}>{userData.name}</Text>
              </View>
            </View>
          </View>

          {/* Flight book data  */}
          <View style={style.BelowPart}>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values: any, {resetForm}) => {
                console.log('my-fiight-form-value ==>', values);
                navigation.navigate("Allflight")
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
                  {showCalendar && <View
                    style={style.calendarView}>
                    <CalendarPicker
                      startFromMonday={true}
                      allowRangeSelection={true}
                      // minDate={minDate}
                      // maxDate={maxDate}
                      // weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
                      // months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                      // previousTitle="Anterior"
                      // nextTitle="Próximo"
                      todayBackgroundColor="#e6ffe6"
                      selectedDayColor="#66ff33"
                      selectedDayTextColor="#000000"
                      scaleFactor={375}
                      textStyle={{
                        fontFamily: 'Cochin',
                        color: '#000000',
                      }}
                      onDateChange={onDateChange}
                    />
                  </View>}

                  <TextInput
                    name="departurePlace"
                    style={[style.input, style.shadowProp]}
                    onChangeText={handleChange('departurePlace')}
                    onBlur={handleBlur('departurePlace')}
                    value={values.departurePlace}
                    placeholder="Departure Place"
                    placeholderTextColor="#000"
                  />
                  {!!errors.departurePlace && !!touched.departurePlace && (
                    <Text style={style.errorText}>
                      * {errors?.departurePlace}
                    </Text>
                  )}
                  <TextInput
                    name="arrivalPlace"
                    style={[style.input, style.shadowProp]}
                    onChangeText={handleChange('arrivalPlace')}
                    onBlur={handleBlur('arrivalPlace')}
                    value={values.arrivalPlace}
                    placeholder="Arrival Place"
                    placeholderTextColor="#000"
                  />
                  {!!errors.arrivalPlace && touched.arrivalPlace && (
                    <Text style={style.errorText}>
                      * {errors?.arrivalPlace}
                    </Text>
                  )}
                  <View>
                    <TextInput
                      name="period"
                      style={[style.input, style.shadowProp]}
                      onChangeText={handleChange('period')}
                      onBlur={handleBlur('period')}
                      value={startDate ? `${moment(startDate).format("DD/MM/YYYY")} to ${moment(endDate).format("DD/MM/YYYY")}`: ""}
                      placeholder="Period"
                      placeholderTextColor="#000"
                    />
                    <Icon
                      name="calendar-outline"
                      size={25}
                      style={style.icon}
                      color="black"
                      onPress={calendarPress}
                    />
                  </View>

                  {!!errors.period && touched.period && (
                    <Text style={style.errorText}>* {errors?.period}</Text>
                  )}
                  <TextInput
                    name="passenger"
                    style={[style.input, style.shadowProp]}
                    onChangeText={handleChange('passenger')}
                    onBlur={handleBlur('passenger')}
                    value={values.passenger}
                    placeholder="1 Passenger"
                    placeholderTextColor="#000"
                  />
                  {!!errors.passenger && touched.passenger && (
                    <Text style={style.errorText}>* {errors?.passenger}</Text>
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
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Flight;

const styles = StyleSheet.create({});
