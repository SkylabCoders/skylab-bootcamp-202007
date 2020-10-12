import { StyleSheet, Dimensions } from "react-native";

const darkTheme = true;

const stylesMap = StyleSheet.create({
  mapContainer: {
    height: Dimensions.get("window").height * 0.75,
    width: Dimensions.get("window").width,
  },
  suggestionContainer: {
    padding: Dimensions.get("window").height * 0.02,
    height: Dimensions.get("window").height * 0.002,
    backgroundColor: darkTheme ? "#283047" : "#E0E0E0",
  },
  suggestionChild: {
    margin: Dimensions.get("window").width * 0.02,

    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").height * 0.1,
  },
  activityIndicator: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  mapIcon: {
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.1,
    resizeMode: "contain",
  },
  mapCallout: {
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.4,
  },
  mapCalloutImage: {
    height: "90%",
    width: "100%",
  },
  mapCalloutText: {
    textAlign: "center",
  },
});

export default stylesMap;
