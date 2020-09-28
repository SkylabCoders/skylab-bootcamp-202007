import { StyleSheet, Dimensions } from "react-native";

const darkTheme = true;

const stylesProfile = StyleSheet.create({
  profileContainer: {
    flex: 1,
    backgroundColor: darkTheme ? "#283047" : "#E0E0E0",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "contain",
    flexDirection: "column",
    padding: Dimensions.get("window").width * 0.05,
    paddingTop: Dimensions.get("window").width * 0.2,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: Dimensions.get("window").width * 0.05,
  },
  darkSwitchBackground: {
    backgroundColor: "black",
  },
  logOutButtonContainer: {
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").height * 0.05,
    borderRadius: 10,
    backgroundColor: darkTheme ? "#283047" : "#E0E0E0",
  },
  logOutButton: {
    margin: Dimensions.get("window").height * 0.015,
    color: darkTheme ? "#68E3AA" : "#497870",
    textAlign: "center",
  },
  titleCreatedSpot: {
    color: darkTheme ? "#68E3AA" : "#497870",
    fontSize: Dimensions.get("window").width * 0.07,
    fontWeight: "bold",
    textAlign: "center",
    margin: Dimensions.get("window").width * 0.02,
  },
  deleteButton: {
    backgroundColor: "#DD5755",
    width: Dimensions.get("window").width * 0.17,
    margin: Dimensions.get("window").height * 0.01,
    borderRadius: 50,
  },
  deleteButtonText: {
    textAlign: "center",
    color: "#FFFFFF",
  },
  userName: {
    fontSize: Dimensions.get("window").width * 0.17,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});

export default stylesProfile;
