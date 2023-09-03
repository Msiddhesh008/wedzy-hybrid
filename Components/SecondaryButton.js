import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const SecondaryButton = ({ width, title, ButtonPress, paddingVertical }) => {
  const TouchableComponent =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <TouchableComponent onPress={ButtonPress}>
      <View
        style={{
          overflow: "hidden",
          width: width,
          backgroundColor: "#fff",
          paddingVertical: paddingVertical,
          borderBottomLeftRadius: 14,
          borderTopRightRadius: 14,
          elevation: 2, // For Android
          shadowColor: "#000", // For iOS
          shadowOffset: { width: 0, height: 2 }, // For iOS
          shadowOpacity: 0.2, // For iOS
          shadowRadius: 4, // For iOS
          borderWidth: 1,
          borderColor: "#EF2B7B",
        }}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableComponent>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  buttonText: {
    color: "#EF2B7B",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
});
