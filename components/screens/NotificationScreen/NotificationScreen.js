import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TopTabNavigator from "../../elements/TabNavigator/TopTabNavigator";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import NotificationTab from "./NotificationTab/NotificationTab";

const Tab = createMaterialTopTabNavigator();

export default function NotificationScreen() {
  const tabBarHeight = useBottomTabBarHeight();

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
        name="Message"
        component={NotificationTab}
        options={{ tabBarLabel: "Message" }}
      />
      <Tab.Screen
        name="Event"
        component={NotificationTab}
        options={{ tabBarLabel: "Event" }}
      />
      <Tab.Screen
        name="Museum"
        component={NotificationTab}
        options={{ tabBarLabel: "Museum" }}
      />
      <Tab.Screen
        name="System"
        component={NotificationTab}
        options={{ tabBarLabel: "System" }}
      />
    </Tab.Navigator>
  );
}
