import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopTabs from '../DummyComponents/TopTabs'
import TopContainer from '../Components/TopContainer'

const Stats = ({navigation}) => {
  return (
    
    <SafeAreaView style={styles.safeArea}>
      <StatusBar 
      backgroundColor="#fff"
      barStyle="dark-content"
      />
      <View style={styles.container}>
        <TopContainer
        title="Statistics"
        navigation={navigation}
        />
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
            <TopTabs />

        </ScrollView>
        
      </View>
    </SafeAreaView>
  )
}

export default Stats

const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: "#fff",
    },
    container: {
      flex: 1,
      // padding:20
    },
    scrollContent: {
      flexGrow: 1,
    //   padding: 18,
      // justifyContent: "flex-start",
    },
})