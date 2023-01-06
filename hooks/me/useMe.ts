import { useQuery } from "react-query";
import * as api from "../../api";
import * as SecureStore from "expo-secure-store";

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      try {
        const { data } = await api.getMe();
        return data;
      } catch (error) {
        return null;
      }
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
    retry: false,
    onError: () => SecureStore.deleteItemAsync("token"),
  });
}

export default useMe;
