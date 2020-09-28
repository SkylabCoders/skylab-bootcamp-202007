import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  Dimensions,
} from "react-native";

import { createNewUser } from "../actions/authActions";
import StatusBar from "react-native";
import authStore from "../stores/authStore";
const image = require("../../assets/background.jpg");

export default function SignUpComponent() {
  const [username, setUsername] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPasword] = useState("");
  const [message, setMessage] = useState(authStore.getResponseMessag());

  function startLoginProcess(password, confirmPassword) {
    if (password != confirmPassword) {
      return console.log("Passwords don't match!");
    }
    const userParams = { username, firstName, lastName, password };
    createNewUser(userParams);
  }
  useEffect(() => {
    authStore.addChangeListener(onChange);
    return () => authStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    console.log("CAMBIO EN SIGN UP");
    setMessage(authStore.getResponseMessag());
  }

  return (
    <View
      style={{
        alignItems: "center",
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          margin: 100,
        }}
      >
        {message ? <Text>{message}</Text> : null}
        <Text>Username</Text>
        <TextInput
          style={{
            backgroundColor: "#e0e0e0",
            width: 300,
            height: 50,
            borderRadius: 20,
            paddingLeft: Dimensions.get("window").width * 0.05,
            fontSize: Dimensions.get("window").width * 0.03,
            marginTop: 6,
            marginBottom: 6,
            borderColor: "black",
            borderWidth: 2,
          }}
          onChangeText={(userName) => setUsername(userName)}
        ></TextInput>
        <Text>First Name</Text>
        <TextInput
          style={{
            backgroundColor: "#e0e0e0",
            width: 300,
            height: 50,
            borderRadius: 20,
            paddingLeft: Dimensions.get("window").width * 0.05,
            fontSize: Dimensions.get("window").width * 0.03,
            marginTop: 6,
            marginBottom: 6,
            borderColor: "black",
            borderWidth: 2,
          }}
          onChangeText={(firstName) => setfirstName(firstName)}
        ></TextInput>
        <Text>Last Name</Text>
        <TextInput
          style={{
            backgroundColor: "#e0e0e0",
            width: 300,
            height: 50,
            borderRadius: 20,
            paddingLeft: Dimensions.get("window").width * 0.05,
            fontSize: Dimensions.get("window").width * 0.03,
            marginTop: 6,
            marginBottom: 6,
            borderColor: "black",
            borderWidth: 2,
          }}
          onChangeText={(lastName) => setlastName(lastName)}
        ></TextInput>
        <Text>Password</Text>
        <TextInput
          style={{
            backgroundColor: "#e0e0e0",
            width: 300,
            height: 50,
            borderRadius: 20,
            paddingLeft: Dimensions.get("window").width * 0.05,
            fontSize: Dimensions.get("window").width * 0.03,
            marginTop: 6,
            marginBottom: 6,
            borderColor: "black",
            borderWidth: 2,
          }}
          secureTextEntry={true}
          onChangeText={(password) => setpassword(password)}
        ></TextInput>
        <Text>Confirm password</Text>
        <TextInput
          style={{
            backgroundColor: "#e0e0e0",
            width: 300,
            height: 50,
            borderRadius: 20,
            paddingLeft: Dimensions.get("window").width * 0.05,
            fontSize: Dimensions.get("window").width * 0.03,
            marginTop: 6,
            marginBottom: 6,
            borderColor: "black",
            borderWidth: 2,
          }}
          secureTextEntry={true}
          onChangeText={(confirmPassword) => setConfirmPasword(confirmPassword)}
        ></TextInput>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple("#EEE")}
          onPress={() => startLoginProcess(password, confirmPassword)}
        >
          <Text
            style={{
              fontSize: Dimensions.get("window").width * 0.05,
              color: "#0A1172",
            }}
          >
            Sign up
          </Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

/* const styles = StyleSheet.create({
  image,
  container,
  label,
  input,
  button,
  button_text,
});
 */
