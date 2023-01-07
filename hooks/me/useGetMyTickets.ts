import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetMyTickets() {
  return useQuery({
    queryKey: ["me", "ticket"],
    queryFn: async () => {
      const { data } = await api.getMyTickets();
      return data;
    },
    refetchOnWindowFocus: false,
  });
}

export default useGetMyTickets;
