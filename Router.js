import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import QuickStartScreen from "./components/screens/QuickStartScreen/QuickStartScreen";
import useQuickStart from './hooks/useQuickStart';
import HomeScreen from './components/screens/HomeScreen/HomeScreen';
import EventDetailScreen from './components/screens/EventDetailScreen/EventDetailScreen';

const Stack = createStackNavigator();

export default function Router() {
  const { didQuickStart, isLoading } = useQuickStart();

  //TO DO: FLASH OR LOADING INDICATOR
  if (isLoading) return null;

  if (!didQuickStart) {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="QuickStart" component={QuickStartScreen} />
      </Stack.Navigator>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        ...TransitionPresets.SlideFromRightIOS
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} />
      <Stack.Screen
        name="EventDetail"
        component={EventDetailScreen}
        options={{
          headerStyle: {
            backgroundColor: '#141414',
          },
          headerTintColor: '#0085FF',
          headerTitleStyle: {
            fontSize: 20
          },
          title: "Event",
        }}
      />
    </Stack.Navigator>
  );
}