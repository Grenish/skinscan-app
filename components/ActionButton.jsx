import React from "react";


import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { camera, gallery } from "../assets";

const ActionButton = () => {
  return (
    <View>
      <View style={styles.marginTop}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            <Image source={camera} style={styles.logoFixer} />
            {""} Open Camera
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            <Image source={gallery} /> {""} Upload Image
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  });

export default ActionButton;
