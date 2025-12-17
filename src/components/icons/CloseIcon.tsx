import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export function CloseIcon(props: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 6L18 18"
        stroke="black"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M18 6L6 18"
        stroke="black"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
