import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts } from 'expo-font';

import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import SearchScreen from './screens/SearchScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    Mulish: require('./assets/fonts/Mulish-Regular.ttf'),
    MulishBold: require('./assets/fonts/Mulish-Bold.ttf'),
    MulishExtraBold: require('./assets/fonts/Mulish-ExtraBold.ttf'),
    MulishSemiBold: require('./assets/fonts/Mulish-SemiBold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" >
        <Stack.Screen name="Welcome" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={SearchScreen}
          options={{
            title: 'Tra cứu thiết bị',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#3a4c61',
              fontSize: 16,
              fontFamily: 'MulishExtraBold',
            },
            headerStyle: {
              backgroundColor: 'white',
            },
          }} />
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            title: 'Tra cứu thiết bị',
            headerTitleStyle: {
              color: '#3a4c61',
              fontSize: 16,
              fontFamily: 'MulishExtraBold',
            },
            headerStyle: {
              backgroundColor: 'white',
            },
          }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
