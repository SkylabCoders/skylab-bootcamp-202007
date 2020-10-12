import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.33,
  },
  body: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
  picker: {
    backgroundColor: "rgba(255,255,255,0.75)",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    height: 50,
    margin: Dimensions.get("window").width * 0.025,
    width: Dimensions.get("window").width * 0.66,
  },
  top_row_buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: Dimensions.get("window").width * 0.66,
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
  top_row_button: {
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 5,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    height: Dimensions.get("window").width * 0.12,
    justifyContent: "center",
    marginBottom: Dimensions.get("window").width * 0.025,
    marginTop: Dimensions.get("window").width * 0.025,
    width: Dimensions.get("window").width * 0.3,
  },
  button_text: {
    alignSelf: "center",
    fontSize: Dimensions.get("window").width * 0.04,
  },
});

export default styles;
