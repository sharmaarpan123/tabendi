import React from "react";

const MenuIcon = ({ width = 24, height = 24, color = "#4A4A4A", strokeWidth = 2 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default MenuIcon;

