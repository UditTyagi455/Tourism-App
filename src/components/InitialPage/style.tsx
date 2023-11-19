import { StyleSheet,Dimensions } from 'react-native'

export const style = StyleSheet.create({
      LoginButton: {
            paddingVertical: 8,
            paddingHorizontal: 20,
            backgroundColor: '#8CC0DE',
            marginHorizontal: 10,
            marginBottom: 10,
            borderRadius: 12,
            alignItems: "center"
      },
      SignupButton: {
            paddingVertical: 8,
            paddingHorizontal: 20,
            backgroundColor: '#fff',
            marginVertical: 10,
            marginHorizontal: 8,
            borderRadius: 12,
            alignItems: "center",
      },
      shadowProp: {
            shadowColor: '#171717',
            shadowOffset: {width: -2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
          },
      TextAlign: {
         display: "flex",
         alignItems: "center",
         marginVertical: 15
      },
      TextStyleLogin: {
            color: "#fff",
            fontSize: 18,
            alignItems: "center",
            justifyContent: "center"
      },
      TextStyleSignUp: {
            color: "#000",
            fontSize: 18,
            alignItems: "center",
            justifyContent: "center"
      },
      DiscoverText: {
            fontSize: 22,
            fontWeight: 'bold',
            color: "white"
      },
      backgroundImage: {
            // height: (Dimensions.get("window").height),
            opacity: 0.9

      },
      world_tour_icon01: {
            opacity: 1
            // height: 150,
            // width: 80
      },
      TourismText: {
            fontSize: 22,
            fontWeight: "bold",
            marginVertical: 8,
            color: "white"
      },
      UpperPart: {
            height: (Dimensions.get("window").height)*0.65,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
      },
      BelowPart: {
            height: (Dimensions.get("window").height)*0.5,
      //      backgroundColor: '#fff'
      }
})