import { useQuery } from "react-query";
import * as api from "../../../api";

export function useGetMessagesByConversationId(id: string) {
  return useQuery({
    queryKey: ["chat", id],
    queryFn: async () => {
      const { data } = await api.getMessagesByConversationId(id);
      return data;
    },
  });
}

export default useGetMessagesByConversationId;
