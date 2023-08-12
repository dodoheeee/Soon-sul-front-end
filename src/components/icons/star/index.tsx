import { SVGProps } from "react";
const IconStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={11}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill ? props.fill : "#BEBEBE"}
      d="m6 0 1.904 3.379 3.802.767L9.081 7l.446 3.853L6 9.24l-3.527 1.614.446-3.853L.294 4.146l3.802-.767L6 0Z"
    />
  </svg>
);
export default IconStar;
