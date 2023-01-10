import { useMutation, useQueryClient } from "react-query";
import * as api from "../../api";
import { IEOM, IPostCoreData } from "../../types";

export function useCheckin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (ticketId: string) => api.checkIn(ticketId),
    onSuccess: () => {
      queryClient.invalidateQueries("ticket");
    },
  });
}

export default useCheckin;
