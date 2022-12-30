import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetFollowedMuseum() {
  return useQuery({
    queryKey: ["museum", "followed"],
    queryFn: async () => {
      const { data } = await api.getFollowedMuseums();
      return data;
    },
    refetchOnWindowFocus: false,
  });
}

export default useGetFollowedMuseum;
