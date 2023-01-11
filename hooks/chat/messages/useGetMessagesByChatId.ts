import { useQuery } from "react-query";
import * as api from "../../../api";

export function useGetMessagesByConversationId(id: string) {
  return useQuery({
    queryKey: ["chat", id],
    queryFn: async () => {
      try {
        const { data } = await api.getMessagesByConversationId(id);
        return data;
      } catch (error) {
        return [];
      }
    },
  });
}

export default useGetMessagesByConversationId;
