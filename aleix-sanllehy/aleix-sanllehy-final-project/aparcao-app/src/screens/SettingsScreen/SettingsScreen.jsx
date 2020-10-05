import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { toast } from "../../_helpers/toast";
import { changePasswordService } from "../../services/changePasswordService";
import authStore from "../../stores/authStore";
import styles from "./styles";

const image = require("../../../assets/backgrounds/jdm.jpg");

function SettingsScreen({ navigation }) {
  const [user, setUser] = useState(authStore.getUser());
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [_newPassword, set_newPassword] = useState("");

  const [message, setMessage] = useState(undefined);
  useEffect(() => {
    authStore.addChangeListener(onMessageChange);
    setMessage(undefined);
    return () => {
      authStore.removeChangeListener(onMessageChange);
    };
  }, [message]);
  function onMessageChange() {
    setMessage(authStore.getMessage());
  }

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.background} />
        <View style={styles.body}>
          {message ? toast(message) : null}

          <Text>{user.name} profile</Text>

          <Text>Change your password</Text>

          <Text style={styles.label}>Old password</Text>
          <TextInput
            onChangeText={(password) => setPassword(password)}
            secureTextEntry={true}
            style={styles.input}
          ></TextInput>

          <Text style={styles.label}>New password</Text>
          <TextInput
            onChangeText={(newPassword) => setNewPassword(newPassword)}
            secureTextEntry={true}
            style={styles.input}
          ></TextInput>

          <Text style={styles.label}>Confirm new password</Text>
          <TextInput
            onChangeText={(_newPassword) => set_newPassword(_newPassword)}
            secureTextEntry={true}
            style={styles.input}
          ></TextInput>

          <TouchableOpacity
            onPress={() => {
              changePasswordService(user, password, newPassword, _newPassword);
            }}
            style={styles.button}
          >
            <Text style={styles.button_text}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default SettingsScreen;
