import { createStackNavigator } from "@react-navigation/stack";
import { fakeGetMeResponse } from "../../../mock";
import EventDetailScreen from "../EventDetailScreen/EventDetailScreen";
import MuseumDetailScreen from "../MuseumDetailScreen/MuseumDetailScreen";
import TicketDetailScreen from "../TicketDetailScreen/TicketDetailScreen";
import FollowingTab from "./FollowingTab/FollowingTab";
import GuestAccountScreen from "./GuestAccountScreen";
import LoggedInAccountScreen from "./LoggedInAccountScreen";
import PurchasedTab from "./PurchasedTab/PurchasedTab";
import RatingTab from "./RatingTab/RatingTab";

const Stack = createStackNavigator();

const user = fakeGetMeResponse("user");
export default function AccountScreen() {
  if (!user) return <GuestAccountScreen />;
  else {
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
          name="LoggedInAccountScreen"
          component={LoggedInAccountScreen}
          options={{
            headerShown: true,
            headerBackImage: null,
            headerStyle: {
              backgroundColor: "#1F1F1F",
            },
            headerTitleAlign: "center",
            headerTintColor: "#FFFFFF",
            headerTitleStyle: {
              fontSize: 20,
            },
            title: "Account",
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
            title: "Account",
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
            title: "Account",
            detachPreviousScreen: false,
          }}
        />
        <Stack.Screen
          name="RatingTab"
          component={RatingTab}
          options={{
            headerStyle: {
              backgroundColor: "#141414",
            },
            headerTintColor: "#0085FF",
            headerTitleStyle: {
              fontSize: 20,
            },
            title: "Account",
            detachPreviousScreen: false,
          }}
        />
        <Stack.Screen
          name="FollowingTab"
          component={FollowingTab}
          options={{
            headerStyle: {
              backgroundColor: "#141414",
            },
            headerTintColor: "#0085FF",
            headerTitleStyle: {
              fontSize: 20,
            },
            title: "Account",
            detachPreviousScreen: false,
          }}
        />
        <Stack.Screen
          name="PurchasedTab"
          component={PurchasedTab}
          options={{
            headerStyle: {
              backgroundColor: "#141414",
            },
            headerTintColor: "#0085FF",
            headerTitleStyle: {
              fontSize: 20,
            },
            title: "Account",
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
            title: "Account",
            detachPreviousScreen: false,
          }}
        />
      </Stack.Navigator>
    );
  }
}
