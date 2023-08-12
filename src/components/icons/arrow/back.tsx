import { SVGProps } from "react";
const IconArrowBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || "#666"}
      d="M17.92 3.87 16.15 2.1 6.25 12l9.9 9.9 1.77-1.77L9.79 12l8.13-8.13Z"
    />
  </svg>
);
export default IconArrowBack;
