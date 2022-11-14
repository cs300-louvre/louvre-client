import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "@react-native-community/blur";
import { Icon } from "@rneui/themed";
import EventScreen from "../EventScreen/EventScreen";
import MuseumScreen from "../MuseumScreen/MuseumScreen";
import SearchScreen from "../SearchScreen/SearchScreen";
import NotificationScreen from "../NotificationScreen/NotificationScreen";
import AccountScreen from "../AccountScreen";


const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: "absolute", backgroundColor: "black" },
        // tabBarBackground: () => (
        //   <BlurView
        //     blurType="dark"
        //     blurAmount={32}
        //     reducedTransparencyFallbackColor="black"
        //   />
        // ),
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
      {/* TODO: CHANGE INTO ACCOUNT SCREEN */}
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
