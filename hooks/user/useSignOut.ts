import { useMutation, useQueryClient } from "react-query";
import * as SecureStore from "expo-secure-store";
import * as api from "../../api";

export function useSignOut() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => SecureStore.deleteItemAsync("token"),
    onSuccess: () => queryClient.invalidateQueries("me"),
  });
}

export default useSignOut;
