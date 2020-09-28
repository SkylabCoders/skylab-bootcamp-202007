import { StyleSheet, Dimensions } from "react-native";

const darkTheme = true;

const stylesLogin = StyleSheet.create({
  headerText: {
    textAlign: "center",
    margin: "auto",
    fontWeight: "bold",
    fontSize: Dimensions.get("window").width * 0.07,
    color: darkTheme ? "#68E3AA" : "#497870",
  },
  headerImage: {
    width: Dimensions.get("window").width * 0.6,
    height: "30%",
    resizeMode: "contain",
  },
  inputContainer: {
    backgroundColor: darkTheme ? "#283047" : "#E0E0E0",
    flex: 1,
    justifyContent: "space-evenly",
    padding: Dimensions.get("window").width * 0.2,
  },
  inputTextHeader: {
    fontSize: Dimensions.get("window").width * 0.04,
    fontWeight: "bold",
    color: darkTheme ? "#68E3AA" : "#497870",
  },
  errorMessage: {
    color: "#DD5755",
    fontSize: Dimensions.get("window").width * 0.04,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputText: {
    color: darkTheme ? "#68E3AA" : "#497870",
    margin: "5%",
    width: "100%",
    height: "10%",
    borderColor: darkTheme ? "#E0E0E0" : "#283047",
    borderWidth: 1,
    borderRadius: 10,
  },
  submitButtonContainer: {
    marginLeft: Dimensions.get("window").width * 0.15,
    borderRadius: 10,
    width: "50%",
    margin: "2%",
    backgroundColor: darkTheme ? "#706D80" : "#497870",
  },
  submitButton: {
    color: darkTheme ? "#68E3AA" : "#FFFFFF",
    fontWeight: "bold",

    textAlign: "center",
    paddingTop: Dimensions.get("window").width * 0.03,
    height: Dimensions.get("window").height * 0.05,
    borderColor: "transparent",
  },

  skipButton: {
    color: darkTheme ? "#706D80" : "#497870",
    textAlign: "center",
    paddingTop: Dimensions.get("window").width * 0.03,
  },
});

export default stylesLogin;
