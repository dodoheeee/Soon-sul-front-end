import { useTranslation } from "react-i18next";
import Title from "@/pages/detail/components/title";
import { useState } from "react";
import StarRate from "@/components/starRating/starRate";
import { useStarRating } from "@/hooks/useStarRating";
import { colors } from "@/constants/design";
const ReviewPost = ({
  reviewContent,
  setReviewContent,
}: {
  reviewContent: string;
  setReviewContent: (v: string) => void;
}) => {
  const { t } = useTranslation();
  return (
    <div className="p-4 ">
      <Title text={t("common.ReviewPost")} />
      <div className="pb-1" />
      <textarea
        className="w-full p-2 border border-gray-300 rounded-[4px] placeholder:la-2 placeholder:text-gray-400 h-[128px] focus:outline-none la-2 text-gray-400"
        placeholder={t("common.ReviewPost.placeholder")}
        value={reviewContent}
        onChange={(e) => setReviewContent(e.target.value)}
        maxLength={500}
      />
      <div className="text-right text-gray-500 la-3">
        {String(reviewContent).length}/500
      </div>
    </div>
  );
};

export default ReviewPost;
