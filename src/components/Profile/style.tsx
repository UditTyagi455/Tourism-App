import {StyleSheet, Dimensions} from 'react-native';

export const style = StyleSheet.create({
    allFields: {
        marginVertical: 80
    },
    favoriteTour: {
        backgroundColor: "#e5e5e5",
        marginHorizontal: 10,
        // paddingVertical: 20,
        height: 70,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30
    },
    sidebar: {
        backgroundColor: "#8CC0DE",
        width: 20,
        height: "100%",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    favoriteText: {
        paddingLeft: 8,
        fontWeight: "500",
        fontSize: 18,
        color: "black"
    }
})