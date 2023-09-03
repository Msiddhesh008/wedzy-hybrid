import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from './Icons';
import Listings from '../Screens/Listings';
import Orders from '../Screens/Orders';
import Home from '../Screens/Home';
import Task from '../Screens/Task';
import * as Animatable from 'react-native-animatable';
import Profile from '../Screens/Profile';


const TabArr = [
  { route: 'Task', label: 'Task', type: Icons.Feather, icon: 'check-square', component: Task },
  { route: 'Orders', label: 'Orders', type: Icons.Feather, icon: 'shopping-bag', component: Orders },
  { route: 'Home', label: 'Dashboard', type: Icons.Feather, icon: 'grid', component: Home },
  { route: 'Listing', label: 'Listing', type: Icons.Feather, icon: 'file-text', component: Listings },
  { route: 'Profile', label: 'Profile', type: Icons.FontAwesome, icon: 'user-circle-o', component: Profile },
];

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <Animatable.View
        ref={viewRef}
        duration={100}
        style={styles.container}>
        <View style={{
            width: 60,
            height: 60,
            borderRadius: 27,
            borderWidth: 6,
            borderColor: "rgba(255, 255, 255, 255)",
            backgroundColor: "#ffffff",
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom:10,
            // elevation:focused ? 2 : 0
          }}>
          <Animatable.View
            ref={circleRef}
            style={styles.circle} />
          <Icon type={item.type} name={item.icon} color={focused ? "#ffffff" : "#EF2B7B"} />
        </View>
        <Animatable.Text
          ref={textRef}
          style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
      initialRouteName="Home" // Set the initial route name to 'Home'
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    zIndex:1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  btn: {
    width: 54,
    height: 54,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: "#ffffff",
    backgroundColor: "#ffffff",
    justifyContent: 'center',
    alignItems: 'center',
    elevation:2

  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#EF2B7B",
    borderRadius: 25,
  },
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: "#EF2B7B",
  }
})

