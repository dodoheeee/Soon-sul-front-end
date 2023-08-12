import { SVGProps } from "react";
const IconSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={props.fill || "#717171"}
        d="M20.667 18.667h-1.054l-.373-.36a8.628 8.628 0 0 0 2.093-5.64A8.666 8.666 0 0 0 12.667 4 8.666 8.666 0 0 0 4 12.667a8.666 8.666 0 0 0 8.667 8.666c2.146 0 4.12-.786 5.64-2.093l.36.373v1.054l6.666 6.653 1.987-1.987-6.653-6.666Zm-8 0c-3.32 0-6-2.68-6-6s2.68-6 6-6 6 2.68 6 6-2.68 6-6 6Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconSearch;
