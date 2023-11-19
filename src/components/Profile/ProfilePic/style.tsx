import {StyleSheet, Dimensions} from 'react-native';

export const style = StyleSheet.create({
    upperProfilePart: {
        backgroundColor: "#f25c54",
        height: 300,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
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
      profilePart: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      NameField: {
        marginTop: 15,
        color: "black",
        fontSize: 20
      },
      EmailField: {
        color: "black",
        fontSize: 15,
        marginTop: 10
      }
})