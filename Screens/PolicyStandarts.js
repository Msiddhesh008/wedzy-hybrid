import { Dimensions, StatusBar, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopContainer from '../Components/TopContainer'

const PolicyStandarts = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <TopContainer
      title="Policy Standards"
      navigation={navigation}
      />
      <ScrollView
      contentContainerStyle={{
        padding:20
      }}
      showsVerticalScrollIndicator={false} >
        <Text style={{
            fontSize:32,
            color:"#EF2B7B",
            fontWeight:"bold",
            padding:5,
            textAlign:"justify"
        }}>
        Privacy policy
        </Text>

        <Text style={{
            fontSize:20,
            color:"#555",
            padding:5,
            paddingTop:15,
            textAlign:"justify"
        }}>
        Lorem ipsum dolor sit amet, conse consectetur adipiscing elit, sed do euio eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla velit pariatur. 
        </Text>

        
        <Text style={{
            fontSize:20,
            color:"#555",
            padding:5,
            paddingTop:15,
            textAlign:"justify"
        }}>
        Lorem ipsum dolor sit amet, conse consectetur adipiscing elit, sed do euio eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Ut enim ad minim veniam, quis nostrud exercitation ulla ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        </Text>

        
        
        <Text style={{
            fontSize:20,
            color:"#555",
            padding:5,
            paddingTop:15,
            textAlign:"justify"
        }}>
        Lorem ipsum dolor sit amet, conse consectetur adipiscing elit, sed do euio eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Ut enim ad minim veniam, quis nostrud exercitation ulla ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
        </Text>

        
        
        <Text style={{
            fontSize:20,
            color:"#555",
            padding:5,
            paddingTop:15,
            textAlign:"justify"
        }}>
        Lorem ipsum dolor sit amet, conse consectetur adipiscing elit, sed do euio eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </Text>

      </ScrollView>
    </View>
  )
}

export default PolicyStandarts

const styles = StyleSheet.create({
    
  container: {
    backgroundColor:"#fff",
    height:Dimensions.get('window').height,

  },
})