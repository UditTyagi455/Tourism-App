import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  Container: {
    paddingTop: 20,
    paddingLeft: 10,
    // backgroundColor: '#e5e5e5',
    height: '100%',
  },
  ImageHeader: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 15,
  },
  WelcomeView: {
    paddingLeft: 10,
  },
  WelcomeText: {
    fontWeight: '400',
    fontSize: 16,
    // color: 'black',
  },
  NameText: {
    fontWeight: '300',
    fontSize: 15,
    // color: 'black',
  },
  inputContainer: {
    justifyContent: 'center',
  },
  searchBox: {
    borderWidth: 2,
    marginVertical: 10,
    // marginHorizontal: 10,
    borderRadius: 25,
    height: 45,
    paddingLeft: 40,
    opacity: 0.5,
    // color: 'black',
  },
  icon: {
    position: 'absolute',
    left: 10,
    paddingLeft: 10,
  },
  CategoriesView: {
    marginVertical: 25,
  },
  CategoriesText: {
    fontWeight: '600',
    fontSize: 16,
    // color: 'black',
  },
  CategoriesData: {
    marginHorizontal: 8,
    marginVertical: 20,
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    // color: 'black',
    borderRadius: 50,
  },
  textStyling: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  CategoryTextColor: {
    color: 'black',
  },
  onActiveCategoryTextColor: {
    color: 'white',
  },
  onActive: {
    backgroundColor: 'blue',
    color: 'black',
  },
  LogoutButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#2196F3',
  },
  allCategories: {
    marginRight: 15,
    shadowOffset: {
      width: 5,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowColor: '#8d99ae',
  },
  viewAll: {
    // color: "black",
    marginRight: 15,
    // marginVertical: 6
  },
  categoriesImage: {
    width: 250,
    height: 190,
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
    // color: 'white',
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: 5,
    paddingLeft: 3,
  },
  placeNamesCity: {
    // color: 'white',
    fontSize: 16,
  },
  cityPart: {
    display: 'flex',
    flexDirection: 'row',
  },
  rating: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
    fontSize: 10,
    paddingRight: 5,
  },
  ratingText: {
    fontSize: 12,
    // color: 'white',
  },
  popularView: {
    marginTop: 40,
  },
  PopularText: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 18,
    // color: 'black',
  },
});
