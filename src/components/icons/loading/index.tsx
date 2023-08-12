import { SVGProps } from "react";
const IconLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <path
      fill="#1A1A1A"
      fillRule="evenodd"
      d="M33.076 12.057A14.934 14.934 0 0 0 24 9C15.716 9 9 15.716 9 24c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-1.246-.152-2.457-.438-3.615l2.403-2.417A17.97 17.97 0 0 1 42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6c4.238 0 8.133 1.464 11.208 3.915l-2.132 2.142Z"
      clipRule="evenodd"
    />
  </svg>
);
export default IconLoading;
