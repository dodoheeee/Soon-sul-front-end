import { useRouter } from "next/router";
import IconArrowDown from "@/components/icons/arrow/down";
import AvatarComponent from "@/components/avatar";
import { useState } from "react";
import { usePostComment, usePostReComment } from "@/biz/comment";
interface BottomAreaProps {
  reviewId?: string;
  isReCommnet?: {
    status: boolean;
    commentId: number;
    nickName: string;
  };
  setReComment: (status: boolean, commentId: number, nickname: string) => void;
}

const BottomArea: React.FC<BottomAreaProps> = ({
  reviewId = "",
  isReCommnet,
  setReComment,
}) => {
  const router = useRouter();
  const [content, setContent] = useState<string>("");
  const commnetPostMutation = usePostComment(content, reviewId);
  const reCommnetPostMutation = usePostReComment(
    content,
    isReCommnet?.commentId!
  );

  const onClick = () => {
    if (isReCommnet?.status) {
      reCommnetPostMutation.mutate();
      setContent("");
      setReComment(false, 0, "");
      return;
    }
    commnetPostMutation.mutate();
    setContent("");
  };

  return (
    <div
      className="fixed bottom-0 w-full p-2 bg-white"
      style={{ height: isReCommnet?.status ? "82px" : "56px" }}
    >
      {isReCommnet?.status && (
        <div className="flex items-center justify-between pb-2">
          <div className="flex">
            <div className=" la-2-1">@{isReCommnet?.nickName}</div>
            <div className=" la-2">님에게 답글 남기는 중</div>
          </div>
          <div
            onClick={() => setReComment(false, 0, "")}
            className="text-gray-500 la-3"
          >
            취소
          </div>
        </div>
      )}
      <div className="grid grid-cols-[50px_1fr] justify-between">
        <div className="w-10 h-10 rounded-full bg-[#D9D9D9] mr-2" />
        <div className="grid grid-cols-[1fr_30px] items-center w-full h-10 border rounded-lg border-primary">
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="px-2 text-gray-400 la-1 focus:outline-none placeholder:text-gray-400"
            placeholder="댓글을 입력하세요."
          />

          <div
            onClick={() => onClick()}
            className={`flex items-center justify-center w-6 h-6 mr-4 rounded-full ${
              content.length > 0
                ? "bg-primary"
                : "bg-gray-300 pointer-events-none"
            }`}
          >
            <IconArrowDown fill="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomArea;
