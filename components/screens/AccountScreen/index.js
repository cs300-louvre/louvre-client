import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";

const Stack = createStackNavigator();

export default function AccountScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
