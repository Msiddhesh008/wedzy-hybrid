import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BlogContentCard = () => {
  return (
    <View style={{
        width:"98%",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        // justifyContent:"center",
        // backgroundColor:"red"
        gap:12,
        padding:16,
        borderRadius:10,
        backgroundColor:"#fff",
        marginBottom:20,
        elevation:2
    }}>
        <Image 
        style={{
            width:80,
            height:80,
            borderRadius:10
        }}
        source={require("../assets/Images/gallery.png")}/>
        <View style={{
            gap:6
        }}>
        <Text style={{
            width:200,
            fontSize:18,
            color:"#ccc"
        }}>Venue</Text>
        <Text style={{
            width:200,
            fontSize:18
        }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </View>
    </View>
  )
}

export default BlogContentCard

const styles = StyleSheet.create({})