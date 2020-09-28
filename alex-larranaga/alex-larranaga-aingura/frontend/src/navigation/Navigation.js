import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AinguraStack from "./AinguraStack";
import MapStack from "./MapStack";
import ProfileStack from "./ProfileStack";
import { Icon } from "react-native-elements";

import NewAingura from "../screens/NewAingura";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="feed"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="Feed"
          component={AinguraStack}
          options={{ title: "Aingura Feed" }}
        />
        <Tab.Screen
          name="Map"
          component={MapStack}
          options={({ title: "Aingura Map" }, { unmountOnBlur: true })}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStack}
          options={{ title: "Profile" }}
        />
        <Tab.Screen
          name="New Aingura"
          component={NewAingura}
          options={({ title: "Create new aingura" }, { unmountOnBlur: true })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;

  switch (route.name) {
    case "Map":
      iconName = "compass-outline";
      break;
    case "Feed":
      iconName = "layers-triple-outline";
      break;
    case "Profile":
      iconName = "google-street-view";
      break;
    case "New Aingura":
      iconName = "knife";
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
}
