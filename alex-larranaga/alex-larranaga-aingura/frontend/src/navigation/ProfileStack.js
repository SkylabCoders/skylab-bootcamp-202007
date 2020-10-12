import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileComponent from "../screens/ProfileComponent";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="feed"
        component={ProfileComponent}
        options={{ title: "Profile" }}
      />
    </Stack.Navigator>
  );
}
