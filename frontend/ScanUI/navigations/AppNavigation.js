import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Payment from "../components/Profile/Payment";
import viewProfiles from "../components/Profile/ViewProfiles";
import ViewProfile from "../components/Profile/ViewProfile";
import Home from "../components/Profile/Home";
import Login from "../components/User/LogIn";
import SignUp from "../components/User/SignUp";
import CreateProfile from "../components/Profile/createProfile";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="My Profile" component={ViewProfile} />
      <Drawer.Screen name="View Others" component={viewProfiles} />
    </Drawer.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Create Profile" component={CreateProfile} /> */}

        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Payment" component={Payment} />
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
