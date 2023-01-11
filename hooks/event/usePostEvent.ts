import { useMutation, useQueryClient } from "react-query";
import * as api from "../../api";
import { IEventCoreData } from "../../types";

export function usePostEvent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IEventCoreData) => api.postEvent(data),
    onSuccess: () => queryClient.invalidateQueries("event"),
  });
}

export default usePostEvent;
