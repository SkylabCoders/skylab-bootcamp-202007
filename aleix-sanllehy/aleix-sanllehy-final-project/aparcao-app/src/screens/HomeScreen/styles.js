import { Dimensions, StyleSheet, StatusBar, Platform } from "react-native";

const styles = StyleSheet.create({
  loading: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    alignItems: "flex-end",
    flex: 1,
    justifyContent: "flex-end",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  tools: {
    opacity: 0.66,
    alignItems: "center",
    flexDirection: "column",
    height: Dimensions.get("window").height * 0.4,
    justifyContent: "center",
    marginBottom: Dimensions.get("window").height * 0.1,
    marginRight: Dimensions.get("window").width * 0.03,
    width: Dimensions.get("window").width * 0.2,
    zIndex: 1,
  },
  toolsIcon: {
    height: "30%",
    margin: Dimensions.get("window").height * 0.01,
    width: "100%",
  },
  toolsImg: {
    flex: 1,
    resizeMode: "center",
    width: "100%",
  },
});

export default styles;
