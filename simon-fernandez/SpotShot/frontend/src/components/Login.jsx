/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  TextInput,
  KeyboardAvoidingView,
  Text,
  Image,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import stylesLogin from "../styles/login-style";
import { logInUser, signAsInvitate } from "../actions/authActions";
import authStore from "../stores/authStore";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function storageUser(usernameSpot, passwordSpot) {
    // eslint-disable-next-line no-useless-catch
    try {
      await AsyncStorage.setItem(
        "user",
        JSON.stringify({ usernameSpot, passwordSpot })
      );
    } catch (error) {
      throw error;
    }
  }

  async function getUser() {
    // eslint-disable-next-line no-useless-catch
    try {
      let user = await AsyncStorage.getItem("user");
      user = JSON.parse(user);
      if (user !== "") {
        user && logInUser(user.usernameSpot, user.passwordSpot);
      }
    } catch (error) {
      throw error;
    }
  }

  function checkMessage() {
    storageUser(username, password);
    logInUser(username, password);
  }
  function enterAsInvitate() {
    signAsInvitate();
  }
  function onChange() {
    setMessage(authStore.getMessage());
  }
  useEffect(() => {
    authStore.addChangeListener(onChange);
    getUser();
    return () => authStore.removeChangeListener(onChange);
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" style={stylesLogin.inputContainer}>
      <Text style={stylesLogin.headerText}>LOGIN</Text>
      <Image
        // eslint-disable-next-line global-require
        source={require("../Images/SpotShotLogo.png")}
        style={stylesLogin.headerImage}
      />
      <View>
        <Text style={stylesLogin.errorMessage}>{message && message}</Text>
        <Text style={stylesLogin.inputTextHeader}>username</Text>
        <TextInput
          multiline={false}
          autoFocus
          style={stylesLogin.inputText}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />
        <Text style={stylesLogin.inputTextHeader}>password</Text>

        <TextInput
          multiline={false}
          secureTextEntry
          style={stylesLogin.inputText}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          style={stylesLogin.submitButtonContainer}
          onPress={() => checkMessage()}
        >
          <Text style={stylesLogin.submitButton}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={stylesLogin.submitButtonContainer}
          // eslint-disable-next-line react/prop-types
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={stylesLogin.submitButton}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => enterAsInvitate()}>
          <Text style={stylesLogin.skipButton}>skip this step</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
