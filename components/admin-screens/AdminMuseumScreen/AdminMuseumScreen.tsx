import { createStackNavigator } from "@react-navigation/stack";
import { fakeMuseumResponse } from "../../../mock";
import { IMuseumResponse } from "../../../types";
import AdminMuseumEditScreen from "../AdminEditScreen/AdminMuseumEditScreen";
import AdminDetailScreen from "../AdminDetailScreen/AdminDetailScreen";
import QRScannerScreen from "../QRScannerScreen/QRScannerScreen";
import useGetMuseumByUserId from "../../../hooks/museum/useGetMuseumByUserId";
import useMe from "../../../hooks/me/useMe";

const Stack = createStackNavigator();

const AdminBrowseMuseumScreen = () => {
  const { data: me } = useMe();
  const { data: museum } = useGetMuseumByUserId(me.userId);
  if (!museum) return null;
  return <AdminDetailScreen item={museum} />;
};

export const AdminMuseumScreen = () => {
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
        name="MuseumBrowse"
        component={AdminBrowseMuseumScreen}
        options={{
          headerShown: true,
          title: "Museum",
          headerStyle: {
            backgroundColor: "#141414",
          },
          headerTitleStyle: {
            color: "#ffffff",
            fontSize: 20,
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="EditMuseum"
        component={AdminMuseumEditScreen}
        options={{
          headerStyle: {
            backgroundColor: "#141414",
          },
          headerTintColor: "#0085FF",
          headerTitleStyle: {
            fontSize: 20,
          },
          title: "Museum",
          detachPreviousScreen: false,
        }}
      />
      <Stack.Screen
        name="MuseumQRScanner"
        component={QRScannerScreen}
        options={{
          headerStyle: {
            backgroundColor: "#141414",
          },
          headerTintColor: "#0085FF",
          headerTitleStyle: {
            fontSize: 20,
          },
          title: "QR scanner",
          detachPreviousScreen: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default AdminMuseumScreen;
