import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from "react-native";
import { skinscanLogo, camera, gallery, settings } from "./assets";
import { ActionButton, WelcomeScreen, SettingsButton } from "./components";

export default function App() {
  const [bottomCircleVisible, setBottomCircleVisible] = useState(true);
  const [animatedValue] = useState(new Animated.Value(0));

  const toggleBottomCircle = () => {
    setBottomCircleVisible(!bottomCircleVisible);
    Animated.timing(animatedValue, {
      toValue: bottomCircleVisible ? 1 : 0,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  };

  const animatedBottomCircleStyle = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 2.0],
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -150],
        }),
      },
    ],
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#6A7FDB" barStyle="light-content" />
      <WelcomeScreen />


     

      <ActionButton />

      <Animated.View style={[styles.bottomCircle, animatedBottomCircleStyle]} />
      <View style={styles.bottomCircle2}></View>
      <View style={styles.bottomCircle3}></View>

      
      <SettingsButton onPress={toggleBottomCircle} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6A7FDB",
  },
  imageSizer: {},
  logoText: {
    color: "#fff",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#d9d9d9",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    elevation: 3,
    marginBottom: 10,
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  marginTop: {
    marginTop: 70,
  },
  bottomCircle: {
    position: "absolute",
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#E08DAC",
    bottom: -150,
  },
  bottomCircle2: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#45CB85",
    bottom: -100,
    right: -50,
  },
  bottomCircle3: {
    position: "absolute",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#57E2E5",
    bottom: -100,
    left: -50,
  },
  logoFixer: {
    marginHorizontal: 10,
  },
  settingsButton: {
    position: "absolute",
    bottom: 10,
    zIndex: 1,
  },
  settingsIcon: {
    width: 30,
    height: 30,
  },
});
