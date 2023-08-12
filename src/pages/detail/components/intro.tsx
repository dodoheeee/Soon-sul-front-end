import Image from "next/image";
import IconStar from "@/components/icons/star";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import { colors } from "@/constants/design";
import { DetailRes } from "@/interfaces/liquor";
import { financial, formatNumber } from "@/utils/form";
import StarRate from "@/components/starRating/starRate";
interface IntroProps {
  data?: DetailRes;
}

const Intro: React.FC<IntroProps> = ({ data }) => {
  const { width } = useWindowDimensions();
  return (
    <div className="flex ">
      <div className="object-cover py-2 pl-10 pr-2">
        <Image
          //TODO: 이미지 경로 수정
          src="/img/10.png"
          alt="logo"
          className=""
          width={156}
          height={248}
        />
      </div>
      <div
        className="h-[264px] ml-4 flex justify-center"
        style={{ width: (width ? width : 0) - 172 }}
      >
        <div>
          <div className="pb-6 text-center">
            <div className="flex justify-center pb-1 la-2 text-primary">
              <div className="">내 평점</div>
              <div className="font-bold ">
                {data?.data.liquorPersonalRating}
              </div>
            </div>

            <div className="pb-1 text-gray-600 sl-3">
              {financial(data?.data.averageRating + "", 1)}
            </div>
            <div className="flex justify-center pb-1">
              <StarRate
                now={
                  data?.data.averageRating ? data?.data.averageRating * 10 : 0
                }
                max={50}
                maximumStars={5}
                sstarsize="1rem"
                sstarcolor={colors.primary}
                sbackgroundcolor={colors.grey[400]}
              />
            </div>
            <div className="text-gray-500 la-2">{`${data?.data.ratingNumber}개 평가`}</div>
          </div>
          <div className="pb-6 text-center">
            <div className="text-gray-500 la-2">판매 최저가</div>
            <div className="text-gray-500 b-1">
              {formatNumber(
                data?.data.lowestPrice ? data?.data.lowestPrice : 0
              )}
              원
            </div>
          </div>
          <div className="text-center text-gray-500 la-2">
            <div>{`도수 ${data?.data.alcohol}%`}</div>
            <div>{`용량 ${data?.data.capacity}ml`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
