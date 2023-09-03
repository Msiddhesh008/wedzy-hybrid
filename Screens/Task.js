import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopContainer from '../Components/TopContainer'

const Task = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <TopContainer
        title="Task"
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

export default Task

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#fff",
      // flex: 1,
      height:Dimensions.get('window').height,
      display:"flex",
  
      // alignItems: "flex-start",
      // justifyContent: 'flex-start',
  
    },})