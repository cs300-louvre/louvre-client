import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetMuseumById(id: string) {
  return useQuery({
    queryKey: ["museum", id],
    queryFn: async () => {
      const { data } = await api.getMuseumById(id);
      return data;
    },
  });
}

export default useGetMuseumById;
