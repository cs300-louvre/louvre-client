import { useQuery } from "react-query";
import * as api from "../../api";
import { IMuseumGenre } from "../../types";

export function useGetTicketByTicketId(ticketId: string) {
  return useQuery({
    queryKey: ["ticket", ticketId],
    queryFn: async () => {
      const { data } = await api.getTicketById(ticketId);
      return data;
    },
    staleTime: Infinity,
  });
}

export default useGetTicketByTicketId;
