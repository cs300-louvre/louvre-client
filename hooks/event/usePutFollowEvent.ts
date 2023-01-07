import { useMutation } from "react-query";
import * as api from "../../api";

export function usePutFollowEvents() {
  return useMutation({
    mutationFn: (id: string) => api.putFollowEvent(id),
  });
}

export default usePutFollowEvents;
