import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../components/User/LogIn";
import SignUp from "../components/User/SignUp";
import CreateProfile from "../components/Profile/createProfile";
import ViewProfile from "../components/Profile/ViewProfile";
import viewProfiles from "../components/Profile/ViewProfiles";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return <Drawer.Navigator useLegacyImplementation></Drawer.Navigator>;
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Create" component={CreateProfile} /> */}
        {/* <Stack.Screen name="View" component={ViewProfile} /> */}
        {/* <Stack.Screen name="View Others" component={viewProfiles} /> */}
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
