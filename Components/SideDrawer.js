import React, { useContext, useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View, Dimensions } from "react-native";
import ProPic from "./ProPic";
import GlobalStateContext from "../Contexts/GlobalStateContext";
import ServiceHamIcons from "./ServiceHamIcons";
import { DrawerActions } from "@react-navigation/native";

const SideDrawer = ({ navigation }) => {
  const { userDetails } = React.useContext(GlobalStateContext);

  const { height } = Dimensions.get('window') 
  const logout = () => {
    navigation.dispatch(DrawerActions.closeDrawer());
    navigation.navigate("Login");
  };

  // console.log(props);
  return (
    // <DrawerContentScrollView {...props}>
    <View style={styles.container}>
    <Image 
    style={{
      position:"absolute",
      right:0,
      top:height/2 -60,
      zIndex:1
    }}
    source={require('../assets/Images/slideIcon.png')} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 18,
        }}
      >
        <ProPic width={70} height={70} BR={80} />
        <View>
          <Text
            style={{
              fontSize: 20,
            }}
          >
            {userDetails.userName}
          </Text>
          <Text
            style={{
              fontSize: 16,
            }}
          >
            {userDetails.mobile}
          </Text>
        </View>
      </View>

      <Pressable onPress={() => navigation.navigate("PolicyStandards")}>
        <ServiceHamIcons
          title="Policy Standards"
          name="document-text-outline"
        />
      </Pressable>

      <ServiceHamIcons title="Calendar" name="calendar-outline" />
      <Pressable onPress={() => navigation.navigate("Blogs")}>
        <ServiceHamIcons title="Blogs" name="document-outline" />
      </Pressable>

      <ServiceHamIcons title="Settings" name="cog-outline" />
      <ServiceHamIcons title="Reviews" name="star-outline" />
      <ServiceHamIcons title="My Employees" name="people-outline" />

      <Pressable onPress={logout}>
        <ServiceHamIcons
          title="Log Out"
          name="log-out-outline"
          textColor="#EE3764"
        />
      </Pressable>
    </View>
    // </DrawerContentScrollView>
  );
};

export default SideDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 150,
    backgroundColor: "#fff",
    // borderBottomRightRadius: 16,
    // borderTopRightRadius: 16,
    borderRightWidth: 6,
    borderRightColor: "#EF2B7B",
    paddingVertical: 26,
    paddingHorizontal: 20,
    gap: 20,
  },
});
