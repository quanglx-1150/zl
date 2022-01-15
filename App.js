"use strict";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen.js";
import SignUpScreen from "./screens/SignUpScreen.js";
import HomeScreen from "./screens/HomeScreen.js";
import MessageScreen from "./screens/MessageScreen.js";
import PhoneScreen from "./screens/PhoneScreen.js";
import DiaryScreen from "./screens/DiaryScreen.js";
import MainScreen from "./screens/MainScreen.js";
import PostDiaryScreen from "./screens/PostDiaryScreen.js";
import CommentScreen from "./screens/CommentScreen.js";
import ChatScreen from "./screens/ChatScreen.js";

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
        <Stack.Screen name="PostDiaryScreen" component={PostDiaryScreen} />
        <Stack.Screen name="DiaryScreen" component={DiaryScreen} />
        <Stack.Screen name="CommentScreen" component={CommentScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;