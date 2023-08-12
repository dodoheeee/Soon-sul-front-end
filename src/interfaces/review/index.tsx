export interface IReviewListRes {
  data: ReviewMain[];
  message: string;
  status: number;
  code: string;
}

export interface IReviewRes {
  data: ReviewMain;
  message: string;
  status: number;
  code: string;
}

export interface IReviewCommentListRes {
  data: ReviewComment[];
  message: string;
  status: number;
  code: string;
}

export interface ReviewMain {
  reviewId: number;
  averageRating: number;
  content: string;
  goodNumber: number;
  createdDate: string;
  commentNumber: number;
  userId: number;
  nickname: string;
  profileImage: string;
  reviewNumber: number;
}

export interface ReviewComment {
  userId: number;
  nickname: string;
  profileImage: string;
  reviewId: number;
  commentId: number;
  content: string;
  createdDate: string;
  good: number;
  upperCommentNickname: string;
  flagMySelf: boolean;
}
