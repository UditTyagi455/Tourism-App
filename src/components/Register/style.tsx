import {StyleSheet, Dimensions} from 'react-native';
import { Platform } from 'react-native';
export const style = StyleSheet.create({
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
  backgroundImage: {
    height: Dimensions.get('window').height,
    // opacity: 0.9
  },
  world_tour_icon01: {
    opacity: 1,
    // height: 150,
    // width: 80
  },
  TourismText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 8,
    color: "white"
  },
  UpperPart: {
    height: Platform.OS === "ios" ? Dimensions.get('window').height * 0.50 : Dimensions.get('window').height * 0.45,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BelowPart: {
    // height: (Dimensions.get("window").height)*0.5,
    //      backgroundColor: '#fff'
  },
  input: {
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 8,
    borderRadius: 12,
    marginVertical: 5,
    backgroundColor: '#e9ecef',
    textAlign: 'center',
    color: "black"
  },
  GoBack: {
    marginTop: 55,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
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
    color: "white",
    marginLeft: 8
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
    fontSize: 10
  }
});
