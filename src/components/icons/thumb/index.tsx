import { SVGProps } from "react";
const IconThumb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={props.fill || "#717171"}
        d="M8.74 3.813 8.36 5.74c-.08.393.027.8.28 1.107a1.33 1.33 0 0 0 1.027.486h3.666v.72L11.62 12H6.227A.234.234 0 0 1 6 11.774V6.546l2.74-2.733Zm.593-2.48L5.06 5.607a1.337 1.337 0 0 0-.393.946v5.22c0 .86.7 1.56 1.56 1.56h5.4c.473 0 .906-.246 1.146-.646l1.78-4.1c.074-.167.114-.347.114-.534v-.72c0-.733-.6-1.333-1.334-1.333H9.667l.613-3.1a.669.669 0 0 0-.053-.44 3.202 3.202 0 0 0-.587-.813l-.307-.314ZM2.667 6H1.333v7.334h1.334c.366 0 .666-.3.666-.667v-6c0-.367-.3-.667-.666-.667Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default IconThumb;
