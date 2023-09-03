import React from "react";
import {
  View,
  Text,
  Platform,
  TouchableNativeFeedback,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const PrimaryButton = ({ width, title, ButtonPress, paddingVertical }) => {
  const TouchableComponent =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <TouchableComponent onPress={ButtonPress}>
      <View
        style={{
          overflow: "hidden",
          width: width,
          backgroundColor: "#EF2B7B",
          paddingVertical: paddingVertical,
          borderBottomLeftRadius: 14,
          borderTopRightRadius: 14,
          elevation: 2, // For Android
          shadowColor: "#000", // For iOS
          shadowOffset: { width: 0, height: 2 }, // For iOS
          shadowOpacity: 0.2, // For iOS
          shadowRadius: 4, // For iOS
        }}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableComponent>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default PrimaryButton;
