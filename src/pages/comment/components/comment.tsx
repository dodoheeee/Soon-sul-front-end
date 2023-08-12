import AvatarComponent from "@/components/avatar";
import { ReviewComment } from "@/interfaces/review";
import IconThumb from "@/components/icons/thumb";
import { colors } from "@/constants/design";

interface CommentProps {
  data?: ReviewComment;
  setReComment: (status: boolean, commentId: number, nickName: string) => void;
}

const Comment: React.FC<CommentProps> = ({ data, setReComment }) => {
  return (
    <>
      <div className="grid grid-cols-[48px_1fr_32px] p-4 items-center">
        <AvatarComponent
          size={40}
          src={data?.profileImage ? (data?.profileImage as string) : ""}
          alt="profile"
        />
        <div>
          <div className="flex items-center pb-1">
            <div className="la-2-1">{data?.nickname}</div>
            {data?.flagMySelf && (
              <div className="ml-2 text-primary la-2 border border-primary rounded-[10px] px-3">
                작성자
              </div>
            )}
            <div className="ml-2 text-gray-400 la-2">{data?.createdDate}</div>
          </div>
          <div className="text-gray-600 la-2 pb-[6px]">{data?.content}</div>
          <div className="flex items-center">
            <div
              onClick={() =>
                setReComment(
                  true,
                  data?.commentId ? data?.commentId : 0,
                  data?.nickname!
                )
              }
              className="mr-4 text-gray-400 la-2"
            >
              답글 달기
            </div>
            <IconThumb
              //TODO 백엔드에서 좋아요 여부를 받아와서 true/false를 넣어줘야 함
              fill={true ? colors.grey[600] : colors.primary}
            />
            <div className="ml-1 text-right text-gray-600 la-2">
              {data?.good}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Comment;
