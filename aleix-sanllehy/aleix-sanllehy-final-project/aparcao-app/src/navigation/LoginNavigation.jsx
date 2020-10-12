import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import AboutScreen from "../screens/AboutScreen/AboutScreen";

const Stack = createStackNavigator();

function LoginNavigation() {
  return (
    <Stack.Navigator
      initialRoute="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}

export default LoginNavigation;
