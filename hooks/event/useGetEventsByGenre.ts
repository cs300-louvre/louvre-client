import { useQuery } from "react-query";
import * as api from "../../api";
import { IEventGenre } from "../../types";

export function useGetEventsByGenre(genre: IEventGenre) {
  return useQuery({
    queryKey: ["event", genre],
    queryFn: async () => {
      const { data } = await api.getEventsByGenre(genre);
      return data;
    },
  });
}

export default useGetEventsByGenre;
