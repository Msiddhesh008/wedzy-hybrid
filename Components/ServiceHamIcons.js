import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ServiceHamIcons = ({title, name, textColor }) => {
    
  return (
    <View style={{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        padding:16,
        gap:20,
        borderBottomColor:"#f7bad6",
        borderBottomWidth:1
    }}>
    <Ionicons
        style={{
            backgroundColor:"#FEF3F8",
            padding:6,
            borderRadius:6,
            color:"#EE3764",
            elevation:2
        }}
        name={name}
        size={20}
        />
        <Text style={{
            fontSize:20,
            color:textColor,
        }}>{title}</Text>
    </View>
  )
}

export default ServiceHamIcons

const styles = StyleSheet.create({})