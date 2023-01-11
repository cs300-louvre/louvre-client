import { useMutation, useQueryClient } from "react-query";
import * as api from "../../api";

export function usePutFollowMuseum() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api.putFollowMuseum(id),
    onSuccess: () => queryClient.invalidateQueries("museum"),
  });
}

export default usePutFollowMuseum;
