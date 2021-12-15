import React, { useEffect } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default function SplashScreen({ navigation }: { navigation: any }) {
  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(() =>
          setTimeout(() => {
            navigation.replace("Login");
          }, 2000)
        );
      } catch (e) {
        console.warn(e);
      }
    }

    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/logo.png")} />
      <Text style={styles.version}>Version 1.0.0.2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  version: {
    position: "absolute",
    fontSize: 14,
    bottom: 20,
    fontFamily: "Mulish",
    color: "#848f9d",
  },
});
