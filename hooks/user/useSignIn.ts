import { useMutation, useQueryClient } from "react-query";
import * as SecureStore from "expo-secure-store";
import * as api from "../../api";

export function useSignIn() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { email: string; password: string }) => api.signIn(data),
    onSuccess: async ({ data }) => {
      await SecureStore.setItemAsync("token", data.token);
      queryClient.invalidateQueries("me");
    },
  });
}

export default useSignIn;
