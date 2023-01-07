import { useQuery } from "react-query";
import * as api from "../../api";

export function useGetEventChart() {
  return useQuery({
    queryKey: ["event_chart"],
    queryFn: async () => {
      const { data } = await api.getEvents();
      return data;
    },
  });
}

export default useGetEventChart;
