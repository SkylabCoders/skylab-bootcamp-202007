import React, { useState, useEffect } from "react";
import { Dimensions, Image } from "react-native";
import { Icon } from "react-native-elements";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import ProfileNavigation from "../navigation/ProfileNavigation";
import authStore from "../stores/authStore";

const Tab = createBottomTabNavigator();

function LandingNavigation() {
  const [user, setUser] = useState(authStore.getUser());

  useEffect(() => {
    authStore.addChangeListener(onChange);
    return () => authStore.removeChangeListener(onChange);
  }, [user]);

  function onChange() {
    setUser(authStore.getUser());
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={user.carLength !== 9999 ? "Home" : "Profile"}
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "Home":
      iconName = "map";
      break;
    case "Profile":
      iconName = "account-box";
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={40} color={color} />
  );
}

export default LandingNavigation;
