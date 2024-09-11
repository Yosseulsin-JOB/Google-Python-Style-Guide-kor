import React from "react";
import { setToken } from "../utils";

export default function NotFound({
  body = "페이지를 찾을 수 없습니다.",
  isToken = false,
}) {
  const [text, setText] = React.useState("");

  return (
    <div className="contents">
      <div>{body}</div>
      {isToken && (
        <div>
          <br />
          자세한 내용은{" "}
          <a href="https://docs.github.com/ko/rest/using-the-rest-api/rate-limits-for-the-rest-api?apiVersion=2022-11-28#primary-rate-limit-for-authenticated-users">
            여기
          </a>
          를 참고하세요.
          <br />
          <br />
          Personal Token으로 API 요청 회수를 증가시키려면 Personal Token을
          입력해주세요.
          <br />
          <input value={text} onChange={(e) => setText(e.target.value)} />{" "}
          <button
            onClick={() => {
              setToken(text);
              alert("저장되었습니다.");
              window.location.reload();
            }}
          >
            Personal Token 저장
          </button>
          <br />
          <span style={{ color: "red" }}>
            * Personal Token은 로컬 스토리지에 저장되며 서버에 저장하지
            않습니다.
          </span>
        </div>
      )}
    </div>
  );
}
