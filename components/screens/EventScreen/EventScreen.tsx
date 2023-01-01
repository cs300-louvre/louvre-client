import { Dimensions, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import EventTab from "./EventTab/EventTab";
import EventChartTab from "./EventChartTab/EventChartTab";
import TopTabNavigator from "../../elements/TabNavigator/TopTabNavigator";
import EventDetailScreen from "../EventDetailScreen/EventDetailScreen";
import { createStackNavigator } from "@react-navigation/stack";
import MuseumDetailScreen from "../MuseumDetailScreen/MuseumDetailScreen";
import ConversationDetailScreen from "../ConversationDetailScreen/ConversationDetailScreen";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const EventBrowseScreen = () => {
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
};

export default function EventScreen() {
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
        name="EventBrowse"
        component={EventBrowseScreen}
        options={{
          headerShown: false,
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
          title: "Event",
          detachPreviousScreen: false,
        }}
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
          title: "Event",
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
          title: "Event",
          detachPreviousScreen: false,
        }}
      />
    </Stack.Navigator>
  );
}
