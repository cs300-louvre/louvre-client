import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TopTabNavigator from "../../elements/TabNavigator/TopTabNavigator";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import NotificationTab from "./NotificationTab/NotificationTab";
import { createStackNavigator } from "@react-navigation/stack";
import MuseumDetailScreen from "../MuseumDetailScreen/MuseumDetailScreen";
import EventDetailScreen from "../EventDetailScreen/EventDetailScreen";
import ConversationDetailScreen from "../ConversationDetailScreen/ConversationDetailScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export const NotificationBrowseScreen = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TopTabNavigator {...props} />}
      initialLayout={{
        width: Dimensions.get("window").width,
      }}
      sceneContainerStyle={{
        backgroundColor: "#000000",
        position: "relative",
      }}
      style={{ backgroundColor: "#000000" }}
      screenOptions={{
        swipeEnabled: false,
        animationEnabled: false,
      }}
    >
      <Tab.Screen
        name="MessageNotification"
        options={{ tabBarLabel: "Message" }}
      >
        {() => <NotificationTab type="message" />}
      </Tab.Screen>
      <Tab.Screen name="EventNotification" options={{ tabBarLabel: "Event" }}>
        {() => <NotificationTab type="event" />}
      </Tab.Screen>
      <Tab.Screen name="MuseumNotification" options={{ tabBarLabel: "Museum" }}>
        {() => <NotificationTab type="museum" />}
      </Tab.Screen>
      <Tab.Screen name="System" options={{ tabBarLabel: "System" }}>
        {() => <NotificationTab type="system" />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export const NotificationScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false,
        cardStyle: {
          backgroundColor: "#000000",
        },
      }}
      initialRouteName="NotificationBrowse"
    >
      <Stack.Screen
        name="NotificationBrowse"
        component={NotificationBrowseScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MuseumDetail"
        component={MuseumDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#141414",
          },
          headerTintColor: "#0085FF",
          headerTitleStyle: {
            fontSize: 20,
          },
          title: "Notification",
          detachPreviousScreen: false,
        }}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#141414",
          },
          headerTintColor: "#0085FF",
          headerTitleStyle: {
            fontSize: 20,
          },
          title: "Notification",
          detachPreviousScreen: false,
        }}
      />
      <Stack.Screen
        name="ConversationDetail"
        component={ConversationDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#141414",
          },
          headerTintColor: "#0085FF",
          headerTitleStyle: {
            fontSize: 20,
          },
          title: "Notification",
          detachPreviousScreen: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default NotificationScreen;
