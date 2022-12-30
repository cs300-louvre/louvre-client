import { useQuery } from "react-query";
import * as api from "../../api";

export function useMe() {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const { data } = await api.getMe();
      return data;
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}

export default useMe;
