import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetMuseumByUserId(userId: string) {
  return useQuery({
    queryKey: ["museum", userId],
    queryFn: async () => {
      const { data } = await api.getMuseumByUserId(userId);
      return data;
    },
  });
}

export default useGetMuseumByUserId;
