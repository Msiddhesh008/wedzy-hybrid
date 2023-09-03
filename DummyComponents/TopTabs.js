import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BarChart, LineChart } from 'react-native-chart-kit';
import ActivityCard from '../Components/ActivityCard';
import TopRated from '../Components/TopRated';
import Popular from '../Components/Popular';




function Activity() {
  let data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [10, 15, 30, 12, 20, 10 ],
    },
  ],
};
  return (
    <View style={styles.container}>
      <View 
      style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        // backgroundColor:"red",
        width:"100%",
        paddingVertical:15
      }}
      >
      <Text style={{
        fontSize:20
      }}>Actions</Text>
      <View style={{
        borderColor:"#EE3764",
        borderWidth:1,
        borderRadius:10,
        paddingVertical:4,
        paddingHorizontal:10
      }}>
        <Text>01-07 May</Text>
      </View>
      </View>
      
    <LineChart
      data={data}
      width={Dimensions.get('window').width - 20}
      height={200}
      // Remove the yAxisLabel property
      chartConfig={{
        backgroundColor: '#fff',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(238, 55, 100, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        barPercentage: 0.5,
      }}
      style={{ marginVertical: 8, borderRadius: 16, marginHorizontal:-22 }}
    />
    <ScrollView 
    showsVerticalScrollIndicator={false}
    style={{
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
           <ActivityCard
           title="Other Clicks"
           subTitle="+150 in last 5 days"
           count="9"
            />
      </ScrollView>

  </View>
  );
}
function Products() {
  let data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [25, 40, 20, 22, 20, 48 ],
    },
  ],
};

  return (
    <View style={{
      backgroundColor:"#ffffff",
      flex: 1,
      padding:10
      }}>
      <View 
      style={{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        // backgroundColor:"red",
        width:"100%",
        paddingVertical:15
      }}
      >
      <Text style={{
        fontSize:20
      }}>Actions</Text>
      <View style={{
        borderColor:"#EE3764",
        borderWidth:1,
        borderRadius:10,
        paddingVertical:4,
        paddingHorizontal:10
      }}>
        <Text>01-07 May</Text>
      </View>
      </View>
      
    <LineChart
      data={data}
      width={Dimensions.get('window').width - 20}
      height={200}
      // Remove the yAxisLabel property
      chartConfig={{
        backgroundColor: '#fff',
        backgroundGradientFrom: '#fff',
        backgroundGradientTo: '#fff',
        decimalPlaces: 0,
        color: (opacity = 1) => `rgba(238, 55, 100, ${opacity})`,
        style: {
          borderRadius: 16,
        },
        barPercentage: 0.5,
      }}
      style={{ marginVertical: 8, borderRadius: 16, marginHorizontal:-22 }}
    />

    <ScrollView style={{
      paddingBottom:12
    }}>
    <Tab.Navigator 
    screenOptions={{
      "tabBarActiveTintColor": "#EE3764",
      "tabBarLabelStyle": {
        "fontSize": 16,
        "fontWeight": "bold"
      },
      "tabBarItemStyle": {
        "borderBottomWidth": 0,
        "borderBottomColor": "#EE3764"
      },
      "tabBarIndicatorStyle": {
        "backgroundColor": "#EE3764",
        "borderBottomWidth": 0
      }
    }}>
      <Tab.Screen name='Top Rated' component={TopRated} />
      <Tab.Screen name='Popular' component={Popular} />
    </Tab.Navigator>
      
      </ScrollView>

  </View>
  );
}

function Audience() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        
      </Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();
export default function TopTabs() {
  return (
    <Tab.Navigator 
    screenOptions={{
      "tabBarActiveTintColor": "#EE3764",
      "tabBarLabelStyle": {
        "fontSize": 16,
        "fontWeight": "bold"
      },
      "tabBarItemStyle": {
        "borderBottomWidth": 0,
        "borderBottomColor": "#EE3764"
      },
      "tabBarIndicatorStyle": {
        "backgroundColor": "#EE3764",
        "borderBottomWidth": 0
      }
    }}>
      <Tab.Screen name='Activity' component={Activity} />
      <Tab.Screen name='Products' component={Products} />
      <Tab.Screen name='Audience' component={Products} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#ffffff",
    flex: 1,
    padding:10
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
