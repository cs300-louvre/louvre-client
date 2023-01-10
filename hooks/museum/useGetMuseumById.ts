import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetMuseumById(id: string, enabled?: boolean) {
  return useQuery({
    queryKey: ["museum", id],
    queryFn: async () => {
      const { data } = await api.getMuseumById(id);
      return data;
    },
    enabled: enabled ? enabled : true,
  });
}

export default useGetMuseumById;
