import IconNear from "@/components/icons/near";
import useWindowDimensions from "@/hooks/useWindowDimensions";
const LiquorCard = () => {
  return <></>;
};

const city = [
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

const LoveLiquorNow: React.FC = () => {
  const { width } = useWindowDimensions();
  return (
    <div className="p-4">
      <div className="text-xs font-bold ">지금 사랑받는 전통주</div>
      <div className="pb-4 " />
      <div className="w-full">
        <div
          className="flex overflow-x-scroll overflow-y-hidden scrollbar-hide"
          style={{ width: width! - 32 }}
        >
          <div className="inline-block pr-2">
            <div className=" w-[60px] h-[60px] border border-primary rounded-full flex justify-center items-center la-2 text-white bg-primary">
              <div className="">
                <div className="flex justify-center">
                  <IconNear fill="white" />
                </div>
                <div>내 주변</div>
              </div>
            </div>
          </div>
          {city.map((item, index) => (
            <div className="inline-block pr-2" key={index}>
              <div className=" w-[60px] h-[60px] border border-primary rounded-full flex justify-center items-center la-2 text-primary">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveLiquorNow;
