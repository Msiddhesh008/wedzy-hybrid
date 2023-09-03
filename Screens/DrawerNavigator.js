import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from '../Components/BottomTab';
import SideDrawer from '../Components/SideDrawer';
import Blogs from './Blogs';
import PolicyStandards from "./PolicyStandarts"



const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
      <Drawer.Navigator 
      screenOptions={{
        headerShown: false, // Hide the header by default
      }}
      drawerContent={ (props) => <SideDrawer {...props} /> }
      initialRouteName='Bottom Tab'
       >
      <Drawer.Screen name="Bottom Tab" component={BottomTab} />
      <Drawer.Screen name="Blogs" component={Blogs} />
      <Drawer.Screen name="PolicyStandards" component={PolicyStandards} />

      </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})