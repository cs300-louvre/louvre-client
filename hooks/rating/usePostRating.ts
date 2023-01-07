import { useMutation, useQueryClient } from "react-query";
import * as api from "../../api";
import { IRatingCoreData } from "../../types";

export function usePostRating() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IRatingCoreData) => api.postRating(data),
    onSuccess: () => queryClient.invalidateQueries("rating"),
  });
}

export default usePostRating;
