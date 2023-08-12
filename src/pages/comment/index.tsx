import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderComponent from "@/components/header";
import ReviewMainItem from "@/components/review/reviewMainItem";
import { useGetReview } from "@/biz/review";
import BottomArea from "./components/bottomArea";
import CommentList from "./components/commentList";

const CommentPage: React.FC = () => {
  const router = useRouter();
  const { liquorId, reviewId } = router.query;
  const strReviewId = reviewId as string;
  const [isReCommnet, setIsReCommnet] = useState<{
    status: boolean;
    commentId: number;
    nickName: string;
  }>({ status: false, commentId: 0, nickName: "" });
  const { data, isLoading, isError } = useGetReview(strReviewId);

  useEffect(() => {}, [liquorId, reviewId]);

  return (
    <>
      <HeaderComponent
        title={"댓글"}
        share={false}
        onClick={() => router.push("/detail?id=" + liquorId)}
      />
      <div className="px-4 pt-4 mt-10">
        {data && <ReviewMainItem data={data.data} />}
        <div className="mt-1 border-t border-gray-300" />
      </div>
      <CommentList
        reviewId={strReviewId}
        setReComment={(status, commentId, nickName) =>
          setIsReCommnet({ status, commentId, nickName })
        }
      />
      <BottomArea
        reviewId={strReviewId}
        setReComment={(status, commentId, nickName) =>
          setIsReCommnet({ status, commentId, nickName })
        }
        isReCommnet={isReCommnet}
      />
    </>
  );
};

export default CommentPage;
