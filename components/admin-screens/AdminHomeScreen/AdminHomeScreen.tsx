import {
    createBottomTabNavigator,
    useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";

import { BlurView } from "@react-native-community/blur";
import { StyleSheet, View } from "react-native";
import { fakeGetMeResponse } from "../../../mock";
import AdminDashboardScreen from "../AdminDashboardScreen/AdminDashboardScreen";
import AdminEventScreen from "../AdminEventScreen/AdminEventScreen";
import AdminMuseumScreen from "../AdminMuseumScreen/AdminMuseumScreen";
import AdminNotificationScreen from "../AdminNotificationScreen/AdminNotificationScreen";
import AdminAccountScreen from "../AdminAccountScreen/AdminAccountScreen";

const Tab = createBottomTabNavigator();
const user = fakeGetMeResponse("user");

export default function AdminHomeScreen() {
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
        >
            <Tab.Screen
                name="Dashboard"
                component={AdminDashboardScreen}
                options={{
                    tabBarLabel: "Dasgboard",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="pie-chart-1" type="fontisto" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Event"
                component={AdminEventScreen}
                options={{
                    tabBarLabel: "Event",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="event" type="material" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Museum"
                component={AdminMuseumScreen}
                options={{
                    tabBarLabel: "Museum",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="place" type="material" color={color} size={size} />
                    ),
                }}
            />
            {user && (
                <Tab.Screen
                    name="Notification"
                    component={AdminNotificationScreen}
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
                component={AdminAccountScreen}
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
