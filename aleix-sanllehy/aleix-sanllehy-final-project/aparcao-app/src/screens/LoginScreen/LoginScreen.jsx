import React, { useState } from "react";
import { Icon } from "react-native-elements";
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { loginService } from "../../services/loginService";
import styles from "./styles";

const image = require("../../../assets/backgrounds/chaos.jpg");

function LoginScreen({ navigation }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.background} />

        <View style={styles.body}>
          <Text style={styles.label}>User or email</Text>

          <View style={styles.input}>
            <Icon
              type="material-community"
              name="account"
              size={33}
              color="#646464"
            />
            <TextInput
              style={styles.text}
              onChangeText={(name) => setName(name)}
            ></TextInput>
          </View>

          <Text style={styles.label}>Password</Text>

          <View style={styles.input}>
            <Icon
              type="material-community"
              name="lock"
              size={33}
              color="#646464"
            />
            <TextInput
              style={styles.text}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            ></TextInput>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              loginService(name, password);
            }}
          >
            <Text style={styles.button_text}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("About")}>
            <Text style={styles.button_text}>About</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default LoginScreen;
