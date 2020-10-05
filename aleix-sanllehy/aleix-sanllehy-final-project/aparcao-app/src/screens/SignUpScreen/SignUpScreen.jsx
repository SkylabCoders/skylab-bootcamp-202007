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
import { signUpService } from "../../services/signUpService";
import styles from "./styles";

const image = require("../../../assets/backgrounds/chaos.jpg");

function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [_password, set_password] = useState("");

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
    >
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.background} />

        <View style={styles.body}>
          <Text style={styles.label}>Name</Text>

          <View style={styles.input}>
            <Icon
              type="material-community"
              name="account-plus"
              size={33}
              color="#646464"
            />
            <TextInput
              style={styles.text}
              onChangeText={(name) => setName(name)}
            ></TextInput>
          </View>

          <Text style={styles.label}>E-mail</Text>

          <View style={styles.input}>
            <Icon
              type="material-community"
              name="at"
              size={33}
              color="#646464"
            />
            <TextInput
              style={styles.text}
              onChangeText={(email) => setEmail(email)}
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
              secureTextEntry={true}
              style={styles.text}
              onChangeText={(password) => setPassword(password)}
            ></TextInput>
          </View>

          <Text style={styles.label}>Confirm password</Text>

          <View style={styles.input}>
            <Icon
              type="material-community"
              name="lock"
              size={33}
              color="#646464"
            />
            <TextInput
              secureTextEntry={true}
              style={styles.text}
              onChangeText={(_password) => set_password(_password)}
            ></TextInput>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() => signUpService(name, email, password, _password)}
          >
            <Text style={styles.button_text}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

export default SignUpScreen;
