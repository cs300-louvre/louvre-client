import * as SecureStore from "expo-secure-store";
import { useContext, useEffect, useState } from "react";
import QuickStartContext from "../contexts/quickStartContext";
import ACTION from "../contexts/quickStartContext/constants";

export default function useQuickStart() {
  const { didQuickStart, quickStartDispatch } = useContext(QuickStartContext);
  const [isLoading, setIsLoading] = useState(true);

  const resetQuickStart = async () => {
    try {
      await SecureStore.setItemAsync("didQuickStart", "false");
      quickStartDispatch({ type: ACTION.reset });
    } catch (error) {
      console.warn(error);
    }
  };

  const finishQuickStart = async () => {
    try {
      await SecureStore.setItemAsync("didQuickStart", "true");
      quickStartDispatch({ type: ACTION.finish });
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    const getQuickStartState = async () => {
      try {
        const result = await SecureStore.getItemAsync("didQuickStart");
        quickStartDispatch(result == "true");
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
      return;
    };
    getQuickStartState();
  }, []);

  return {
    didQuickStart,
    isLoading,
    finishQuickStart,
    resetQuickStart,
  };
}
