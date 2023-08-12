import { SVGProps } from "react";
const IconImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || "#717171"}
      d="M28 25.333V6.667C28 5.2 26.8 4 25.333 4H6.667A2.675 2.675 0 0 0 4 6.667v18.666C4 26.8 5.2 28 6.667 28h18.666C26.8 28 28 26.8 28 25.333ZM11.333 18l3.334 4.013L19.333 16l6 8H6.667l4.666-6Z"
    />
  </svg>
);
export default IconImage;
