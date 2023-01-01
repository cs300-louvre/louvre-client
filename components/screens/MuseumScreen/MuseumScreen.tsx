import { Dimensions, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import MuseumTab from "./MuseumTab/MuseumTab";
import MuseumChartTab from "./MuseumChartTab/MuseumChartTab";
import TopTabNavigator from "../../elements/TabNavigator/TopTabNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import MuseumDetailScreen from "../MuseumDetailScreen/MuseumDetailScreen";
import EventDetailScreen from "../EventDetailScreen/EventDetailScreen";
import ConversationDetailScreen from "../ConversationDetailScreen/ConversationDetailScreen";
import TicketDetailScreen from "../TicketDetailScreen/TicketDetailScreen";

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const MuseumBrowseScreen = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <TopTabNavigator
          {...props}
          LeftComponent={({ style }) => <Text style={style}>Genres</Text>}
        />
      )}
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
};

export default function MuseumScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        animationEnabled: false,
        cardStyle: {
          backgroundColor: "#000000",
        },
      }}
    >
      <Stack.Screen
        name="MuseumBrowse"
        component={MuseumBrowseScreen}
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
          title: "Museum",
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
          title: "Museum",
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
          title: "Museum",
          detachPreviousScreen: false,
        }}
      />
      <Stack.Screen
        name="TicketDetail"
        component={TicketDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: "#141414",
          },
          headerTintColor: "#0085FF",
          headerTitleStyle: {
            fontSize: 20,
          },
          title: "Museum",
          detachPreviousScreen: false,
        }}
      />
    </Stack.Navigator>
  );
}
