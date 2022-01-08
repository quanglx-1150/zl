"use strict";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen.js";
import SignUpScreen from "./screens/SignUpScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import MessageScreen from "./screens/MessageScreen.js";
import PhoneScreen from "./screens/PhoneScreen.js";
import MainScreen from "./screens/MainScreen.js";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen name="PhoneScreen" component={PhoneScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;