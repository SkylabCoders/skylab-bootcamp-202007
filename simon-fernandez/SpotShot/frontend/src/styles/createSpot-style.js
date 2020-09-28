import { StyleSheet, Dimensions } from "react-native";

const darkTheme = true;

const stylesCreateSpot = StyleSheet.create({
  container: {
    backgroundColor: darkTheme ? "#706D80" : "#FFFFFF",
    paddingTop: 30,
  },
  titleInput: {
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.4,
    backgroundColor: "#E0E0E0",
    color: "#283047",
    borderRadius: 20,
    padding: 10,
  },
  locationInfoInput: {
    height: Dimensions.get("window").height * 0.1,
    width: "90%",
    backgroundColor: "#E0E0E0",
    color: "#283047",
    margin: "5%",
    borderRadius: 20,
  },
  descriptionInput: {
    height: Dimensions.get("window").height * 0.3,
    width: "90%",
    backgroundColor: "#E0E0E0",
    margin: "5%",
    color: "#283047",
    borderRadius: 20,
    padding: 10,
  },
  selectedPhoto: {
    height: Dimensions.get("window").height * 0.4,
    width: Dimensions.get("window").width,
    backgroundColor: darkTheme ? "#283047" : "#E0E0E0",
  },
  stylePicker: {
    height: "100%",
    width: "40%",
    justifyContent: "flex-end",
  },
  cameraButtonContainer: {
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.4,
    backgroundColor: darkTheme ? "#FFFFFF" : "#706D80",
    borderWidth: 2,
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 15,
    margin: 10,
  },
  generalIcon: {
    height: "50%",
    width: "70%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: Dimensions.get("window").height * 0.15,
    width: Dimensions.get("window").width,
    backgroundColor: darkTheme ? "#706D80" : "#FFFFFF",
  },
  submitButton: {
    textAlign: "center",
    color: darkTheme ? "#68E3AA" : "#497870",
    fontWeight: "bold",
  },
  mapContainer: {
    height: Dimensions.get("window").height * 0.3,
    width: "90%",
    margin: "5%",
  },
  mapContainerIcon: {
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.1,
    resizeMode: "contain",
  },
  submitButtonContainer: {
    margin: "5%",
    flexDirection: "column",
    justifyContent: "center",
    height: Dimensions.get("window").height * 0.05,
    marginTop: Dimensions.get("window").height * 0.05,
    marginBottom: Dimensions.get("window").height * 0.05,
    borderRadius: 50 / 2,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: darkTheme ? "#68E3AA" : "#497870",
    backgroundColor: darkTheme ? "#283047" : "#E0E0E0",
  },
  uploadImageContainer: {
    backgroundColor: darkTheme ? "#706D80" : "#FFFFFF",
    height: "50%",
    flexDirection: "column",
    justifyContent: "center",
  },
  uploadImageButtonContainer: {
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.4,
    backgroundColor: darkTheme ? "#FFFFFF" : "#706D80",
    borderWidth: 2,
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 15,
    margin: Dimensions.get("window").width * 0.3,
  },
});

export default stylesCreateSpot;
