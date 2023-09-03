import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabScreen = ({ name, isActive, onPress }) => {
  const tabStyle = isActive ? styles.activeTab : styles.inactiveTab;
  const textStyle = isActive ? styles.activeText : styles.inactiveText;

  return (
    <TouchableOpacity style={[styles.tab, tabStyle]} onPress={onPress}>
      <Text style={[styles.tabText, textStyle]}>{name}</Text>
    </TouchableOpacity>
  );
};

const BottomNavigator = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <View style={styles.container}>
      <TabScreen name="Home" isActive={activeTab === 'Home'} onPress={() => setActiveTab('Home')} />
      <TabScreen name="Profile" isActive={activeTab === 'Profile'} onPress={() => setActiveTab('Profile')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabText: {
    fontSize: 16,
  },
  activeTab: {
    backgroundColor: '#EE3764',
  },
  inactiveTab: {},
  activeText: {
    color: '#fff',
  },
  inactiveText: {},
});

export default BottomNavigator;
