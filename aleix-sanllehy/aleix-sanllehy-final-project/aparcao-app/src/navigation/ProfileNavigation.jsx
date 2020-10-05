import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";

const Stack = createStackNavigator();

function ProfileNavigation() {
  return (
    <Stack.Navigator
      initialRoute="Profile"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default ProfileNavigation;
