import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

function ActionBar({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.actionbar}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require("../../../assets/png/menu-active_512.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require("../../../assets/png/map-active_512.png")}
            style={styles.icon}
            onPress={() => navigation.navigate("Home")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer}>
          <Image
            source={require("../../../assets/png/users-active_512.png")}
            style={styles.icon}
            onPress={() => navigation.navigate("Profile")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ActionBar;
