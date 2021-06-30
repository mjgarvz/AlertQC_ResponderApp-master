import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import ChatScreen from "./screens/ChatScreen";
import IncidentScreen from "./screens/IncidentScreen";
import SignInScreen from "./screens/SignInScreen";
//landing
import RootStackScreen from "./screens/RootStackScreen";
import CallButton from "./components/ButtonBasic";
import CreateChatScreen from "./screens/CreateChatScreen";
import MainTabScreen from "./screens/MainTabScreen";

const HomeStack = createStackNavigator();
const IncidentStack = createStackNavigator();
const MapStack = createStackNavigator();
const ChatStack = createStackNavigator();
const SignInStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const TabNav = createBottomTabNavigator();
const SlideDrawer = createDrawerNavigator();

//stack screen headers

// const HomeStackScreen = ({ navigation }) => (
//   <HomeStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: "#FF8000",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         fontWeight: "bold",
//       },
//     }}
//   >
//     <HomeStack.Screen
//       name="Home"
//       component={HomeScreen}
//       options={{
//         title: "Experimentation Base",
//       }}
//     />
//   </HomeStack.Navigator>
// );

// const IncidentStackScreen = ({ navigation }) => (
//   <IncidentStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: "#FF8000",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         fontWeight: "bold",
//       },
//     }}
//   >
//     <IncidentStack.Screen
//       name="Incident"
//       component={IncidentScreen}
//       options={{
//         title: "Incident List",
//         headerTitleAlign: "center",
//       }}
//     />
//   </IncidentStack.Navigator>
// );

// const MapStackScreen = ({ navigation }) => (
//   <MapStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: "#FF8000",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         fontWeight: "bold",
//       },
//     }}
//   >
//     <MapStack.Screen
//       name="Map"
//       component={MapScreen}
//       options={{
//         title: "Navigation Map",
//         headerTitleAlign: "center",
//       }}
//     />
//   </MapStack.Navigator>
// );

// const ChatStackScreen = ({ navigation }) => (
//   <ChatStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: "#FF8000",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         fontWeight: "bold",
//       },
//     }}
//   >
//     <ChatStack.Screen
//       name="ChatScreen"
//       component={ChatScreen}
//       options={{
//         title: "User Chatlist",
//         headerTitleAlign: "center",
//       }}
//     />
//     <ChatStack.Screen
//       name="CreateChat"
//       component={CreateChatScreen}
//       options={{
//         title: "User Chat",
//         headerTitleAlign: "center",
//       }}
//     />
//   </ChatStack.Navigator>
// );

// const SignInStackScreen = ({ navigation }) => (
//   <SignInStack.Navigator
//     screenOptions={{
//       headerStyle: {
//         backgroundColor: "#FF8000",
//       },
//       headerTintColor: "#fff",
//       headerTitleStyle: {
//         fontWeight: "bold",
//       },
//     }}
//   >
//     <SignInStack.Screen
//       name="SignIn"
//       component={SignInScreen}
//       options={{
//         title: "Sign In",
//         headerTitleAlign: "center",
//       }}
//     />
//     <SignInStack.Screen name="MainTab" component={MainTabScreen} />
//   </SignInStack.Navigator>
// );

const App = () => {
  return (
    <NavigationContainer>
      {/* <RootStackScreen>
        if (1==1) {
          <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen}/>
          <Drawer.Screen name="Map" component={MapScreen}/>
          <Drawer.Screen name="Chat" component={ChatScreen}/>
          <Drawer.Screen name="Incident" component={IncidentScreen}/>
        </Drawer.Navigator>
        } else {
          
        }

      </RootStackScreen> */}
      {/* <TabNav.Navigator initialRouteName="SignIn">
        <TabNav.Screen
          name="SignIn"
          component={SignInStackScreen}
          options={{
            tabBarLabel: "Sign In",
            tabBarIcon: () => (
              <SimpleLineIcons name="user" size={24} color="black" />
            ),
          }}
        />
        <TabNav.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => (
              <SimpleLineIcons name="home" size={24} color="black" />
            ),
          }}
        />
        <TabNav.Screen
          name="Map"
          component={MapStackScreen}
          options={{
            tabBarLabel: "Map",
            tabBarIcon: () => (
              <SimpleLineIcons name="compass" size={24} color="black" />
            ),
          }}
        />
        <TabNav.Screen
          name="Chat"
          component={ChatStackScreen}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: () => (
              <SimpleLineIcons name="speech" size={24} color="black" />
            ),
          }}
        />
        <TabNav.Screen
          name="Incident"
          component={IncidentStackScreen}
          options={{
            tabBarLabel: "Incident",
            tabBarIcon: () => (
              <SimpleLineIcons name="list" size={24} color="black" />
            ),
          }}
        />
      </TabNav.Navigator> */}

      <SlideDrawer.Navigator initialRouteName="SignIn">
        <Drawer.Screen
          name="SignIn"
          component={RootStackScreen}
          options={{ swipeEnabled: false }}
        />
      </SlideDrawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
