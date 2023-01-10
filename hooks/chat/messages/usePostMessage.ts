import { useMutation, useQueryClient } from "react-query";
import * as api from "../../../api";
import { IMessageCoreData } from "../../../types";

export function usePostMessage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IMessageCoreData) => api.postMessage(data),
    onSuccess: () => queryClient.invalidateQueries("chat"),
  });
}

export default usePostMessage;
