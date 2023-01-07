import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetEventById(id: string) {
  return useQuery({
    queryKey: ["event", id],
    queryFn: async () => {
      const { data } = await api.getEventByEventId(id);
      return data;
    },
  });
}

export default useGetEventById;
