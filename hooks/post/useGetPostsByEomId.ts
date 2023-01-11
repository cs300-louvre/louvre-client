import { useQuery } from "react-query";
import * as api from "../../api";
import { IMuseumGenre } from "../../types";

export function useGetPostsByEomId(eomId: string) {
  return useQuery({
    queryKey: ["post", eomId],
    queryFn: async () => {
      const { data } = await api.getPostsByEomId(eomId);
      return data;
    },
  });
}

export default useGetPostsByEomId;
