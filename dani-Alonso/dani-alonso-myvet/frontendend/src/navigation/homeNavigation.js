import React from "react";

import Home from "../../src/Components/map/Map";
import Detail from "../../src/Components/detail/Detail";
import Question from "../../src/Components/question/Question";
import QuestionVet from "../../src/Components/question/QuestionVet";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function HomeNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="QuestionVet" component={QuestionVet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeNavigation;
