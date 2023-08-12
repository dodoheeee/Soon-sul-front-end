import ReviewList from "@/components/review/reviewList";
import Title from "./title";
import { useState } from "react";
import IconArrowDown from "@/components/icons/arrow/down";
import BottomModal from "@/components/modals/bottomModal";
import { useGetReviews } from "@/biz/review";

interface Props {
  liquorId: string;
}

const ReviewContainer: React.FC<Props> = ({ liquorId }) => {
  const [arraySort, setArraySort] = useState<string>("최신순");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { data, isLoading, isError } = useGetReviews(liquorId, arraySort);
  return (
    <div className="p-4">
      <div className="flex items-center justify-between pb-4">
        <div className="flex items-center">
          <Title text="리뷰" />
          <div className="pl-1 text-gray-500 la-3">99</div>
        </div>
        <div
          className="flex items-center px-2 py-1 border border-gray-300 rounded"
          onClick={() => setIsOpen(true)}
        >
          <div className="mr-1 la-3 text-neutral">{arraySort}</div>
          <IconArrowDown transform="rotate(180)" />
        </div>
      </div>
      <ReviewList reviewList={data?.data} liquorId={liquorId} />
      <BottomModal isOpen={isOpen} rounded={false} closeModal={setIsOpen}>
        <div
          className="flex items-center justify-center h-12 border-b b-2"
          onClick={() => setArraySort("최신순")}
        >
          최신순
        </div>
        <div
          className="flex items-center justify-center h-12 b-2"
          onClick={() => setArraySort("평점순")}
        >
          평점순
        </div>
      </BottomModal>
    </div>
  );
};

export default ReviewContainer;
