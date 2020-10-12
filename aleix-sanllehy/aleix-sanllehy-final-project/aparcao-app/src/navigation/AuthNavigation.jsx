import React from "react";
import { Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginNavigation from "../navigation/LoginNavigation";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";

const Tab = createBottomTabNavigator();

function AuthNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "rgb(255,66,66)",
          style: {
            height: Dimensions.get("window").height * 0.1,
          },
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen name="Login" component={LoginNavigation} />
        <Tab.Screen name="Sign up" component={SignUpScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "Login":
      iconName = "account";
      break;
    case "Sign up":
      iconName = "account-plus";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={40} color={color} />
  );
}

export default AuthNavigation;
