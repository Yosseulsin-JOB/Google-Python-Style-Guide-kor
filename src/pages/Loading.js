import React from "react";

import LoadingSVG from "../svg/Loading";

export default function Loading({ text = "검색 중...", background = true }) {
  return (
    <div className={`loading${background ? " background" : ""}`}>
      <LoadingSVG className="loading-svg" />
      <div>{text}</div>
    </div>
  );
}
