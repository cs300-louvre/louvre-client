import { useQuery } from "react-query";
import * as api from "../../api";
import { IEventGenre } from "../../types";

export function useGetRatingsByEomId(id: string) {
  return useQuery({
    queryKey: ["rating", id],
    queryFn: async () => {
      const { data } = await api.getRatingsByEomId(id);
      return data;
    },
  });
}

export default useGetRatingsByEomId;
