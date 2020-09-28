import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginComponent from "../screens/LoginComponent";
import SignUpComponent from "../screens/SignUpComponent";

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" component={LoginComponent} />
        <Stack.Screen name="signup" component={SignUpComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
