import * as React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";

import signUp from "./components/User/SignUp";
import logIn from "./components/User/LogIn";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signUp" component={signUp} options={{ headerShown: false }}/>
        <Stack.Screen name="logIn" component={logIn} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
