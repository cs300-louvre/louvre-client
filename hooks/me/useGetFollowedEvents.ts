import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetFollowedEvent() {
  return useQuery({
    queryKey: ["event", "followed"],
    queryFn: async () => {
      const { data } = await api.getFollowedEvents();
      return data;
    },
    refetchOnWindowFocus: false,
  });
}

export default useGetFollowedEvent;
