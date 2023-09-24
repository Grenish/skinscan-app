import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { skinscanLogo } from "../assets";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={skinscanLogo} style={styles.imageSizer} />
      <Text style={styles.logoText}>A doctor for your skin</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logoText: {
    color: "#fff",
    fontSize: 20,
  },
  container:{
    display: "flex",
    alignItems: "center",
  }
});

export default WelcomeScreen;
