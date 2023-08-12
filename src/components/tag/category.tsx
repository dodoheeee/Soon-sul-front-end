import { LIQUORCATEGORY } from "@/constants/biz";

interface Props {
  category: string;
}

const TagCategory: React.FC<Props> = ({ category }) => {
  return (
    <div className="flex">
      <div
        className=" px-3 py-[2px] text-xs font-bold text-white rounded-[14px]"
        style={{
          backgroundColor: LIQUORCATEGORY.find((item) => item.code === category)
            ?.color,
        }}
      >
        {LIQUORCATEGORY.find((item) => item.code === category)?.name}
      </div>
    </div>
  );
};

export default TagCategory;
