import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ActivityCard from './ActivityCard'

const TopRated = () => {
  return (
    <View style={styles.container}>
        
    <ScrollView style={{
      paddingBottom:12
    }}>
    <ActivityCard
    title="Profile Visit"
    subTitle="+212 in last 7 days"
    count="3,245"
     />
     <ActivityCard
     title="Call Clicks"
     subTitle="+100 in last 8 days"
     count="8"
      />
      <ActivityCard
      title="Booking Clicks"
      subTitle="+110 in last 4 days"
      count="4"
       />
       <ActivityCard
       title="Other Clicks"
       subTitle="+150 in last 5 days"
       count="9"
        />
        <ActivityCard
        title="Other Clicks"
        subTitle="+150 in last 5 days"
        count="9"
         />
      </ScrollView>
    </View>
  )
}

export default TopRated

const styles = StyleSheet.create({
    container: {
      backgroundColor:"#ffffff",
      flex: 1,
      padding:10
    },
})