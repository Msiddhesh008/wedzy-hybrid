import { StyleSheet, Text, View, Dimensions, Animated, Pressable, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import GlobalStateContext from '../Contexts/GlobalStateContext';
import ProPic from '../Components/ProPic';
import ServiceHamIcons from '../Components/ServiceHamIcons';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WalletScreen from "../Screens/WalletScreen"

// console.log(Dimensions.get('window'));
// Create a stack navigator
// const Stack = createStackNavigator();
const screenDimettion = Dimensions.get('window')

const SideBar = ({ slideToggle, setSlideToggle }) => {
    const { userDetails } = useContext(GlobalStateContext);
    const [animationValue] = useState(new Animated.Value(1));
    const navigation = useNavigation()
    
    useEffect(() => {
      Animated.timing(animationValue, {
        toValue: slideToggle ? 1 : 0,
        duration: 600,
        useNativeDriver: false,
      }).start();
    }, [slideToggle]);

    const translateYInterpolate = animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -Dimensions.get('window').width], // Change the value according to your desired vertical translation
    });

  return (
    
    <Animated.View style={{
        position:"absolute",
        top:0,
        left:0,
        backgroundColor:"#fff",
        height: screenDimettion.height,
        width:screenDimettion.width - 100 ,
        // width: slideToggle ? screenDimettion.width - 100 : -10 ,
        transform: [{ translateX: translateYInterpolate }],
        zIndex:1,
        borderBottomRightRadius:25,
        borderTopRightRadius:25,
        borderRightWidth:6,
        borderRightColor:"#EF2B7B",
        paddingVertical:26,
        paddingHorizontal:20,
        gap:20
    }}>
            <Pressable
            style={{
                position:"absolute",
                right:0,
                top:screenDimettion.height / 2 - 50,
                zIndex:3
            }}
            onPress={() => setSlideToggle(!slideToggle)}>
            <Image 
            source={require('../assets/Images/slideIcon.png')} />
            </Pressable>
      
        <View style={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            gap:18,
        }}> 

        <ProPic width={70} height={70} BR={80} />
        <View>
        <Text style={{
            fontSize:20
        }}>
            {userDetails.userName}
        </Text>
        <Text style={{
            fontSize:16
        }}>
            {userDetails.mobile}
        </Text>
        </View>
        </View>
        
        <Pressable onPress={() => navigation.navigate('PolicyStandards')} >
        <ServiceHamIcons 
        title="Policy Standards"
        name="document-text-outline"
        />
        </Pressable>
        
        <ServiceHamIcons
        title="Calendar"
        name="calendar-outline"
         />
        <Pressable onPress={() => navigation.navigate('Blogs')} >
        <ServiceHamIcons 
        title="Blogs"
        name="document-outline"
        />
        </Pressable>

        <ServiceHamIcons 
        title="Settings"
        name="cog-outline"
        />
        <ServiceHamIcons 
        title="Reviews"
        name="star-outline"
        />
        <ServiceHamIcons 
        title="My Employees"
        name="people-outline"
        />
        
        <Pressable onPress={() => navigation.navigate('Login')}>
        <ServiceHamIcons 
        title="Log Out"
        name="log-out-outline"
        textColor="#EE3764"
        />
        </Pressable>

    </Animated.View>
  )
}

export default SideBar

const styles = StyleSheet.create({
})