import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";

export default function WelcomeScreen({ navigation }) {
  const handleLogin = () => navigation.navigate("Login");
  const handleRegister = () => navigation.navigate("RegisterScreen");

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Images/logo.png")}
        style={styles.logo}
      />

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 35,
          color: "#373434",
        }}
      >
        Wedzy Business
      </Text>

      <Text
        style={{
          fontWeight: "normal",
          fontSize: 26,
          textAlign: "center",
          color: "#373434",
        }}
      >
        The one-stop shop for all your bussiness needs
      </Text>

      <SecondaryButton
        ButtonPress={handleLogin}
        width="100%"
        title="Login"
        paddingVertical={12}
      />
      <PrimaryButton
        ButtonPress={handleRegister}
        width="100%"
        title="Create Account"
        paddingVertical={12}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    gap: 26,
  },
  logo: {
    width: 140,
    height: 76,
    marginBottom: 14,
  },
});
