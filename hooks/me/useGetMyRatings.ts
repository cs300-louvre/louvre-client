import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetMyRatings() {
  return useQuery({
    queryKey: ["me", "rating"],
    queryFn: async () => {
      const { data } = await api.getMyRatings();
      return data;
    },
    refetchOnWindowFocus: false,
  });
}

export default useGetMyRatings;
