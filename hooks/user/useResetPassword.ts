import { useMutation, useQueryClient } from "react-query";
import * as SecureStore from "expo-secure-store";
import * as api from "../../api";

export function useResetPassword() {
  return useMutation({
    mutationFn: (data: { email: string }) => api.resetPassword(data),
  });
}

export default useResetPassword;
