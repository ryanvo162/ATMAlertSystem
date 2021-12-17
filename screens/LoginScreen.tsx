import React, { useState } from "react";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../database/Authentication";

export default function LoginScreen({ navigation }: { navigation: any }) {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, getEmail, getPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigation.replace("Search");
        Alert.alert("Đăng nhập thành công");
        // ...
      })
      .catch((error) => {
        Alert.alert("Try Again");
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/images/logo.png")}
        />
        <View style={styles.language}>
          <Image
            style={styles.flag}
            source={require("../assets/images/vnm.png")}
          />
          <Text style={styles.languageText}>VNM</Text>
          <Image
            style={styles.down}
            source={require("../assets/images/down.png")}
          />
        </View>
      </View>

      <Text style={styles.loginText}>Đăng nhập</Text>

      <TextInput
        style={styles.input}
        placeholder="Email đăng nhập"
        placeholderTextColor="#a5b5c9"
        selectionColor="#595959"
        onChangeText={setEmail}
        value={getEmail}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#a5b5c9"
        onChangeText={setPassword}
        value={getPassword}
        placeholder="Mật khẩu"
        secureTextEntry={true}
        selectionColor="#595959"
      />

      <Text style={styles.forgotPassword}>Quên mật khẩu</Text>
      <Pressable
        style={styles.loginButton}
        onPress={() => /*signIn()*/ navigation.replace("Search")}
      >
        <Text style={styles.loginButtonText}>Đăng nhập</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#edf3fe",
  },

  header: {
    position: "relative",
    marginTop: 57,
    height: 64,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
  },

  logo: {
    position: "absolute",
    left: 26,
    resizeMode: "contain",
    width: 38,
    height: 38,
  },

  language: {
    position: "absolute",
    right: 33,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderColor: "#2190CD",
    borderRadius: 4,
    borderWidth: 1,
  },

  languageText: {
    color: "#1085C5",
    fontFamily: "Mulish",
    fontSize: 12,
  },

  flag: {
    resizeMode: "contain",
    marginRight: 4,
    width: 16,
    height: 16,
  },

  down: {
    resizeMode: "contain",
    // marginRight: 4,
    width: 16,
    height: 16,
  },

  loginText: {
    width: "100%",
    textAlign: "center",
    marginTop: 103,
    marginBottom: 63,
    fontFamily: "MulishExtraBold",
    fontSize: 24,
    color: "#374a61",
  },

  input: {
    fontFamily: "Mulish",
    fontSize: 16,
    width: "85%",
    marginBottom: 16,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    color: "#595959",
  },

  forgotPassword: {
    width: "100%",
    textAlign: "right",
    marginEnd: 75,
    marginBottom: 62,
    fontFamily: "MulishSemiBold",
    textDecorationLine: "underline",
    fontSize: 16,
    color: "#2190CD",
  },

  loginButton: {
    width: "85%",
    borderRadius: 8,
    backgroundColor: "#2190CD",
    alignItems: "center",
  },

  loginButtonText: {
    fontSize: 16,
    fontFamily: "MulishExtraBold",
    color: "white",
    padding: 12,
  },
});
