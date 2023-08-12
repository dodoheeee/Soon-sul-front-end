import Image from "next/image";
import IconStar from "@/components/icons/star";
import { colors } from "@/constants/design";
import useWindowDimensions from "@/hooks/useWindowDimensions";
const LiquorCard = () => {
  return <></>;
};

const LoveLiquorWeek: React.FC = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="p-4">
      <div className="pb-4 text-xs font-bold">이번주 가장 사랑받는 전통주</div>
      <div
        className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide"
        style={{ width: width! - 32 }}
      >
        <div className="flex">
          <div className=" w-[96px] mr-2">
            <div className=" p-[2px] relative">
              <Image src="/img/10.png" alt="" width={96} height={120} />
              <div className="absolute top-0 w-5 h-5 text-center text-white rounded-full bg-primary b-2">
                1
              </div>
            </div>
            <div className="text-center text-gray-600 la-3 line-clamp-1">
              국숙당 백세주 리미티드 에디션
            </div>
            <div className="flex items-center justify-center">
              <IconStar fill={colors.primary} />
              <div className="text-gray-600 la-2">5.0</div>
            </div>
          </div>
          <div className=" w-[96px] mr-2">
            <div className=" p-[2px] relative">
              <Image src="/img/10.png" alt="" width={96} height={120} />
              <div className="absolute top-0 w-5 h-5 text-center text-white rounded-full bg-primary b-2">
                2
              </div>
            </div>
            <div className="text-center text-gray-600 la-3 line-clamp-1">
              국숙당 백세주 리미티드 에디션
            </div>
            <div className="flex items-center justify-center">
              <IconStar fill={colors.primary} />
              <div className="text-gray-600 la-2">5.0</div>
            </div>
          </div>
          <div className=" w-[96px] mr-2">
            <div className=" p-[2px] relative">
              <Image src="/img/10.png" alt="" width={96} height={120} />
              <div className="absolute top-0 w-5 h-5 text-center text-white rounded-full bg-primary b-2">
                3
              </div>
            </div>
            <div className="text-center text-gray-600 la-3 line-clamp-1">
              국숙당 백세주 리미티드 에디션
            </div>
            <div className="flex items-center justify-center">
              <IconStar fill={colors.primary} />
              <div className="text-gray-600 la-2">5.0</div>
            </div>
          </div>
          <div className=" w-[96px] mr-2">
            <div className=" p-[2px] relative">
              <Image src="/img/10.png" alt="" width={96} height={120} />
              <div className="absolute top-0 w-5 h-5 text-center text-white rounded-full bg-primary b-2">
                4
              </div>
            </div>
            <div className="text-center text-gray-600 la-3 line-clamp-1">
              국숙당 백세주 리미티드 에디션
            </div>
            <div className="flex items-center justify-center">
              <IconStar fill={colors.primary} />
              <div className="text-gray-600 la-2">5.0</div>
            </div>
          </div>
          <div className=" w-[96px] mr-2">
            <div className=" p-[2px] relative">
              <Image src="/img/10.png" alt="" width={96} height={120} />
              <div className="absolute top-0 w-5 h-5 text-center text-white rounded-full bg-primary b-2">
                5
              </div>
            </div>
            <div className="text-center text-gray-600 la-3 line-clamp-1">
              국숙당 백세주 리미티드 에디션
            </div>
            <div className="flex items-center justify-center">
              <IconStar fill={colors.primary} />
              <div className="text-gray-600 la-2">5.0</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveLiquorWeek;
