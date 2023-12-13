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
    borderRadius: 10,
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
  },
  belowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 260,
    height: 30,
    borderWidth: 1,
    borderColor: '#8CC0DE',
    marginRight: 8,
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 10,
    // alignItems: "center"
  },
  innerContainer: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: '#8CC0DE',
    width: 18,
    height: '100%',
  },
  bestHoterRatingText: {
    marginTop: 5,
    color: 'black',
    fontSize: 13,
    fontWeight: 'bold',
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
    marginRight: 3,
    fontWeight: 'bold',
    color: 'black',
  },
  flexCommon: {display: 'flex', flexDirection: 'row'},
  bookButton: {
    backgroundColor: '#8CC0DE',
    padding: 15,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 40,
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
    width: 15, height: 15,marginRight: 5,marginBottom: 2
  }
});
