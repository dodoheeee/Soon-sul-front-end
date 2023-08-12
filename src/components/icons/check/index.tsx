import { SVGProps } from "react";
const IconCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g fill="#1AC6A9">
      <path d="M11.517 13.323 7.96 9.747l-1.211 1.21 4.767 4.793L21.75 5.46l-1.202-1.21-9.031 9.073Z" />
      <path
        fillRule="evenodd"
        d="M16.538 6.028a7.5 7.5 0 1 0 2.743 4.164l1.201-1.208A9 9 0 1 1 12 3c2.119 0 4.067.732 5.604 1.957l-1.066 1.071Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
export default IconCheck;
