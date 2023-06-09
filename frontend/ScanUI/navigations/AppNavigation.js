import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import viewProfiles from "../components/Profile/ViewProfiles";
import Login from "../components/User/LogIn";
import SignUp from "../components/User/SignUp";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      {/* <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="My Profile" component={ViewProfile} />
      <Drawer.Screen name="View Others" component={viewProfiles} /> */}
    </Drawer.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        {/* <Stack.Screen name="Create" component={CreateProfile} /> */}
        {/* <Stack.Screen name="View" component={ViewProfile} /> */}
        <Stack.Screen name="View Others" component={viewProfiles} />
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
