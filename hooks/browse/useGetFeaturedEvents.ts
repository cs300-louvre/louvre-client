import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetEvents() {
  return useQuery({
    queryKey: ["featured_events"],
    queryFn: async () => {
      const { data } = await api.getEvents();
      return data;
    },
  });
}

export default useGetEvents;
