import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetFollowedMuseum() {
  return useQuery({
    queryKey: ["me", "followed_museums"],
    queryFn: async () => {
      const { data } = await api.getFollowedMuseums();
      return data;
    },
  });
}

export default useGetFollowedMuseum;
