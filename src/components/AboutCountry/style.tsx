import {StyleSheet, Dimensions} from 'react-native';

export const style = StyleSheet.create({
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
  countryImage: {
    width: '100%',
    height: 250,
  },
  placeNamesCity: {
    color: 'white',
    fontSize: 16,
  },
  cityPart: {
    display: 'flex',
    flexDirection: 'row',
  },
  allCategories: {
    marginRight: 15,
    marginVertical: 10,
    shadowOffset: {
      width: 5,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowColor: '#8d99ae',
  },
  categoriesImage: {
    width: 230,
    height: 150,
    borderRadius: 5,
  },
  placeNames: {
    position: 'absolute',
    bottom: 5,
    paddingLeft: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  placeNamesCountry: {
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    paddingBottom: 5,
    paddingLeft: 3,
  },
  aboutCountryText: {
    color: 'black',
    fontSize: 15,
    paddingVertical: 15,
    opacity: 0.7,
    fontWeight: "300"
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginVertical: 20
  },
  belowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 230,
    height: 30,
    borderWidth: 2,
    borderColor: '#8CC0DE',
    marginRight: 18,
    borderRadius: 15,
    marginBottom: 20,
    marginTop: 10,
    // alignItems: "center"
  },
  innerContainer: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: '#8CC0DE',
    width: 15,
    height: '100%',
  },
  bestHoterRatingText: {
    marginTop: 5,
    color: 'black',
    fontSize: 13,
    fontWeight: '400',
    paddingLeft: 5,
  },
  heartImage: {
    width: 10,
    height: 10,
    marginTop: 10,
    marginRight: 5,
  },
  ratingText: {
    marginTop: 5,
    marginRight: 6,
    fontWeight: '400',
    color: 'black',
    fontSize: 12,
  },
  flexCommon: {
    display: 'flex',
     flexDirection: 'row',
     marginRight: 8
    },
  bookButton: {
    backgroundColor: '#8CC0DE',
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 40,
    marginTop: 20,
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    alignItems: 'center',
  },
  likeContainer: {
    display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: "flex-end",
              marginRight: 15,
              height: 50
  },thumbImage: {
    width: 20,
     height: 20,
     marginRight: 5,
     marginBottom: 2
  }
});
