import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ActivityCard = ({title, subTitle, count, }) => {
  return (
    <View style={{
        width:"100%",
        // backgroundColor:"red",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
    }}>
      <View style={{
        gap:6
      }}>
        <Text style={{
            fontSize:22
        }}>{title}</Text>
        <Text style={{
            color:"#ccc"
        }}>{subTitle}</Text>
      </View>

      <Text style={{fontSize:26}}>{count}</Text>

    </View>
  )
}

export default ActivityCard

const styles = StyleSheet.create({})