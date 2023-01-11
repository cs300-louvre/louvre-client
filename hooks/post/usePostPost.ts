import { useMutation, useQueryClient } from "react-query";
import * as api from "../../api";
import { IPostCoreData } from "../../types";

export function usePostPost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: IPostCoreData) => api.postPost(data),
    onSuccess: () => queryClient.invalidateQueries("post"),
  });
}

export default usePostPost;
