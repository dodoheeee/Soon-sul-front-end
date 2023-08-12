import IconNear from "@/components/icons/near";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Image from "next/image";
import IconArrowDown from "@/components/icons/arrow/down";
const promotion = [
  "수도권",
  "강원도",
  "경상남도",
  "경상북도",
  "광주광역시",
  "대구광역시",
  "대전광역시",
  "부산광역시",
  "세종시",
  "울산광역시",
  "인천광역시",
  "전라남도",
  "전라북도",
  "제주도",
  "충청남도",
  "충청북도",
];

const Promotion: React.FC = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="text-xs font-bold ">이달의 프로모션</div>
        <div className="flex items-center">
          <div className="text-gray-500 la-3">더보기</div>
          <IconArrowDown transform="rotate(90)" width={12} height={12} />
        </div>
      </div>
      <div className="pb-4 " />
      <div className="w-full">
        <div
          className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide"
          style={{ width: width! - 32 }}
        >
          <div className="inline-block pr-2 w-[144px]">
            <Image
              src={"/img/promotion.png"}
              width={144}
              height={108}
              alt="promotion"
            />
            <div className="text-center text-gray-600 la-3 line-clamp-1">
              이달의 프로모션 지금 사랑받는 지역술 1주년
            </div>
            <div className="text-center text-gray-600 la-3 ">
              2099.00.20~2099.00.20
            </div>
          </div>
          <div className="inline-block pr-2 w-[144px]">
            <Image
              src={"/img/promotion.png"}
              width={144}
              height={108}
              alt="promotion"
            />
            <div className="text-center text-gray-600 la-3 line-clamp-1">
              이달의 프로모션 지금 사랑받는 지역술 1주년
            </div>
            <div className="text-center text-gray-600 la-3 ">
              2099.00.20~2099.00.20
            </div>
          </div>
          <div className="inline-block pr-2 w-[144px]">
            <Image
              src={"/img/promotion.png"}
              width={144}
              height={108}
              alt="promotion"
            />
            <div className="text-center text-gray-600 la-3 line-clamp-1">
              이달의 프로모션 지금 사랑받는 지역술 1주년
            </div>
            <div className="text-center text-gray-600 la-3 ">
              2099.00.20~2099.00.20
            </div>
          </div>
          <div className="inline-block pr-2 w-[144px]">
            <Image
              src={"/img/promotion.png"}
              width={144}
              height={108}
              alt="promotion"
            />
            <div className="text-center text-gray-600 la-3 line-clamp-1">
              이달의 프로모션 지금 사랑받는 지역술 1주년
            </div>
            <div className="text-center text-gray-600 la-3 ">
              2099.00.20~2099.00.20
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
