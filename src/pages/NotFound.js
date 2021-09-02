import React from "react";

export default function NotFound({ body = "페이지를 찾을 수 없습니다." }) {
  return (
    <div className="contents">
      <div>{body}</div>
    </div>
  );
}
