import { useGetComment } from "@/biz/review";
import Comment from "./comment";

interface CommentListProps {
  reviewId: string;
  setReComment: (status: boolean, commentId: number, nickName: string) => void;
}

const CommentList: React.FC<CommentListProps> = ({
  reviewId,
  setReComment,
}) => {
  const { data, isLoading, isError } = useGetComment(reviewId);
  return (
    <>
      {data &&
        data.data.map((item) => {
          return (
            <Comment
              data={item}
              key={item.commentId}
              setReComment={setReComment}
            />
          );
        })}
    </>
  );
};

export default CommentList;
