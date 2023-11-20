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
        width: "100%",
        height: 250
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
        fontSize: 20,
        fontWeight: '600',
        paddingBottom: 5,
        paddingLeft: 3,
      },
      placeNamesCity: {
        color: 'white',
        fontSize: 16,
      },
      cityPart: {
        display: 'flex',
        flexDirection: 'row',
      },
});