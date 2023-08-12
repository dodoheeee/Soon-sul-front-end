import HeaderComponent from "@/components/header";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import TagCategory from "@/components/tag/category";
import Divider from "../detail/components/divider";
import StarRank from "./components/starRank";
import Evaluation from "./components/evaluation";
import ReviewPost from "./components/reviewPost";
import BottomButtom from "@/components/buttons/bottomButton";
import { usePostEvaluation } from "@/biz/liquor";

const ReviewPage: React.FC = () => {
  const router = useRouter();
  const { liquorId, name, category, salePlace } = router.query;
  const [idDetail, setIdDetail] = useState<string>("");
  const [categoryDetail, setCategoryDetail] = useState<string>("");
  const [reviewContent, setReviewContent] = useState<string>("");
  const [liquorPersonalRating, setLiquorPersonalRating] = useState<number>(0);
  const [evaluation, setEvaluation] = useState<{
    acidity: number | number[];
    carbonicAcid: number | number[];
    density: number | number[];
    heavy: number | number[];
    scent: number | number[];
    sweetness: number | number[];
  }>({
    acidity: 0,
    carbonicAcid: 0,
    density: 0,
    heavy: 0,
    scent: 0,
    sweetness: 0,
  });
  const postEvaluationMutation = usePostEvaluation(
    { liquorPersonalRating, reviewContent, ...evaluation },
    idDetail,
    () => router.push("/detail?id=" + idDetail)
  );

  useEffect(() => {
    if (liquorId) {
      setIdDetail(liquorId as string);
    }
    if (category) {
      setCategoryDetail(category as string);
    }
  }, [liquorId]);

  return (
    <>
      <HeaderComponent
        title={"리뷰 등록"}
        share={false}
        onClick={() => router.push("/detail?id=" + idDetail)}
      />
      <div className="p-4 mt-12">
        <div className="flex justify-center">
          <Image
            //TODO: 이미지 경로 수정
            src={"https://thumb.mt.co.kr/06/2021/11/2021111911385598861_1.jpg"}
            alt="logo"
            width={90}
            height={120}
          />
          <div className="py-4 pl-4">
            <TagCategory category={categoryDetail} />
            <div className="pt-1 la-1">{name}</div>
            <div className="la-2 text-neutral pt-7">{salePlace}</div>
          </div>
        </div>
      </div>
      <Divider />
      <StarRank
        liquorPersonalRating={liquorPersonalRating}
        setLiquorPersonalRating={setLiquorPersonalRating}
      />
      <Divider />
      <Evaluation evaluation={evaluation} setEvaluation={setEvaluation} />
      <Divider />
      <ReviewPost
        reviewContent={reviewContent}
        setReviewContent={setReviewContent}
      />
      <Divider />
      <div className="pb-[56px]" />
      <div className="fixed bottom-0 w-full">
        <BottomButtom
          text={"완료"}
          onClick={() => postEvaluationMutation.mutate()}
        />
      </div>
    </>
  );
};

export default ReviewPage;
