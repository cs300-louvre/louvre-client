import { useMutation, useQueryClient } from "react-query";
import * as api from "../../api";
import { IEventCoreData } from "../../types";

export function usePatchEvent() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: { eventId: string; data: IEventCoreData }) =>
      api.patchEvent(data.eventId, data.data),
    onSuccess: () => queryClient.invalidateQueries("event"),
  });
}

export default usePatchEvent;
