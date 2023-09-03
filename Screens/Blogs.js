import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions
} from "react-native";
import React, { useContext } from "react";
import GlobalStateContext from "../Contexts/GlobalStateContext";
import BlogsGallery from "../Components/BlogsGallery";
import BlogContentCard from "../Components/BlogContentCard";
import TopContainer from "../Components/TopContainer";

const Blogs = ({ navigation }) => {
  const { profileImage, userDetails } = useContext(GlobalStateContext);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View
        style={{
          width: "100%",
        }}
      ></View>

      
      <TopContainer
      title="Blogs"
      navigation= {navigation}
       />

      <ScrollView 
      showsHorizontalScrollIndicator={false} 
      horizontal={true} 
        style={{
          height:80,
          width: "100%",
          // overflow:"hidden",
        }}

        contentContainerStyle={{ 
          alignItems: 'center',
          paddingHorizontal: 20, 
          marginTop:0}}
      >
        <BlogsGallery 
        url="../assets/Images/gallery.png"
        title="Wedding"
        disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        paddingRight={20}
        />
        <BlogsGallery 
        url="../assets/Images/gallery.png"
        title="Wedding"
        disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        paddingRight={20}
        />
        <BlogsGallery 
        url="../assets/Images/gallery.png"
        title="Wedding"
        disc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        paddingRight={0}
        />
      </ScrollView>

      <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={{
        height:"20%",
        width:"100%",
        paddingVertical:20,
      }}
      
      contentContainerStyle={{ 
        alignItems: 'center',
        paddingHorizontal: 20, 
        marginTop:0
      }}
      >
        <BlogContentCard />
        <BlogContentCard />
        <BlogContentCard />
        <BlogContentCard />
        <BlogContentCard />
      </ScrollView>

    </View>
  );
};

export default Blogs;

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    // flex: 1,
    height:Dimensions.get('window').height,
    display:"flex",

    // alignItems: "flex-start",
    // justifyContent: 'flex-start',

  },
});
