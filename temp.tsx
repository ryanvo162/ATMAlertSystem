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
</Provider>;
