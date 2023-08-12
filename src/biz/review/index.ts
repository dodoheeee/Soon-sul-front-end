import { useQuery } from "react-query";
import { api } from "@/utils/api";
import {
  IReviewListRes,
  IReviewRes,
  IReviewCommentListRes,
} from "@/interfaces/review";
import { reviewRouter } from "@/constants/routers";
const fetchReviews = async (liquorId: string, kind: string) => {
  const { data } = await api.get<IReviewListRes>(
    kind === "최신순"
      ? reviewRouter.getReviewLatest.replace("{liquorId}", liquorId)
      : reviewRouter.getReviewRating.replace("{liquorId}", liquorId)
  );
  return data;
};

const fetchReview = async (reviewId: string) => {
  const { data } = await api.get<IReviewRes>(
    reviewRouter.getReview.replace("{reviewId}", reviewId)
  );
  return data;
};

const fetchComment = async (reviewId: string) => {
  const { data } = await api.get<IReviewCommentListRes>(
    reviewRouter.getComments.replace("{reviewId}", reviewId)
  );
  return data;
};

export const useGetReviews = (liquorId: string, kind: string) => {
  return useQuery(
    ["getReviews", liquorId, kind],
    () => fetchReviews(liquorId, kind),
    {
      enabled: !!liquorId && !!kind,
    }
  );
};

export const useGetReview = (reviewId: string) => {
  return useQuery(["getReview", reviewId], () => fetchReview(reviewId), {
    enabled: !!reviewId,
  });
};

export const useGetComment = (reviewId: string) => {
  return useQuery(["getComments", reviewId], () => fetchComment(reviewId), {
    enabled: !!reviewId,
  });
};
