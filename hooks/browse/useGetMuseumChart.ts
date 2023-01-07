import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetMuseumChart() {
  return useQuery({
    queryKey: ["museum_chart"],
    queryFn: async () => {
      const { data } = await api.getMuseums();
      return data;
    },
  });
}

export default useGetMuseumChart;
