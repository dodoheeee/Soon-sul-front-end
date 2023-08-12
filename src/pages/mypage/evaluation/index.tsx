import HeaderComponent from "@/components/header";
import { useRouter } from "next/router";
import { useState } from "react";
import IconSearch from "@/components/icons/search";
import IconClose from "@/components/icons/close";
import IconArrowDown from "@/components/icons/arrow/down";
import { colors } from "@/constants/design";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import BottomModal from "@/components/modals/bottomModal";
const EvaluationPage: React.FC = () => {
  const [search, setSearch] = useState("");

  const { width } = useWindowDimensions();
  const router = useRouter();
  const [arraySort, setArraySort] = useState<string>("최신순");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const history: {
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
  }[] = [
    {
      scanId: 1,
      scanDate: "2023.08.10",
      imageUrl: "/img/10.png",
      liquorId: "L00010001",
      name: "고흥 풍양 유자막걸리",
      liquorCategory: "L001",
      locationList: ["청정영농조합법"],
      averageRating: 4.5,
      flagEvaluation: true,
      personalRating: 4.5,
    },
  ];

  return (
    <>
      <HeaderComponent
        title={"나의 평가"}
        share={false}
        onClick={() => router.push("/mypage")}
      />
      <div className="px-4 pt-16 pb-4 ">
        <div className="relative">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-10 px-2 pl-[56px] text-gray-400 border border-gray-400 rounded-md placeholder:text-[14px]  placeholder:text-gray-400 focus:outline-none focus:border-primary b-2"
            style={{ width: width! - 32 }}
          />
        </div>
        <div className="absolute pt-16 pl-4 top-1">
          <IconSearch fill={colors.grey[400]} />
        </div>
        <div className="absolute right-0 pt-16 pr-6 top-2">
          {search && (
            <IconClose fill={colors.grey[500]} onClick={() => setSearch("")} />
          )}
        </div>
      </div>
    </>
  );
};

export default EvaluationPage;
