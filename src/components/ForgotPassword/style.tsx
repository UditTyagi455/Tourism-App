import {StyleSheet, Dimensions} from 'react-native';

export const style = StyleSheet.create({
  LoginButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#8CC0FE',
    marginHorizontal: 8,
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
    height: Dimensions.get('window').height * 0.58,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BelowPart: {
    // height: (Dimensions.get("window").height)*0.5,
    //      backgroundColor: '#fff'
  },
  input: {
    padding: 12,
    borderWidth: 1,
    marginHorizontal: 8,
    borderRadius: 12,
    marginVertical: 5,
    backgroundColor: '#e9ecef',
    textAlign: 'center',
    fontWeight: "bold",
    color: "black"
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
    color: "white"
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
  TextLine: {
      fontWeight: "bold",
      fontSize: 15,
      marginVertical: 5,
      marginHorizontal: 8,
      color: "white"
  }
});
