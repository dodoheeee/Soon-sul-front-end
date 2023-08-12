import { ButtonHTMLAttributes } from "react";
import { colors } from "@/constants/design";

interface BottomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const BottomButtom: React.FC<BottomButtonProps> = ({ text, ...props }) => {
  return (
    <button
      className="text-white la-1 flex w-full h-[56px] justify-center items-center"
      style={{
        backgroundColor: props.disabled ? colors.grey[300] : colors.primary,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export default BottomButtom;
