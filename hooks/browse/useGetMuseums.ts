import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetMuseums() {
  return useQuery({
    queryKey: ["browse_museums"],
    queryFn: async () => {
      const { data } = await api.getMuseums();
      return data;
    },
  });
}

export default useGetMuseums;
