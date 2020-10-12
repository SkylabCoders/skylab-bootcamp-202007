import { StyleSheet, Dimensions } from "react-native";

const darkTheme = true;

const stylesSpot = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme ? "#283047" : "#E0E0E0",
    flexDirection: "column",
    alignItems: "center",
  },
  View: {
    margin: 0,
  },
  mainHead: {
    flexDirection: "row",
  },
  mainContainer: {
    margin: 30,
  },
  mainContainerTitle: {
    marginTop: "5%",
  },
  mainContainerTitleText: {
    textAlign: "center",
    color: darkTheme ? "#68E3AA" : "#497870",
  },
  mainHeadRate: {
    flexDirection: "row",
  },
  mainPhoto: {
    height: Dimensions.get("window").height * 0.4,
    width: Dimensions.get("window").width,
  },
  rateLogo: {
    width: Dimensions.get("window").width * 0.1,
    height: Dimensions.get("window").height * 0.04,
    marginLeft: Dimensions.get("window").width * 0.02,
    resizeMode: "contain",
  },
  mainHeadLogo: {
    width: Dimensions.get("window").width * 0.1,
    height: Dimensions.get("window").height * 0.04,
    marginLeft: Dimensions.get("window").width * 0.2,
    resizeMode: "contain",
  },
  description: {
    margin: Dimensions.get("window").height * 0.02,
  },
  descriptionText: {
    textAlign: "justify",
    color: darkTheme ? "#E0E0E0" : "#283047",
  },
  mainMap: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.4,
  },
  mapMarker: {
    height: 30,
    width: 30,
    resizeMode: "contain",
  },
  suggestionList: {
    backgroundColor: darkTheme ? "#283047" : "#E0E0E0",
  },
  suggestionContainer: {
    margin: Dimensions.get("window").width * 0.01,
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").height * 0.1,
  },
  activityIndicator: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  replacePhoto: {
    color: darkTheme ? "#68E3AA" : "#497870",
  },
});

export default stylesSpot;
