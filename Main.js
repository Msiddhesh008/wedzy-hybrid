import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import WalletScreen from "./Screens/WalletScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Screens/Login";
import ProfilePictureScreen from "./Screens/ProfilePictureScreen";
import GlobalStateProvider from "./Contexts/GlobalStateProvider";
import Stats from "./Screens/Stats";
import DrawerNavigator from "./Screens/DrawerNavigator";

const Stack = createStackNavigator();

const Main = () => {
  return (
    <GlobalStateProvider>
      <NavigationContainer>
        {/* <CustomStatusBar /> */}
        <Stack.Navigator
          screenOptions={{
            headerShown: false, // Hide the header by default
          }}
          initialRouteName="drawer"
        >
          <Stack.Screen name="drawer" component={DrawerNavigator} />

          {/* <Stack.Screen name="AnimTab1" component={AnimTab1} /> */}

          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

          <Stack.Screen name="WalletScreen" component={WalletScreen} />

          <Stack.Screen
            name="ProfilePictureScreen"
            component={ProfilePictureScreen}
          />

          <Stack.Screen name="Stats" component={Stats} />
        </Stack.Navigator>

        {/* <AnimTab1/> */}
        {/* <BottomNavigator /> */}
      </NavigationContainer>
    </GlobalStateProvider>
  );
};

export default Main;
