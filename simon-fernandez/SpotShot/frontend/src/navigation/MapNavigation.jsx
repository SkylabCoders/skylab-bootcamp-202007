import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Spot from "../components/Spot";
import Map from "../components/Map";

export default function MapNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Map"
    >
      <Stack.Screen name="Map">{(props) => <Map {...props} />}</Stack.Screen>

      <Stack.Screen name="Spot" component={Spot} />
    </Stack.Navigator>
  );
}
