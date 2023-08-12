import { SVGProps } from "react";
const IconStarMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={44}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={43}
      height={40}
      x={1}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill={props.fill ? props.fill : "#1AC6A9"}
        d="m22.5 0 6.983 12.389 13.94 2.813-9.625 10.47 1.633 14.126L22.5 33.88 9.569 39.798 11.2 25.671l-9.624-10.47 13.94-2.812L22.5 0Z"
      />
    </mask>
    <g mask="url(#a)">
      <path fill={props.fill ? props.fill : "#1AC6A9"} d="M-3.5-5h26v52h-26z" />
    </g>
  </svg>
);
export default IconStarMarker;
