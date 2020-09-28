import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Spot from "../components/Spot";
import Profile from "../components/Profile";
import AddPhoto from "../components/AddPhoto";

export default function ProfileNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Profile"
    >
      <Stack.Screen name="Profile">
        {(props) => <Profile {...props} />}
      </Stack.Screen>

      <Stack.Screen name="Spot" component={Spot} />
      <Stack.Screen name="AddPhoto" component={AddPhoto} />
    </Stack.Navigator>
  );
}
