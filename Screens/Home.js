import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableNativeFeedback,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import Header from "../Components/Header";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import ProPic from "../Components/ProPic";
import GlobalStateContext from "../Contexts/GlobalStateContext";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeCard from "../Components/HomeCard";
import { DrawerActions } from '@react-navigation/native';

const Home = ({ navigation }) => {
  const { userDetails } = useContext(GlobalStateContext);

const openDrawer = () => {
  navigation.dispatch(DrawerActions.openDrawer());
};



  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar 
      backgroundColor="#fff"
      barStyle="dark-content"
      />
      <View style={styles.container}>
        {/* <SideBar
          setSlideToggle={setSlideToggle}
          slideToggle={slideToggle}
          navigation={navigation}
         /> */}
        <Header />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.iconContainer}>
            <Pressable 
            onPress={openDrawer}
            >
            <MaterialIcons
              name="menu-open"
              size={30}
              style={{
                backgroundColor: "#fff",
                elevation: 4,
                padding: 4,
                borderRadius: 8,
                color: "#EF2B7B",
              }}
            />
            </Pressable>

            <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
              <MaterialIcons
                name="chat-bubble-outline"
                size={22}
                style={{
                  backgroundColor: "#fff",
                  elevation: 4,
                  padding: 8,
                  borderRadius: 8,
                  color: "#EF2B7B",
                }}
              />
              <Octicons
                name="bell"
                size={22}
                style={{
                  backgroundColor: "#fff",
                  elevation: 4,
                  padding: 8,
                  borderRadius: 8,
                  color: "#EF2B7B",
                }}
              />
            </View>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.detailsContainerLeft}>
              <Text
                style={{
                  fontSize: 19,
                  color: "#373434",
                  fontWeight: "bold",
                }}
              >
                Hi, {userDetails.userName}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: "#373434",
                }}
              >
                Your Wedzy Shop Is Live Now
              </Text>
            </View>
            <ProPic width={40} height={40} BR={80} />
          </View>
          
          <View style={{
                width:"100%",
                backgroundColor:"#FEF7F9",
                padding:12,
                paddingRight:0,
                borderRadius:8,
                borderWidth:1,
                borderColor:"#F05E90",
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"flex-start",
                gap:7
              }}>

                <View style={{
                  width:80,
                  height:80,
                  borderRadius:150,
                  borderWidth:7,
                  borderColor:"rgba(238, 55, 100, 0.12)"
                }}>
                  <Text
                  style={{
                    height:"100%",
                    borderRadius:150,
                    textAlignVertical:"center",
                    textAlign:"center",
                    color:"#EE3764",
                    fontSize:28,
                    fontWeight:"bold",
                  }}
                  >0%</Text>
                </View>

                <View style={{
                  gap:6
                }}>
                  <Text style={{
                    fontSize:18,
                    color:"#373434"
                  }}>Complete your shop details</Text>
                  <Text style={{
                    fontSize:16,
                    color:"#373434"
                  }}>0% Completed</Text>
                </View>
      <Image
        style={{
          position:"absolute",
          right:0
        }}
        source={require('../assets/Images/pattern.png')}
        // style={{ width: 200, height: 200 }}
      />

          </View>

          <View style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            paddingVertical:20
          }}>

            <View style={{
              alignItems:"center",
              gap:10
            }}>
            <TouchableOpacity>
            <FontAwesome
            style={styles.icons2}
            name="money"
            size={20}
            />
            </TouchableOpacity>
            <Text style={{
              fontSize:16
            }}>Payments</Text>
            </View>

            
            <View style={{
              alignItems:"center",
              gap:10
            }}>
            <TouchableOpacity
            onPress={()=> navigation.navigate('WalletScreen')}
            >
            <FontAwesome5
            style={styles.icons2}
            name="wallet"
            size={20}
            />
            </TouchableOpacity>
            <Text style={{
              fontSize:16
            }}>Wallet</Text>
            </View>

            <View style={{
              alignItems:"center",
              gap:10
            }}>

            <TouchableNativeFeedback
            android_disableSound={false}
            // android_ripple={{borderless:true, radius:30}}
            onPress={()=> navigation.navigate('Stats')}>
            <Ionicons
            style={styles.icons2}
            name="stats-chart"
            size={20}
            />
            </TouchableNativeFeedback>
            <Text style={{
              fontSize:16
            }}>Stats</Text>
            </View>
            

            <View style={{
              alignItems:"center",
              gap:10
            }}>
            <TouchableOpacity>
            <FontAwesome5
            style={styles.icons2}
            name="hand-holding-heart"
            size={20}
            />
            </TouchableOpacity>
            <Text style={{
              fontSize:16
            }}>Services</Text>
            </View>

          </View>

          <View style={{
            marginTop:8,
            gap:10
          }}>
            <Text style={{
              fontSize:20,
              fontWeight:"bold",
            }}>Recent Bookings</Text>
          </View>

          <HomeCard
          title="#Vrushali ki sagai"
          date="1 May 2024 8 PM" 
          />
          <HomeCard
          title="#Dipali ki shadi"
          date="14 June 2024 12 PM" 
          />
          <HomeCard
          title="#Rupali's ki haldi"
          date="26 Aug 2025 1 PM" 
          />

        </ScrollView>
{/*         
        <BottomNavigator
        navigation={navigation}
         /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    paddingBottom:50
  },
  scrollContent: {
    flexGrow: 1,
    padding: 18,
    // justifyContent: "flex-start",
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    backgroundColor: "#fff",
    elevation: 4,
    padding: 4,
    borderRadius: 8,
    color: "#EF2B7B",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor:'pink',
    paddingVertical: 22,
  },
  detailsContainerLeft: {
    gap: 6,
  },
  icons2:{
    backgroundColor: "#EF2B7B",
    padding: 16,
    borderRadius: 100,
    color: "#fff",
    elevation:4

    

  }
});

export default Home;
