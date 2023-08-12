import { SVGProps } from "react";
const IconUser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <g fill="#717171" clipPath="url(#a)">
      <path d="M13 14.038a6.86 6.86 0 0 1-6.852-6.853A6.86 6.86 0 0 1 13 .333a6.86 6.86 0 0 1 6.852 6.852A6.86 6.86 0 0 1 13 14.038Zm0-11.41a4.563 4.563 0 0 0-4.558 4.557A4.563 4.563 0 0 0 13 11.743a4.563 4.563 0 0 0 4.557-4.558A4.563 4.563 0 0 0 13 2.628ZM25.333 25.501H23.04v-4.678a3.736 3.736 0 0 0-3.732-3.73H6.693a3.736 3.736 0 0 0-3.732 3.73v4.678H.667v-4.678a6.033 6.033 0 0 1 6.026-6.026h12.614a6.033 6.033 0 0 1 6.026 6.026v4.678Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.667.333h24.667v25.168H.667z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconUser;
