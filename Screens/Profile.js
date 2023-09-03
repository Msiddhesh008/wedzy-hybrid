import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopContainer from '../Components/TopContainer'

const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <TopContainer
        title="Profile"
        navigation={navigation}
        />
      <View
        style={{
          width: "100%",
          padding:20
        }}
      ></View>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#fff",
      // flex: 1,
      height:Dimensions.get('window').height,
      display:"flex",
  
      // alignItems: "flex-start",
      // justifyContent: 'flex-start',
  
    },})