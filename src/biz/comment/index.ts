import { useQuery, useMutation, useQueryClient } from "react-query";
import { api } from "@/utils/api";
import { commentRouter } from "@/constants/routers";

const fetchWriteComment = async (content: string, reviewId: string) => {
  const { data } = await api.post<{
    code: string;
    data: {};
    message: string;
    status: number;
  }>(commentRouter.postComment.replace("{reviewId}", reviewId), { content });
  return data;
};

const fetchWriteReComment = async (content: string, upperCommentId: number) => {
  const { data } = await api.post<{
    code: string;
    data: {};
    message: string;
    status: number;
  }>(
    commentRouter.postReComment.replace(
      "{upperCommentId}",
      upperCommentId + ""
    ),
    {
      content,
    }
  );
  return data;
};

export const usePostComment = (content: string, reviewId: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => fetchWriteComment(content, reviewId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getComments"]);
    },
  });
};
export const usePostReComment = (content: string, upperCommentId: number) => {
  const queryClient = useQueryClient();
  return useMutation(() => fetchWriteReComment(content, upperCommentId), {
    onSuccess: () => {
      queryClient.invalidateQueries(["getComments"]);
    },
  });
};
