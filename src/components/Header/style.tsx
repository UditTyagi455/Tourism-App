import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    ImageHeader: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 20,
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
      NameContainer: {
        paddingLeft: 10,
        justifyContent: 'center',
      },
      NameText: {
        fontWeight: '600',
        fontSize: 18,
        color: 'black',
      },
});