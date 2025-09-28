import React from "react";

const WalletIcon = ({ size = 30 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      width={size}
      height={size}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 6.75A2.25 2.25 0 016.75 4.5h10.5A2.25 2.25 0 0119.5 6.75v10.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V6.75z"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 9.75H15a.75.75 0 00-.75.75v3a.75.75 0 00.75.75h4.5V9.75z"
      />
    </svg>
  );
};

export default WalletIcon;
