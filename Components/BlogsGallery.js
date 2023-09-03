import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BlogsGallery = ({ url, title, disc, paddingRight }) => {
  return (
    <ImageBackground
      source={require("../assets/Images/gallery.png")} // Replace with the actual path to your image
      style={{
        width: 320,
        resizeMode: "cover", // You can use 'contain' or 'stretch' as well
        height: 300,
        borderRadius: 20,
        marginRight:paddingRight,
        elevation:4
      }}
      imageStyle={{
        borderRadius: 20,
      }}
    >
      <View style={styles.overlay}>
        <Text style={{
            fontSize:26,
            color:"#ffffff"
        }}>{title}</Text>
        <Text style={{
            fontSize:20,
            color:"#ffffff"
        }}>{disc}</Text>
      </View>
    </ImageBackground>
    
  )
}

export default BlogsGallery

const styles = StyleSheet.create({
    backgroundImage: {
      width: 320,
      resizeMode: "cover", // You can use 'contain' or 'stretch' as well
      height: 300,
      borderRadius: 20,
      marginRight:20,
    },
    overlay: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.1)", // Semi-transparent black background
      borderRadius: 20, // Adjust the border radius as needed
      justifyContent: "flex-end",
      alignItems: "flex-start",
      padding:20,
      gap:6
    },
})