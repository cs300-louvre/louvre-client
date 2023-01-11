import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetFollowedEvent() {
  return useQuery({
    queryKey: ["me", "followed_events"],
    queryFn: async () => {
      const { data } = await api.getFollowedEvents();
      return data;
    },
  });
}

export default useGetFollowedEvent;
