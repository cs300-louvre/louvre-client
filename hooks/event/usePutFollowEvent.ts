import { useMutation, useQueryClient } from "react-query";
import * as api from "../../api";

export function usePutFollowEvent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api.putFollowEvent(id),
    onSuccess: () => queryClient.invalidateQueries("event"),
  });
}

export default usePutFollowEvent;
