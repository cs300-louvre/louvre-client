import { Dimensions, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import DashboardStats from "./DashBoardStats/DashboardStats";
import DashboardChart from "./DashboardChart/DashboardChart";
import TopTabNavigator from "../../elements/TabNavigator/TopTabNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const EventBrowseScreen = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => (
                <TopTabNavigator
                    {...props}
                />
            )}
            initialLayout={{
                width: Dimensions.get("window").width,
            }}
            initialRouteName="DashboardChartTab"
            sceneContainerStyle={{
                backgroundColor: "#000000",
                position: "relative",
            }}
            style={{ backgroundColor: "#000000" }}
            screenOptions={{
                swipeEnabled: false,
                animationEnabled: false,
            }}
            backBehavior="initialRoute"
        >
            <Tab.Screen
                name="DashboardStatsTab"
                component={DashboardStats}
                options={{ tabBarLabel: "Stats" }}
            />
            <Tab.Screen
                name="DashboardChartTab"
                component={DashboardChart}
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
        </Stack.Navigator>
    );
}
