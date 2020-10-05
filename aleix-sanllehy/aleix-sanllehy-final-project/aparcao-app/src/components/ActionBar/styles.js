import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    zIndex: 2,
  },
  actionbar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  iconContainer: {
    flex: 1,
    padding: 0,
  },

  icon: {
    flex: 1,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

export default styles;
