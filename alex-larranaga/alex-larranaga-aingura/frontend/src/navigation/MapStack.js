import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MapComponent from "../screens/MapComponent";

const Stack = createStackNavigator();

export default function MapStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="feed"
        component={MapComponent}
        options={{ title: "Aingura Map" }}
      />
    </Stack.Navigator>
  );
}
