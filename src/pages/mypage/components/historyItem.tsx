import IconMore from "@/components/icons/more";
import Image from "next/image";
import TagCategory from "@/components/tag/category";
import IconStar from "@/components/icons/star";
import { colors } from "@/constants/design";
import Divider from "@/pages/detail/components/divider";

interface Props {
  history: {
    scanId: number;
    scanDate: string;
    imageUrl: string;
    liquorId: string;
    name: string;
    liquorCategory: string;
    locationList: string[];
    averageRating: number;
    flagEvaluation: true;
    personalRating: number;
  };
}

const TopArea = ({ history }: Props) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="text-[14px] font-semibold">{history.scanDate}</div>
      <IconMore />
    </div>
  );
};

const HistoryItem = ({ history }: Props) => {
  return (
    <>
      <TopArea history={history} />
      <div className="flex p-4">
        <Image
          src={history.imageUrl}
          width={112}
          height={140}
          alt={"history"}
        />
        <div className="flex-1 pt-4 pl-4">
          <TagCategory category={history.liquorCategory} />
          <div className="text-base font-bold">{history.name}</div>
          {history.locationList.length > 0 &&
            history.locationList.map((item, index) => {
              return (
                <div key={index} className="pt-2 text-gray-500 b-3">
                  {item}
                </div>
              );
            })}
          <div className="flex items-center pt-2 text-gray-500 b-3">
            <IconStar fill={colors.primary} />
            <div>{history.averageRating}</div>
          </div>
          <div className="flex items-center justify-end pt-3 text-white b-3">
            <div className="flex items-center bg-primary rounded-[10px] w-[58px] justify-center">
              <IconStar fill={"white"} />
              <div>{history.averageRating}</div>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default HistoryItem;
