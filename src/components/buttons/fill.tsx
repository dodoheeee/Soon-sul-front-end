import { colors } from "@/constants/design";

type ButtonProps = {
  text: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonFill: React.FC<ButtonProps> = ({ text, ...props }) => {
  return (
    <button
      className="flex justify-center items-center  h-[36px] px-4 text-white rounded-[8px]"
      style={{
        backgroundColor: props.disabled ? colors.grey[300] : colors.primary,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export default ButtonFill;
