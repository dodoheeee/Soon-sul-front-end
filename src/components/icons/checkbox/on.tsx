import { SVGProps } from "react";
const IconCheckboxOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={18}
      height={18}
      x={3}
      y={3.866}
      fill={props.fill || "#717171"}
      stroke={props.stroke || "#717171"}
      strokeWidth={2}
      rx={3}
    />
    <path
      fill="#FEFEFE"
      d="m9.209 16.26-3.632-3.652-1.237 1.234 4.869 4.896 10.45-10.51-1.227-1.234-9.223 9.266Z"
    />
  </svg>
);
export default IconCheckboxOn;
