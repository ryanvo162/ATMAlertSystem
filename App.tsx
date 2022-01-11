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
import { store } from "./src/app/store";
import SettingScreen from "./screens/SettingScreen";
import EditScreen from "./screens/EditScreen";

// import App1 from "./temp2";

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
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen
            name="Welcome"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{
              title: "Tra cứu thiết bị",
              headerTitleAlign: "center",
              headerTitleStyle: {
                color: "#3a4c61",
                fontSize: 16,
                fontFamily: "MulishExtraBold",
              },
              headerStyle: {
                backgroundColor: "white",
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: Platform.OS === "ios" ? "" : "Tra cứu thiết bị",
              headerBackTitle: "Tra cứu thiết bị",
              headerBackTitleStyle: {
                fontSize: 16,
                fontFamily: "MulishExtraBold",
              },
              headerTitleStyle: {
                color: "#3a4c61",
                fontSize: 16,
                fontFamily: "MulishExtraBold",
              },
              headerStyle: {
                backgroundColor: "white",
              },
              headerTintColor: "#3a4c61",
            }}
          />
          <Stack.Screen
            name="Setting"
            component={SettingScreen}
            options={{
              title: Platform.OS === "ios" ? "" : "Thông tin thiết bị",
              headerBackTitle: "Thông tin thiết bị",
              headerBackTitleStyle: {
                fontSize: 16,
                fontFamily: "MulishExtraBold",
              },
              headerTitleStyle: {
                color: "#3a4c61",
                fontSize: 16,
                fontFamily: "MulishExtraBold",
              },
              headerStyle: {
                backgroundColor: "white",
              },
              headerTintColor: "#3a4c61",
            }}
          />
          <Stack.Screen
            name="Edit"
            component={EditScreen}
            options={{
              title: Platform.OS === "ios" ? "" : "Cài đặt",
              headerBackTitle: "Cài đặt",
              headerBackTitleStyle: {
                fontSize: 16,
                fontFamily: "MulishExtraBold",
              },
              headerTitleStyle: {
                color: "#3a4c61",
                fontSize: 16,
                fontFamily: "MulishExtraBold",
              },
              headerStyle: {
                backgroundColor: "white",
              },
              headerTintColor: "#3a4c61",
            }}
          />
        </Stack.Navigator>
        <StatusBar hidden style="auto" />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
