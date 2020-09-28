import { StyleSheet, Dimensions } from "react-native";

const darkTheme = true;

const stylesSpotList = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 200,
    justifyContent: "space-around",
  },
  containerSpotList: {
    width: Dimensions.get("window").width,
    flexDirection: "column",
    padding: Dimensions.get("window").width * 0.1,
    paddingTop: Dimensions.get("window").width * 0.05,
    backgroundColor: darkTheme ? "#706D80" : "#FFFFFF",
  },
  activityIndicator: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default stylesSpotList;
