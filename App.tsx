import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import { useFonts } from 'expo-font';


// import InformationScreen from './components/InformationScreen';
// import DoneScreen from './components/DoneScreen';
// import ErrorScreen from './components/ErrorScreen';
// import OutOfNoodlesScreen from './components/OutOfNoodlesScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    Mulish: require('./assets/fonts/Mulish-Regular.ttf'),
    MulishExtraBold: require('./assets/fonts/Mulish-ExtraBold.ttf'),
  });
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" >
        <Stack.Screen name="Welcome" component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Done" component={DoneScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SoldOut" component={OutOfNoodlesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Error" component={ErrorScreen} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
