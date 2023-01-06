import { useMutation, useQueryClient } from "react-query";
import * as SecureStore from "expo-secure-store";
import * as api from "../../api";
import { IRole } from "../../types";

export function useSignUp() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: {
      email: string;
      password: string;
      name: string;
      role: IRole;
    }) => {
      return api.signUp(data);
    },
    onSuccess: async ({ data }) => {
      await SecureStore.setItemAsync("token", data.token);
      await queryClient.invalidateQueries("me");
    },
  });
}

export default useSignUp;
