import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from "react-native";
import React, { useContext, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import GlobalStateContext from "../Contexts/GlobalStateContext";

const walletData = [
  {
    id: 1,
    name: "Aryan More",
    amount: "$ 12,00,00",
  },
  {
    id: 2,
    name: "Bharati More",
    amount: "$ 12,00,00",
  },
  {
    id: 3,
    name: "Eknath More",
    amount: "$ 12,00,00",
  },
  {
    id: 4,
    name: "Eknath More",
    amount: "$ 12,00,00",
  },
  {
    id: 5,
    name: "Eknath More",
    amount: "$ 12,00,00",
  },
  {
    id: 6,
    name: "Eknath More",
    amount: "$ 12,00,00",
  },
  {
    id: 7,
    name: "Eknath More",
    amount: "$ 12,00,00",
  },
  {
    id: 8,
    name: "Eknath More",
    amount: "$ 12,00,00",
  },
];

const WalletScreen = () => {
  const { profileImage, userDetails } = useContext(GlobalStateContext);
  
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const renderItem = ({ item }) => (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "normal",
          color: "#373434",
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 600,
          padding: 6,
          color: "#373434",
        }}
      >
        {item.amount}
      </Text>
    </View>
  );
  return (
    <View style={style.container}>
      <StatusBar
      backgroundColor="#EF2B7B"
      barStyle="light-content"
      />
      <View
        style={{ paddingTop: 10, width: "100%" }}
      ></View>

      <View style={style.topContainer}>
        <Icon onPress={goBack} name="arrowleft" size={30} color="#fff" />

        <View style={style.imageContainer}>
          <Image source={{ uri: profileImage }} style={style.image} />

          <Text
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "#fff",
              padding: 14,
            }}
          >
            {userDetails.userName}
          </Text>
        </View>
        <Icon name="clockcircle" size={30} color="#fff" />
      </View>

      <View style={style.centerContainer}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "#fff",
          }}
        >
          Wallet Balance
        </Text>

        <Text
          style={{
            fontSize: 30,
            color: "#fff",
          }}
        >
          $1,20,000
        </Text>

        <TouchableOpacity style={style.button}>
          <Text
            style={{
              color: "#EF2B7B",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            Withdraw Request
          </Text>
        </TouchableOpacity>
      </View>

      <View style={style.bottomContainer}>
        <Text
          style={{
            backgroundColor: "#fff",
            color: "#373434",
            paddingVertical: 10,
            fontSize: 26,
            fontWeight: 600,
            borderWidth: 1,
            borderTopColor: "#fff",
            borderLeftColor: "#fff",
            borderRightColor: "#fff",
            borderBottomColor: "#EF2B7B",
          }}
        >
          Pending Payments
        </Text>
        <FlatList
          data={walletData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={style.scrollContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // paddingTop:30,
    flex: 1,
    backgroundColor: "#EF2B7B",
    alignItems: "center",
    // justifyContent: 'center',
  },
  topContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    // gap:8
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#fff",
  },
  centerContainer: {
    alignItems: "center",
    gap: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#ffffff",
    paddingHorizontal: 34,
    paddingVertical: 8,
    borderBottomLeftRadius: 14,
    borderTopRightRadius: 14,
    elevation: 6, // For Android
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.2, // For iOS
    shadowRadius: 4, // For iOS
  },
  butonTitle: {
    color: "#EF2B7B",
    fontSize: 20,
    fontWeight: 600,
  },
  bottomContainer: {
    position: "absolute",
    width: "100%",
    height: "68%",
    backgroundColor: "#fff",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 6, // For Android,
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.2, // For iOS
    shadowRadius: 4, // For iOS
    padding: 20,
  },
});
export default WalletScreen;
