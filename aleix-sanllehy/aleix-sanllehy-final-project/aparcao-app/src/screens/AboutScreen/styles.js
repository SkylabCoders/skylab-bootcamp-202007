import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: Dimensions.get("window").width,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.33,
  },
  body: {
    flex: 1,
    width: Dimensions.get("window").width * 0.8,
    justifyContent: "center",
  },
  paragraph: {
    marginTop: Dimensions.get("window").height * 0.01,
    marginBottom: Dimensions.get("window").height * 0.01,
    textAlign: "justify",
  },
  image_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skylab: {
    resizeMode: "center",
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.8,
  },
  image: {
    resizeMode: "center",
    height: Dimensions.get("window").height * 0.1,
    width: Dimensions.get("window").width * 0.1,
  },
  button_row: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    height: Dimensions.get("window").width * 0.12,
    justifyContent: "center",
    margin: Dimensions.get("window").width * 0.025,
    width: Dimensions.get("window").width * 0.33,
  },
  button_text: {
    alignSelf: "center",
    fontSize: Dimensions.get("window").width * 0.04,
  },
});

export default styles;
