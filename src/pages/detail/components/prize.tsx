import Title from "./title";
import { useTranslation } from "react-i18next";

interface PrizeProps {
  prize?: string[];
}

import IconCheck from "@/components/icons/check";
const Prize: React.FC<PrizeProps> = ({
  prize = [
    "2017 우리술 품평회 약・청주 부문 우수상 수상",
    "2018 청와대 공식 만찬주",
  ],
}) => {
  const { t } = useTranslation();
  return (
    <div className="p-4 ">
      <Title text={t("common.prize")} />
      <div className="pb-1" />
      <div className="">
        {prize &&
          prize.map((item, index) => {
            return (
              <div key={index} className="flex items-center text-gray-600 la-2">
                <div className=" pr-[7px]">
                  <IconCheck />
                </div>
                {item}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Prize;
