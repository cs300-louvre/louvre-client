import { createStackNavigator } from "@react-navigation/stack";
import QuickStartScreen from "./components/screens/QuickStartScreen/QuickStartScreen";
import useQuickStart from "./hooks/useQuickStart";
import HomeScreen from "./components/screens/HomeScreen/HomeScreen";
import useMe from "./hooks/me/useMe";
import AdminHomeScreen from "./components/admin-screens/AdminHomeScreen/AdminHomeScreen";

const Stack = createStackNavigator();

export default function Router() {
  const { didQuickStart, isLoading } = useQuickStart();
  const { data: user, isLoading: isLoadingMe } = useMe();

  //TO DO: FLASH OR LOADING INDICATOR
  if (isLoading || isLoadingMe) return null;

  if (!didQuickStart) {
    return <QuickStartScreen />;
  }

  if (!user || (user && user.role === "user")) return <HomeScreen />;
  if (user.role == "manager") return <AdminHomeScreen />;
}
