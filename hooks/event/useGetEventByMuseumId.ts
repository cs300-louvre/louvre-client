import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetEventByMuseumId(id: string) {
  return useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const { data } = await api.getEventsByMuseumId(id);
      return data;
    },
  });
}

export default useGetEventByMuseumId;
