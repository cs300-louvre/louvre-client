import { useMutation } from "react-query";
import * as api from "../../api";
import { IRatingCoreData } from "../../types";

export function usePostRating() {
  return useMutation({
    mutationFn: (data: IRatingCoreData) => api.postRating(data),
  });
}

export default usePostRating;
