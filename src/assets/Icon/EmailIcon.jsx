import React from "react";

const EmailIcon = ({ width = 16, height = 16, color = "var(--primary)" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.555-4.274-2.57L2 12.105V5.383l4.692 2.816L15 5.383v6.555Z"
        fill={color}
      />
    </svg>
  );
};

export default EmailIcon;

