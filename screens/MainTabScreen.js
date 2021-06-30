import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderBackButton,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons } from "@expo/vector-icons";
import CallButton from "../components/ButtonBasic";

import HomeScreen from "./HomeScreen";
import MapScreen from "./MapScreen";
import ChatScreen from "./ChatScreen";
import IncidentScreen from "./IncidentScreen";
import MapNavScreen from "./MapNavScreen";

//landing
import CreateChatScreen from "./CreateChatScreen";
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

const HomeStack = createStackNavigator();
const IncidentStack = createStackNavigator();
const MapStack = createStackNavigator();
const ChatStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Incident" options={{}}>
    <Tab.Screen
      name="Map"
      component={MapStackScreen}
      options={{
        tabBarLabel: "Map",
        tabBarIcon: () => (
          <SimpleLineIcons name="compass" size={24} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="Chat"
      component={ChatStackScreen}
      options={{
        tabBarLabel: "Chat",
        tabBarIcon: () => (
          <SimpleLineIcons name="speech" size={24} color="black" />
        ),
      }}
    />
    <Tab.Screen
      name="Incident"
      component={IncidentStackScreen}
      options={{
        tabBarLabel: "Incident",
        tabBarIcon: () => (
          <SimpleLineIcons name="list" size={24} color="black" />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const IncidentStackScreen = ({ navigation }) => (
  <IncidentStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#FF8000",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <IncidentStack.Screen
      name="Incident"
      component={IncidentScreen}
      options={{
        title: "Incident List",
        headerTitleAlign: "center",
        headerLeft: () => (
          <CallButton
            onPress={() => {
              Alert.alert("Log Out?", "Are you sure you want to Log Out?", [
                { text: "Cancel", style: "cancel" },
                {
                  text: "Log Out",
                  onPress: () => {
                    {
                      AsyncStorage.clear();
                      navigation.popToTop();
                    }
                  },
                },
              ]);
            }}
          >
            <SimpleLineIcons name="logout" size={24}></SimpleLineIcons>
          </CallButton>
        ),
      }}
    />
  </IncidentStack.Navigator>
);

const MapStackScreen = ({ navigation }) => (
  <MapStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#FF8000",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <MapStack.Screen
      name="Map"
      component={MapScreen}
      options={{
        title: "Navigation Map",
        headerTitleAlign: "center",
        headerLeft: () => (
          <CallButton
            onPress={() => {
              Alert.alert("Log Out?", "Are you sure you want to Log Out?", [
                { text: "Cancel", style: "cancel" },
                {
                  text: "Log Out",
                  onPress: () => {
                    {
                      AsyncStorage.clear();
                      navigation.popToTop();
                    }
                  },
                },
              ]);
            }}
          >
            <SimpleLineIcons name="logout" size={24}></SimpleLineIcons>
          </CallButton>
        ),
      }}
    />
  </MapStack.Navigator>
);

const ChatStackScreen = ({ navigation }) => (
  <ChatStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#FF8000",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ChatStack.Screen
      name="ChatScreen"
      component={ChatScreen}
      options={{
        title: "User Chatlist",
        headerTitleAlign: "center",
        headerLeft: () => (
          <CallButton
            onPress={() => {
              Alert.alert("Log Out?", "Are you sure you want to Log Out?", [
                { text: "Cancel", style: "cancel" },
                {
                  text: "Log Out",
                  onPress: () => {
                    {
                      AsyncStorage.clear();
                      navigation.popToTop();
                    }
                  },
                },
              ]);
            }}
          >
            <SimpleLineIcons name="logout" size={24}></SimpleLineIcons>
          </CallButton>
        ),
      }}
    />
    <ChatStack.Screen
      name="CreateChat"
      component={CreateChatScreen}
      options={{
        title: "User Chat",
        headerTitleAlign: "center",
        headerLeft: () => (
          <CallButton
            onPress={() => {
              Alert.alert("Log Out?", "Are you sure you want to Log Out?", [
                { text: "Cancel", style: "cancel" },
                {
                  text: "Log Out",
                  onPress: () => {
                    {
                      AsyncStorage.clear();
                      navigation.popToTop();
                    }
                  },
                },
              ]);
            }}
          >
            <SimpleLineIcons name="logout" size={24}></SimpleLineIcons>
          </CallButton>
        ),
      }}
    />
  </ChatStack.Navigator>
);
