import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetConversationPreviews(id: string) {
  return useQuery({
    queryKey: ["notification", "chat"],
    queryFn: async () => {
      const { data } = await api.getConversationPreviews();
      return data;
    },
  });
}

export default useGetConversationPreviews;
