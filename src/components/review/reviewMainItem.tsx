import { ReviewMain } from "@/interfaces/review";
import StarRate from "@/components/starRating/starRate";
import { colors } from "@/constants/design";
import { financial } from "@/utils/form";
import Profile from "./profile";
import IconThumb from "../icons/thumb";
import IconComment from "../icons/comment";
import { useRouter } from "next/router";
interface Props {
  data?: ReviewMain;
  liquorId?: string;
}
const ReviewMainItem: React.FC<Props> = ({
  data = {
    averageRating: 0,
    content: "",
    createdDate: "",
    goodNumber: 0,
    nickname: "",
    profileImage: "",
    reviewId: 0,
    reviewNumber: 0,
    userId: 0,
    commentNumber: 0,
  },
  liquorId,
}) => {
  const router = useRouter();
  return (
    <div
      className="pb-4"
      onClick={() =>
        router.push(`/comment?liquorId=${liquorId}&reviewId=${data.reviewId}`)
      }
    >
      <Profile
        src={data.profileImage}
        nickname={data.nickname}
        reviewCount={data.reviewNumber}
      />
      <div className="flex items-center justify-between pb-2">
        <div className="flex items-center">
          <div className="flex pr-[2px]">
            <StarRate
              now={data.averageRating * 10}
              max={50}
              maximumStars={5}
              sstarsize="1rem"
              sstarcolor={colors.primary}
              sbackgroundcolor={colors.grey[400]}
            />
          </div>
          <div className="text-gray-600 la-2">
            {financial(data.averageRating + "", 1)}
          </div>
        </div>
        <div className="text-gray-400 la-2">{data.createdDate}</div>
      </div>
      <div className="mb-2 text-gray-600 la-2 line-clamp-4">{data.content}</div>

      <div className="flex items-center justify-end">
        <div className="flex items-center">
          <IconThumb />
          <div className="pl-1 text-gray-600 la-2">{data.goodNumber}</div>
        </div>
        <div className="flex items-center pl-4">
          <IconComment />
          <div className="pl-1 text-gray-600 la-2">{data.commentNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewMainItem;
