import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
//Dimensions.get("window")
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.33,
  },
  body: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontSize: Dimensions.get("window").width * 0.04,
    fontWeight: "700",
    marginLeft: Dimensions.get("window").width * 0.2,
    width: Dimensions.get("window").width * 0.66,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.75)",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    fontWeight: "700",
    height: Dimensions.get("window").width * 0.12,
    paddingHorizontal: Dimensions.get("window").width * 0.02,
    width: Dimensions.get("window").width * 0.66,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    marginLeft: Dimensions.get("window").width * 0.02,
    width: Dimensions.get("window").width * 0.5,
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
