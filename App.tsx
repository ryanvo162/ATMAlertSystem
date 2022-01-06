import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useFonts } from "expo-font";

import LoginScreen from "./screens/LoginScreen";
import SplashScreen from "./screens/SplashScreen";
import SearchScreen from "./screens/SearchScreen";
import HomeScreen from "./screens/HomeScreen";

import { Provider } from "react-redux";
import {store} from "./src/app/store";
import SettingScreen from "./screens/SettingScreen";
import EditScreen from "./screens/EditScreen";

import App1 from "./temp2";

const Stack = createNativeStackNavigator();

export default function App() {

  
  
  const [loaded] = useFonts({
    Mulish: require("./assets/fonts/Mulish-Regular.ttf"),
    MulishBold: require("./assets/fonts/Mulish-Bold.ttf"),
    MulishExtraBold: require("./assets/fonts/Mulish-ExtraBold.ttf"),
    MulishSemiBold: require("./assets/fonts/Mulish-SemiBold.ttf"),
  });
  if (!loaded) {
    return null;
  }

  
  return (
    <Provider store={store}>
      <App1></App1>
        
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
