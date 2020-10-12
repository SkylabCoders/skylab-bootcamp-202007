import { StyleSheet, Dimensions } from "react-native";

const darkTheme = true;

const stylesSpotCarousel = StyleSheet.create({
  suggestionChild: {
    height: 200,
    width: 200,
    margin: "5%",
  },

  suggestionChildImage: {
    height: "60%",
    width: "100%",
  },
  suggestionContainer: {
    backgroundColor: darkTheme ? "#444E67" : "#FFFFFF",
    height: "100%",
    width: "100%",
    shadowOpacity: 0.5,
    borderRadius: 10,
  },
  suggestionChildMainText: {
    marginLeft: Dimensions.get("window").width * 0.01,
    fontSize: Dimensions.get("window").width * 0.03,
    fontWeight: "bold",
    color: darkTheme ? "#E0E0E0" : "#283047",
  },
  suggestionChildText: {
    marginLeft: Dimensions.get("window").width * 0.01,
    color: darkTheme ? "#E0E0E0" : "#283047",
    fontSize: Dimensions.get("window").width * 0.02,
  },
});

export default stylesSpotCarousel;
