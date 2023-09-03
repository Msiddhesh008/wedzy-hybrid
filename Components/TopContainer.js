import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from '@react-navigation/native';

const TopContainer = ({title,}) => {
  const navigation = useNavigation();
  
  return (
  <View style={styles.topContainer}>
    <Icon
      style={{
        backgroundColor: "#FEF3F8",
        padding: 4,
        borderRadius: 6,
        color: "#EE3764",
        elevation: 2,
      }}
      onPress={() => navigation.navigate("Home")}
      name="arrowleft"
      size={26}
      color="#EF2B7B"
    />
    <Text
      style={{
        fontSize: 22,
        fontWeight: "bold",
      }}
    >
      {title}
    </Text>
  </View>
  )
}

export default TopContainer

const styles = StyleSheet.create({
    topContainer: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 18,
      justifyContent: "flex-start",
      paddingVertical: 14,
      padding:20
    },
})