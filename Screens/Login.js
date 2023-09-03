import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useRef, useState } from "react";
import Modal from "react-native-modal";
import ModalComponent from "../Components/ModalComponent";
import PrimaryButton from "../Components/PrimaryButton";

const Login = ({ navigation }) => {
  const [inputValue, setInputValue] = useState("+9198564875");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const otpInputs = Array(4).fill(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [enteredOtp, setEnteredOtp] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const otpInputRefs = otpInputs.map(() => useRef(null));

  const handleOtpChange = (value, index) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otpInputs.length - 1) {
      otpInputRefs[index + 1].current.focus();
    }

    const updatedOtp = newOtp.join("");
    setEnteredOtp(updatedOtp);
  };

  const handleInputChange = (text) => {
    setInputValue(text);
  };

  const handleNextButtonPress = () => {
    // Replace '1234' with the actual correct OTP value
    const correctOtp = "1234";
    const correctNumber = "+9198564875";

    if (enteredOtp === correctOtp && inputValue === correctNumber) {
      // Validation successful, navigate to the desired screen
      setModalVisible(!isModalVisible);
    } else {
      // Validation failed, show an error message or take appropriate action
      alert("Invalid OTP. Please enter the correct OTP.");
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
      <ScrollView
      showsVerticalScrollIndicator={false} // Hide the vertical scroll indicator
      showsHorizontalScrollIndicator={false} // Hide the horizontal scroll indicator
      >
        <View style={styles.containerTop}>
          <Image
            source={require("../assets/Images/logo-two.png")}
            style={styles.logo}
          />

          <Text
            style={{
              fontSize: 20,
              width: "100%",
              textAlign: "center",
            }}
          >
            Login To Your Account
          </Text>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Phone"
              value={inputValue}
              onChangeText={handleInputChange}
            />

            <PrimaryButton
              ButtonPress={handleNextButtonPress}
              width="30%"
              title="Login"
              paddingVertical={8}
            />
          </View>

          <Text
            style={{
              fontSize: 20,
              width: "100%",
              textAlign: "center",
            }}
          >
            Enter 4 Digit OTP
          </Text>

          <View style={styles.otpContainer}>
            {otpInputs.map((_, index) => (
              <TextInput
                key={index}
                ref={otpInputRefs[index]}
                style={styles.inputOtp}
                maxLength={1}
                value={otp[index]}
                keyboardType="numeric"
                onChangeText={(text) => handleOtpChange(text, index)}
                onFocus={() => {
                  if (!otp[index]) {
                    otpInputRefs[index].current.clear();
                  }
                }}
              />
            ))}
          </View>
        </View>

        <View style={styles.battomContainer}>
          <PrimaryButton
            ButtonPress={handleNextButtonPress}
            width="100%"
            title="Next"
            paddingVertical={14}
          />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                marginRight: 6,
              }}
            >
              I Don't Have An Account
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterScreen")}
            >
              <Text
                style={{
                  fontSize: 16,
                  textDecorationLine: "underline",
                }}
              >
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          backdropColor="rgba(0, 0, 0, 1)"
          // coverScreen={false}
          isVisible={isModalVisible}
          onBackdropPress={toggleModal}
          onBackButtonPress={toggleModal}
        >
          <ModalComponent
            btnTitle="Next"
            title="Login Successfull"
            navigateAfterColse="RegisterScreen"
            navigator={navigation}
            closeModal={toggleModal}
          />
        </Modal>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  containerTop: {
    paddingVertical: 80,
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 40,
    // backgroundColor:"#000"
  },
  logo: {
    width: 100,
    height: 90,
    marginBottom: 14,
  },
  inputContainer: {
    width: "100%", // Set width to 100%
    // backgroundColor:"red",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginBottom: 20,
  },
  input: {
    width: "65%",
    borderWidth: 1,
    borderTopColor: "#fff",
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    borderBottomColor: "#EF2B7B",
    borderBottomLeftRadius: 14,
    borderTopRightRadius: 14,
    paddingLeft: 18,
    paddingVertical: 8,
    display: "flex",
    justifyContent: "center",
    fontSize: 18,
  },
  otpContainer: {
    // backgroundColor:"red",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputOtp: {
    width: 60,
    height: 60,
    color: "#373434",
    backgroundColor: "#FEF3F8",
    marginHorizontal: 8,
    borderRadius: 10,
    fontSize: 26,
    borderWidth: 2,
    borderTopColor: "#fff",
    borderLeftColor: "#fff",
    borderRightColor: "#fff",
    borderBottomColor: "#EF2B7B",
    textAlign: "center",
  },
  battomContainer: {
    backgroundColor: "#fff",
    width: "100%",
    gap: 30,
    paddingBottom: 20,
  },
});

export default Login;
