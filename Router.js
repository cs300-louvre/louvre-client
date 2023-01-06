import { createStackNavigator } from "@react-navigation/stack";
import QuickStartScreen from "./components/screens/QuickStartScreen/QuickStartScreen";
import useQuickStart from "./hooks/useQuickStart";
import HomeScreen from "./components/screens/HomeScreen/HomeScreen";
import useMe from "./hooks/me/useMe";

const Stack = createStackNavigator();

export default function Router() {
  const { didQuickStart, isLoading } = useQuickStart();

  //TO DO: FLASH OR LOADING INDICATOR
  if (isLoading) return null;

  if (!didQuickStart) {
    return <QuickStartScreen />;
  }

  return <HomeScreen />;
}
