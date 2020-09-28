import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableNativeFeedback,
  Dimensions,
  Image,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useFocusEffect } from "@react-navigation/native";
import * as Location from "expo-location";
import { loginUser } from "../actions/authActions";
import StatusBar from "react-native";
import authStore from "../stores/authStore";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getDevicesGeoLocation } from "../_helpers/utils";
import feedStore from "../stores/feedStore";

export default function LoginComponent({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [message, setMessage] = useState(undefined);

  function validateLogin(password, username) {
    if (username.length < 1) {
      setMessage("Please enter a Username");
    } else if (password.length < 1) {
      setMessage("A password is required");
    } else {
      const userParams = { username, password };
      loginUser(userParams);
    }
  }

  useFocusEffect(() => {
    authStore.addChangeListener(onChange);
    getDevicesGeoLocation(Location, setMessage).then((userGeoLoc) => {
      feedStore.setUserGeoLocation(userGeoLoc);
    });
    return () => authStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setMessage(authStore.getResponseMessag());
  }
  const image = require("../../assets/aingura-back.jpg");

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View
        style={{
          alignItems: "center",
          flex: 1,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <ImageBackground
          source={image}
          style={{ widht: "100%", height: "100%" }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
              alignItems: "center",
              margin: 100,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: Dimensions.get("window").width * 0.09,
                  color: "#FFFFFF",
                  marginLeft: 20,
                }}
              >
                Aingura
              </Text>
              <Image
                source={require("../../assets/icon.png")}
                style={{ width: 80, height: 80, marginTop: 40, marginLeft: 50 }}
              />
              <Text style={{ color: "#FFFFFF", marginTop: 30, fontSize: 20 }}>
                Reach the unknown
              </Text>
            </View>
            {message ? <Text>{message}</Text> : null}
            <View>
              <Text style={{ color: "#FFFFFF" }}>Username</Text>
              <TextInput
                style={{
                  backgroundColor: "#e0e0e0",
                  width: 300,
                  height: 50,
                  borderRadius: 20,
                  paddingLeft: Dimensions.get("window").width * 0.05,
                  fontSize: Dimensions.get("window").width * 0.03,
                }}
                onChangeText={(userName) => setUsername(userName)}
              ></TextInput>
              <Text style={{ color: "#FFFFFF" }}>Password</Text>
              <TextInput
                style={{
                  backgroundColor: "#e0e0e0",
                  width: 300,
                  height: 50,
                  borderRadius: 20,
                  paddingLeft: Dimensions.get("window").width * 0.05,
                  fontSize: Dimensions.get("window").width * 0.03,
                }}
                secureTextEntry={true}
                onChangeText={(password) => setpassword(password)}
              ></TextInput>
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple("#EEE")}
                onPress={() => validateLogin(password, username)}
              >
                <Text
                  style={{
                    backgroundColor: "#e0e0e0",
                    height: 20,
                    width: 80,
                    textAlign: "center",
                    marginTop: 20,
                    borderRadius: 10,
                    color: "#FFFFFF",
                  }}
                >
                  Login
                </Text>
              </TouchableNativeFeedback>
              <TouchableOpacity
                background={TouchableNativeFeedback.Ripple("#EEE")}
                onPress={() => navigation.navigate("signup")}
              >
                <Text
                  style={{
                    backgroundColor: "#e0e0e0",
                    height: 20,
                    width: 80,
                    textAlign: "center",
                    marginTop: 20,
                    borderRadius: 10,
                    color: "#FFFFFF",
                  }}
                >
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </KeyboardAwareScrollView>
  );
}
