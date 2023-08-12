import { SVGProps } from "react";
const IconArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || "#8A8A8A"}
      d="m10.065 8.96.885-.885L6 3.125l-4.95 4.95.885.885L6 4.895l4.065 4.065Z"
    />
  </svg>
);
export default IconArrowDown;
