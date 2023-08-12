import TagCategory from "@/components/tag/category";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import IconArrowDown from "@/components/icons/arrow/down";
import { colors } from "@/constants/design";
interface Props {
  category?: string;
  name?: string;
  ingredient?: string;
}

const Info: React.FC<Props> = ({
  category = "",
  name = "",
  ingredient = "",
}) => {
  const [isFold, setIsFold] = useState<boolean>(true);
  const { t } = useTranslation();
  return (
    <div>
      <TagCategory category={category} />
      <div className="pb-1" />
      <div className="text-black hl-6">{name}</div>
      <div className="pb-3" />
      {isFold && (
        <div className="pb-3 text-gray-500 la-3">
          <div className="flex pb-1">
            <div className="w-20 ">소재지</div>
            <div>
              <div>국순당</div>
              <div>강원도 횡성군 둔내면 현천리 81-3</div>
              <div>강원도 횡성군 둔내면 현천리 81-3</div>
            </div>
          </div>
          <div className="flex">
            <div className="w-20">성분</div>
            <div className="flex-1 ">
              <div>{ingredient}</div>
            </div>
          </div>
        </div>
      )}
      <div
        onClick={() => setIsFold(!isFold)}
        className="flex items-center justify-center"
      >
        <div className="pr-1 text-gray-500 la-3">{t("liqour.detail.fold")}</div>
        <IconArrowDown
          width={12}
          height={12}
          fill={colors.grey[500]}
          transform={isFold ? "rotate(0)" : "rotate(180)"}
        />
      </div>
    </div>
  );
};

export default Info;
