import { View, Text } from 'react-native'
import React from 'react'

const HomeCard = ({ title, date }) => {
  return (
    <View style={{
      marginTop:8,
      marginBottom:8,
      width:"100%",
      height:120,
      borderLeftWidth:1.5,
      borderLeftColor:"#EE3764",
      gap:8,
      paddingHorizontal:12,
    }}>
    <Text style={{
      color:"#EE3764",
      fontWeight:"bold"
    }}>{date}</Text>
    <View style={{
      width:"100%",
      height:"70%",
      borderLeftWidth:1.5,
      borderLeftColor:"#EE3764",
      padding:12,
      borderRadius:8,
      gap:8,
      backgroundColor:"#fff",
      elevation:6
    }}>       
      <Text style={{
        fontSize:20
      }}>{title}</Text>     



    <View style={{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between"
    }}>
      <Text style={{
        fontSize:18
      }}>Lorem Epsome</Text>
      <Text style={{
        color:"#EE3764",
        textDecorationLine:"underline"
      }}>Details</Text>
    </View>
    </View>


    </View>
  )
}

export default HomeCard