import IconSearch from "@/components/icons/search";
import IconClose from "@/components/icons/close";
import { colors } from "@/constants/design";
import { useState } from "react";

const SearchPage: React.FC = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="p-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="전통주 혹은 차를 검색하세요"
          className="relative w-full h-10 px-2 pl-[56px] text-gray-400 border border-gray-400 rounded-md placeholder:text-[14px]  placeholder:text-gray-400 focus:outline-none focus:border-primary b-2"
        />
        <div className="absolute pt-4 pl-4 top-1">
          <IconSearch fill={colors.grey[400]} />
        </div>
        <div className="absolute right-0 pt-4 pr-6 top-2">
          {search && (
            <IconClose fill={colors.grey[500]} onClick={() => setSearch("")} />
          )}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
