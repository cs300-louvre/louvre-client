import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EventTab from "./EventTab/EventTab";
import EventChartTab from "./EventChartTab/EventChartTab";
import TopTabNavigator from "../../elements/TabNavigator/TopTabNavigator";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

const Tab = createMaterialTopTabNavigator();

export default function EventScreen() {
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
      }}
    >
      <Tab.Screen
        name="EventTab"
        component={EventTab}
        options={{ tabBarLabel: "Featured" }}
      />
      <Tab.Screen
        name="EventChartTab"
        component={EventChartTab}
        options={{ tabBarLabel: "Chart" }}
      />
    </Tab.Navigator>
  );
}
