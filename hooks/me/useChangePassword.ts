import { useMutation, useQueryClient } from "react-query";
import * as api from "../../api";

export function useChangePassword() {
  return useMutation({
    mutationFn: (data: { currentPassword: string; newPassword: string }) =>
      api.changePassword(data),
  });
}

export default useChangePassword;
