import { Dimensions } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import MuseumTab from "./MuseumTab/MuseumTab";
import MuseumChartTab from "./MuseumChartTab/MuseumChartTab";
import MuseumTabNavigator from "./MuseumTabNavigator";

const Tab = createMaterialTopTabNavigator();

export default function MuseumScreen() {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <Tab.Navigator
      tabBar={(props) => <MuseumTabNavigator {...props} />}
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
        name="MuseumTab"
        component={MuseumTab}
        options={{ tabBarLabel: "Featured" }}
      />
      <Tab.Screen
        name="MuseumChartTab"
        component={MuseumChartTab}
        options={{ tabBarLabel: "Chart" }}
      />
    </Tab.Navigator>
  );
}
