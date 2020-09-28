import { StyleSheet, Dimensions } from "react-native";

const darkTheme = true;

const stylesSpotListItem = StyleSheet.create({
  containerSpotItem: {
    height: Dimensions.get("window").height * 0.3,
    width: Dimensions.get("window").width * 0.8,
    flexDirection: "column",
    shadowOpacity: 0.5,
    borderRadius: 50 / 2,
    marginBottom: Dimensions.get("window").width * 0.1,
    backgroundColor: darkTheme ? "#706D80" : "#FFFFFF",
  },

  containerSpotItemImage: {
    height: "70%",
    width: "100%",
  },
  containerSpotItemTab: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: "30%",
    padding: "5%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: darkTheme ? "#283047" : "#E0E0E0",
  },
  containerSpotItemTabContainer: {
    height: "100%",
    width: "70%",
  },
  containerSpotItemTabContainerType: {
    color: darkTheme ? "#68E3AA" : "#5AD3A0",
  },
  containerSpotItemTabContainerTitle: {
    textAlign: "justify",
    fontSize: Dimensions.get("window").width * 0.06,
    height: "80%",
    width: "100%",
    color: darkTheme ? "#68E3AA" : "#497870",
  },
  containerSpotItemTabRating: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: darkTheme ? "#68E3AA" : "#497870",
    backgroundColor: darkTheme ? "#283047" : "#E0E0E0",
    justifyContent: "center",
  },
  containerSpotItemTabRatingText: {
    fontSize: 20,
    textAlign: "center",
    color: darkTheme ? "#68E3AA" : "#497870",
  },

  rateLogo: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});

export default stylesSpotListItem;
