import { useTranslation } from "react-i18next";
import Title from "@/pages/detail/components/title";
import { useState, useEffect } from "react";
import StarRate from "@/components/starRating/starRate";
import { useStarRating } from "@/hooks/useStarRating";
import { colors } from "@/constants/design";

const StarRank = ({
  liquorPersonalRating,
  setLiquorPersonalRating,
}: {
  liquorPersonalRating: number;
  setLiquorPersonalRating: (v: number) => void;
}) => {
  const { t } = useTranslation();
  const { formData, changeHandler, starBoxRef } = useStarRating();
  useEffect(() => {
    if (formData.now) {
      setLiquorPersonalRating(Number(formData.now) / 10);
    }
  }, [formData.now]);
  return (
    <div className="p-4 ">
      <Title text={t("common.starRank")} />
      <div className="pb-1" />
      <div>
        <div className="flex justify-center pb-2 text-gray-600 hl-5">
          {Number(formData.now) / 10}
        </div>
        <div ref={starBoxRef} className="pb-1">
          <StarRate
            now={+formData.now}
            max={50}
            maximumStars={5}
            sstarsize="3rem"
            sstarcolor={colors.primary}
            sbackgroundcolor={colors.grey[400]}
          />
        </div>
        <div className="flex justify-center la-2 text-neutral">
          탭 또는 슬라이드로 별점 선택이 가능합니다.
        </div>
      </div>
    </div>
  );
};

export default StarRank;
