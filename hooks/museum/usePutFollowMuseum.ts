import { useMutation } from "react-query";
import * as api from "../../api";

export function usePutFollowMuseum() {
  return useMutation({
    mutationFn: (id: string) => api.putFollowMuseum(id),
  });
}

export default usePutFollowMuseum;
