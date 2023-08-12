import { ReviewMain } from "@/interfaces/review";
import ReviewMainItem from "./reviewMainItem";

interface Props {
  reviewList?: ReviewMain[];
  liquorId?: string;
}

const ReviewList: React.FC<Props> = ({ reviewList = [], liquorId }) => {
  return (
    <div>
      {reviewList &&
        reviewList.length > 0 &&
        reviewList.map((v, i) => {
          return (
            <div>
              <ReviewMainItem key={i} data={v} liquorId={liquorId} />
              {i !== reviewList.length - 1 && (
                <div className="mb-4 border-b border-gray-200" />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default ReviewList;
