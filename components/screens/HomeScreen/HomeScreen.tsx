import {
  createBottomTabNavigator,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import EventScreen from "../EventScreen/EventScreen";
import MuseumScreen from "../MuseumScreen/MuseumScreen";
import SearchScreen from "../SearchScreen/SearchScreen";
import NotificationScreen from "../NotificationScreen/NotificationScreen";
import AccountScreen from "../AccountScreen";
import { BlurView } from "@react-native-community/blur";
import { StyleSheet, View } from "react-native";
import useMe from "../../../hooks/me/useMe";

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  const { data: user } = useMe();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: "absolute" },
        tabBarHideOnKeyboard: true,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurType="dark"
            blurAmount={32}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
      sceneContainerStyle={{
        backgroundColor: "#000000",
      }}
    >
      <Tab.Screen
        name="Event"
        component={EventScreen}
        options={{
          tabBarLabel: "Event",
          tabBarIcon: ({ color, size }) => (
            <Icon name="event" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Museum"
        component={MuseumScreen}
        options={{
          tabBarLabel: "Museum",
          tabBarIcon: ({ color, size }) => (
            <Icon name="place" type="material" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />
      {user && (
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            tabBarLabel: "Notification",
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="notifications"
                type="material"
                color={color}
                size={size}
              />
            ),
          }}
        />
      )}
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
