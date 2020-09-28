import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import FeedComponent from "../screens/FeedComponent";
import DetailComponent from "../screens/DetailComponent";
import NewAingura from "../screens/NewAingura";
import Camera from "../screens/Camera";

const Stack = createStackNavigator();

export default function AinguraStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="feed"
        component={FeedComponent}
        options={{ title: "Aingura Feed" }}
      />
      <Stack.Screen
        name="detail"
        component={DetailComponent}
        options={{ title: "Aingura: " }}
      />
      <Stack.Screen
        name="new"
        component={NewAingura}
        options={{ title: "Create new Aingura!" }}
      />
      <Stack.Screen name="camera" component={Camera} />
    </Stack.Navigator>
  );
}
