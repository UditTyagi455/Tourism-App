import {StyleSheet, Dimensions} from 'react-native';

export const style = StyleSheet.create({
  headerPart: {
    display: 'flex',
    flexDirection: 'row',
  },
  backgroundImage: {
    height: Dimensions.get('window').height,
    // opacity: 0.9
  },
  GoBack: {
    marginTop: 55,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  GoBackAndroid: {
    margin: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  GoBackText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  WelcomeView: {
    paddingLeft: 10,
  },
  WelcomeText: {
    fontWeight: '200',
    fontSize: 14,
    color: 'black',
  },
  NameText: {
    fontWeight: '400',
    fontSize: 15,
    color: 'black',
  },
  ImageHeader: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15,
    alignItems: 'center',
  },
  BelowPart: {
    // marginTop: Dimensions.get('window').height * 0.48
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  input: {
    padding: 10,
    paddingLeft: 15,
    borderWidth: 1,
    marginHorizontal: 8,
    borderRadius: 12,
    marginVertical: 5,
    backgroundColor: '#e9ecef',
    // textAlign: 'center',
    color: 'black',
    fontSize: 16,
  },
  ForgotPasswordContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ForgotPassword: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginLeft: 15,
    fontSize: 10,
  },
  LoginButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#8CC0FE',
    marginHorizontal: 10,
    marginVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  TextStyleLogin: {
    color: '#fff',
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    right: 25,
    top: 18,
    paddingLeft: 10,
  },
  calendarView: {
    position: "absolute",
    bottom: 195,
left: 12,
    display: 'flex',
    backgroundColor: '#fff',
    zIndex: 100,
    width: 386
  },
});
