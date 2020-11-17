import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

const image_bg = require("../assets/background.jpg");
const logo = require("../assets/logo-red.png");

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={image_bg}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo} />
        <Text style={styles.tagline}>Sell What You Dont't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
        <View style={styles.registerButton}></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
