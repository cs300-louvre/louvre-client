import { useQuery } from "react-query";
import * as api from "../../api";
import { IMuseumGenre } from "../../types";

export function useGetMuseumsByGenre(genre: IMuseumGenre) {
  return useQuery({
    queryKey: ["museum", genre],
    queryFn: async () => {
      const { data } = await api.getMuseumsByGenre(genre);
      return data;
    },
  });
}

export default useGetMuseumsByGenre;
