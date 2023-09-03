import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/Images/small-logo.png")}
        style={styles.logo}
      />
      <Text style={{
        fontSize:24,
        fontWeight:"bold",
        color:"#373434"
      }}>edzy Business</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
      // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      paddingVertical: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      backgroundColor: "#fff",
      ...Platform.select({
        ios: {
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
        android: {
          elevation: 6,
        },
      }),
    },
    logo: {
      // width: 36,
      // height: 34,
    }})