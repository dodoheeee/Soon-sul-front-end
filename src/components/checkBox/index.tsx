import IconCheckboxOff from "@/components/icons/checkbox/off";
import IconCheckboxOn from "@/components/icons/checkbox/on";
import { colors } from "@/constants/design";
import { Console } from "@/utils/console";

type Props = {
  idx: number;
  checkList: readonly boolean[];
  onChange: () => void;
  label?: string;
};

const CheckBox: React.FC<Props> = ({
  idx,
  checkList,
  onChange,
  label = "",
}) => {
  return (
    <div className="flex items-center">
      {checkList[idx] ? (
        <IconCheckboxOn
          fill={colors.primary}
          stroke={colors.primary}
          onClick={() => onChange()}
        />
      ) : (
        <IconCheckboxOff onClick={() => onChange()} />
      )}
      <div className="pl-1 la-1">{label}</div>
    </div>
  );
};

export default CheckBox;
