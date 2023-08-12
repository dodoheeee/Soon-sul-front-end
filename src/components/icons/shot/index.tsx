import { SVGProps } from "react";
const IconShot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <circle
      cx={24}
      cy={24}
      r={21.75}
      fill="#1A1A1A"
      stroke="#1A1A1A"
      strokeWidth={0.5}
    />
    <circle cx={24} cy={24} r={19} stroke="#FEFEFE" strokeWidth={2} />
  </svg>
);
export default IconShot;
