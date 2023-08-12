const authRouter = {
  refresh: "/auth/refresh",
  signup: "/auth/signup",
  isMe: "/auth/token",
  googleLogin: "/auth/login/google",
  kakaoLogin: "/auth/login/kakao",
  naverLogin: "/auth/login/naver",
  appleLogin: "/auth/login/apple",
} as const;

const liquorRouter = {
  getScanResult: "/scan/liquor",
  getLiquorDetail: "/liquors/{liquorId}/info",
  postEvaluation: "/liquors/{liquorId}/evaluation",
} as const;

const evaluationRouter = {
  getEvaluation: "/liquors/{liquorId}/evaluation/check",
  getAverEval: "/liquors/{liquorId}/flavor-evaluation/average",
  getMyEval: "/liquors/{liquorId}/flavor-evaluation/person",
} as const;

const reviewRouter = {
  getReviewLatest: "/liquors/{liquorId}/reviews/latest",
  getReviewRating: "/liquors/{liquorId}/reviews/rating",
  getReview: "/liquors/reviews/{reviewId}",
  getComments: "/liquors/reviews/{reviewId}/comments",
} as const;

const commentRouter = {
  postComment: "/liquors/reviews/{reviewId}/comment",
  postReComment: "/liquors/re-comments/{upperCommentId}",
  deleteComment: "/liquors/reviews/{reviewId}/comments/{commentId}",
} as const;

export {
  authRouter,
  liquorRouter,
  evaluationRouter,
  reviewRouter,
  commentRouter,
};
