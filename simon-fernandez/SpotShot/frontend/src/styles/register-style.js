import { StyleSheet, Dimensions } from "react-native";

const darkTheme = true;

const stylesLogin = StyleSheet.create({
  formulario: {
    width: Dimensions.get("window").width * 0.7,
    height: "80%",
  },
  inputContainer: {
    backgroundColor: darkTheme ? "#283047" : "#E0E0E0",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    justifyContent: "space-evenly",
    padding: Dimensions.get("window").width * 0.2,
  },
  headerText: {
    textAlign: "center",
    margin: "auto",
    fontWeight: "bold",
    fontSize: Dimensions.get("window").width * 0.07,
    color: darkTheme ? "#68E3AA" : "#497870",
  },
  headerImage: {
    width: "100%",
    height: "10%",
    resizeMode: "contain",
  },
  errorMessage: {
    color: "#DD5755",
    fontSize: Dimensions.get("window").width * 0.04,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputTextHeader: {
    fontSize: Dimensions.get("window").width * 0.04,
    fontWeight: "bold",
    color: darkTheme ? "#68E3AA" : "#497870",
  },
  inputText: {
    color: darkTheme ? "#68E3AA" : "#497870",
    margin: "5%",
    width: "100%",
    height: "8%",
    borderColor: darkTheme ? "#E0E0E0" : "#283047",
    borderWidth: 1,
    borderRadius: 10,
  },
  submitButtonContainer: {
    justifyContent: "center",
    marginLeft: Dimensions.get("window").width * 0.15,
    backgroundColor: darkTheme ? "#706D80" : "#FFFFFF",
    width: "60%",
    height: "8%",
    borderRadius: 10,
  },
  submitButton: {
    color: darkTheme ? "#68E3AA" : "#497870",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default stylesLogin;
