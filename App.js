import "react-native-gesture-handler";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Fraunces_400Regular } from "@expo-google-fonts/fraunces";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./Router";
import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { QuickStartProvider } from "./contexts/quickStartContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

SplashScreen.preventAutoHideAsync();

console.disableYellowBox = true;

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Fraunces_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) setAppIsReady(true);
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <QuickStartProvider>
        <NavigationContainer onReady={onLayoutRootView}>
          <Router />
        </NavigationContainer>
      </QuickStartProvider>
    </QueryClientProvider>
  );
}
