import { createStackNavigator } from "@react-navigation/stack";
import AdminBrowseEventScreen from "../AdminBrowseEventScreen/AdminBrowseEventScreen";
import AdminDetailScreen from "../AdminDetailScreen/AdminDetailScreen";
import AdminEventEditScreen from "../AdminEditScreen/AdminEventEditScreen";

const Stack = createStackNavigator();

export const AdminEventScreen = () => {

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
                component={AdminBrowseEventScreen}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: "#141414",
                    },
                    headerTitleStyle: {
                        color: "#ffffff",
                        fontSize: 20,
                    },
                    headerTitleAlign: "center",
                    headerTitle: "Event",
                }}
            />
            <Stack.Screen
                name="EventDetail"
                component={AdminDetailScreen}
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
                name="EditEvent"
                component={AdminEventEditScreen}
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
    )
}
export default AdminEventScreen;
