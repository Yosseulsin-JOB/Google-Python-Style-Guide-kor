import React from "react";

export default function ArrowSVG({ style = {}, className = "" }) {
  return (
    <svg
      fill="none"
      style={style}
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}
