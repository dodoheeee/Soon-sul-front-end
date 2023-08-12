import { SVGProps } from "react";
const IconDone = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <g fill="#41C555">
      <path d="m19.195 22.205-5.927-5.96-2.018 2.015 7.945 7.99L36.25 9.099l-2.004-2.016-15.051 15.122Z" />
      <path
        fillRule="evenodd"
        d="M27.564 10.047A12.446 12.446 0 0 0 20 7.5C13.096 7.5 7.5 13.096 7.5 20S13.096 32.5 20 32.5 32.5 26.904 32.5 20c0-1.039-.127-2.048-.365-3.013l2.002-2.014C34.696 16.545 35 18.237 35 20c0 8.284-6.716 15-15 15-8.284 0-15-6.716-15-15 0-8.284 6.716-15 15-15 3.531 0 6.778 1.22 9.34 3.262l-1.776 1.785Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
export default IconDone;
