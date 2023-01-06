import { useMutation, useQueryClient } from "react-query";
import * as SecureStore from "expo-secure-store";
import Cookies from "js-cookie";

export function useSignOut() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      return SecureStore.deleteItemAsync("token");
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries("me");
    },
  });
}

export default useSignOut;
