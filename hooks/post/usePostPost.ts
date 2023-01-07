import { useMutation } from "react-query";
import * as api from "../../api";
import { IPostCoreData } from "../../types";

export function usePostPost() {
  return useMutation({
    mutationFn: (data: IPostCoreData) => api.postPost(data),
  });
}

export default usePostPost;
