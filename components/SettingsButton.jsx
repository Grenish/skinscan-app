import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { settings } from "../assets";

const SettingsButton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity
        style={{ position: "absolute", bottom: 10, zIndex: 1 }}
        onPress={onPress}
      >
        <Image source={settings} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default SettingsButton;
