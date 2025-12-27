import React from "react";

const PhoneIcon = ({ width = 16, height = 16, color = "var(--primary)" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.65 10.5a.678.678 0 0 1-.58-.122L6.5 7.93a.678.678 0 0 1-.122-.58l.5-2.307a.678.678 0 0 0-.122-.58L3.654 1.328z"
        fill={color}
      />
    </svg>
  );
};

export default PhoneIcon;

