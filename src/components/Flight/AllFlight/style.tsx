import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    height: "100%"
  },
  flex: {
    display: 'flex',
    marginLeft: 15
  },
  favoriteTour: {
    backgroundColor: '#e5e5e5',
    marginHorizontal: 10,
    // paddingVertical: 20,
    height: 85,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    shadowOffset: {width: -2, height: 5},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  sidebar: {
    backgroundColor: '#8CC0DE',
    width: 20,
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  favoriteText: {
    paddingLeft: 8,
    fontWeight: '600',
    fontSize: 15,
    color: 'black',
    paddingRight: 18,
  },
  dateText: {
    fontWeight: '400'
  },
  ImageHeader: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 20,
  },
  WelcomeView: {
    paddingLeft: 10,
    justifyContent: 'center',
  },
  WelcomeText: {
    fontWeight: '600',
    fontSize: 18,
    color: 'black',
  },
  GoBack: {
    marginRight: 15,
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
  cardContainer: {
    marginTop: 25,
  },
  dot: {
   
    borderRadius: 50,
    // backgroundColor: 'green',
    // borderWidth: 1,
    position: 'absolute',
    right: 15,
    top: 15,
  },
  clickText: {paddingLeft: 7, paddingTop: 4},
  imageStyle: {
    width: 30,
    height: 30,
    marginHorizontal: 8,
    marginBottom: 20,
    borderRadius: 50
  }
});
