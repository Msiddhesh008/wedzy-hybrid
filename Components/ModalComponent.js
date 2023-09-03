import { Image, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native'
import React from 'react'
import Modal from "react-native-modal";
import PrimaryButton from './PrimaryButton';



const ModalComponent = ({ closeModal, navigator, navigateAfterColse, title, btnTitle}) => {

  handlePress = () => {
    closeModal()
    navigator.navigate(navigateAfterColse)
  }
  
  return(
    <View 
    style={styles.container}>
      <StatusBar backgroundColor="#4D4D4D" barStyle="light-content" />
  
      <Image source={require("../assets/Images/modalSuccessfull.png")} />
  
      <Text style={styles.title}>{title}</Text>

      <PrimaryButton
              ButtonPress={handlePress}
              width="40%"
              title="Login"
              paddingVertical={8}
              />
    </View>
  )};
  

export default ModalComponent

const styles = StyleSheet.create({
  container:{ 
    backgroundColor: "white", 
    gap:20,
    borderRadius:10,
    display:"flex",
    // justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    elevation:2,
    padding: 20 
  },
  title:{
    fontSize:20,
    color:"#373434"
  },
  button:{
    backgroundColor:"#EF2B7B",
    paddingVertical:10,
    paddingHorizontal:50,
    borderTopRightRadius:14,
    borderBottomLeftRadius:14,
    elevation:2
  },
  buttonTitle:{
    color:"#fff",
    fontWeight:"bold"
  }

})