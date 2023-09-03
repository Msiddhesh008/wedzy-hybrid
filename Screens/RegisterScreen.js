import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import GlobalStateContext from "../Contexts/GlobalStateContext";
import ModalComponent from "../Components/ModalComponent";
import Modal from "react-native-modal";
import PrimaryButton from "../Components/PrimaryButton";
import ProPic from "../Components/ProPic";

const RegisterScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const { setUserDetails } = useContext(GlobalStateContext);

  const handleSave = () => {
    setUserDetails({
      userName: userName,
      email: email,
      mobile: mobile,
    });
    setModalVisible(!isModalVisible);
    setUserName("");
    setEmail("");
    setMobile("");
  };

  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.profileContainer}>
              <View style={{ width: "100%" }}>
                <ProPic width={120} height={120} BR={150} />
                <EntypoIcon
                  onPress={() => navigation.navigate("ProfilePictureScreen")}
                  name="video-camera"
                  style={{
                    position: "absolute",
                    bottom: 8,
                    right: 0,
                    backgroundColor: "#EE3764",
                    padding: 6,
                    borderRadius: 16,
                  }}
                  size={16}
                  color="#fff"
                />
              </View>
              <Text
                style={{
                  fontSize: 18,
                  color: "#373434",
                  textAlign: "center",
                }}
              >
                Choose Photo
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "#707070",
                  textAlign: "center",
                }}
              >
                RB Studio Photography
              </Text>
            </View>

            <View style={{ width: "100%" }}>
              <View style={styles.inputContainer}>
                <FeatherIcon
                  name="user"
                  size={20}
                  color="#EE3764"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  value={userName}
                  onChangeText={(text) => setUserName(text)}
                  placeholder="Username"
                />
              </View>
              <View style={styles.inputContainer}>
                <FeatherIcon
                  name="mail"
                  size={20}
                  color="#EE3764"
                  style={styles.icon}
                />
                <TextInput
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  style={styles.input}
                  placeholder="Email"
                />
              </View>
              <View style={styles.inputContainer}>
                <FontAwesomeIcon
                  name="mobile-phone"
                  size={26}
                  color="#EE3764"
                  style={styles.icon}
                />
                <TextInput
                  maxLength={10}
                  value={mobile}
                  onChangeText={(text) => setMobile(text)}
                  style={styles.input}
                  placeholder="Mobile"
                />
              </View>
            </View>

            <View style={{ width: "100%" }}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#373434",
                  textAlign: "left",
                  marginBottom: 14,
                }}
              >
                Link Your Social Media Account
              </Text>
              <View style={styles.inputContainer}>
                <FeatherIcon
                  name="instagram"
                  size={20}
                  color="#EE3764"
                  style={styles.icon}
                />
                <TextInput style={styles.input} placeholder="Instagram Link" />
              </View>
              <View style={styles.inputContainer}>
                <FeatherIcon
                  name="facebook"
                  size={20}
                  color="#EE3764"
                  style={styles.icon}
                />
                <TextInput style={styles.input} placeholder="Facebook Link" />
              </View>
            </View>

            <View style={{ width: "100%" }}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#373434",
                  textAlign: "left",
                  marginBottom: 14,
                }}
              >
                Share App
              </Text>
              <View style={styles.card}>
                <View style={styles.cardLeft}>
                  <Text style={{ fontSize: 18, color: "#fff" }}>
                    Invite your fellow vendors to wedzy business.
                  </Text>
                  <TouchableOpacity style={styles.shareButton}>
                    <Text style={{ color: "#F05E90" }}>Share</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.cardRight}>
                  <Image
                    style={styles.cardRight}
                    source={require("../assets/Images/vector.png")}
                  />
                </View>
              </View>
            </View>

            <PrimaryButton
              ButtonPress={handleSave}
              width="100%"
              title="Save"
              paddingVertical={14}
            />

            <Modal
              isVisible={isModalVisible}
              onBackdropPress={() => setModalVisible(!isModalVisible)}
              onBackButtonPress={() => setModalVisible(!isModalVisible)}
            >
              <ModalComponent
                navigateAfterColse="drawer"
                btnTitle="Next"
                title="Registered Successfull"
                navigator={navigation}
                closeModal={() => setModalVisible(!isModalVisible)}
              />
            </Modal>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    marginTop: 4,
  },
  profileContainer: {
    alignItems: "center",
    gap: 6,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    borderColor: "#FFC1DD",
    borderBottomWidth: 2,
    borderRightWidth: 1,
    paddingHorizontal: 16,
    borderRadius: 4,
    backgroundColor: "#FEF3F8",
    gap: 12,
    padding: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  card: {
    padding: 14,
    backgroundColor: "#F05E90",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    borderRadius: 6,

    elevation: 2, // For Android
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.2, // For iOS
    shadowRadius: 4, // For iOS
  },
  cardLeft: {
    width: "60%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  cardRight: {
    // width:"40%"
  },
  shareButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 26,
    paddingVertical: 10,
    borderBottomLeftRadius: 14,
    borderTopRightRadius: 14,
    elevation: 2, // For Android
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.2, // For iOS
    shadowRadius: 4, // For iOS
  },
});
