import { createStackNavigator } from "@react-navigation/stack";
import GuestAccountScreen from "./GuestAccountScreen";

const Stack = createStackNavigator();

export default function AccountScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GuestAccountScreen"
        component={GuestAccountScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
