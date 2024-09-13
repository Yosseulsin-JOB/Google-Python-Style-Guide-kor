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
          <a
            target="_blank"
            href="https://github.com/Yosseulsin-JOB/Google-Python-Style-Guide-kor/blob/master/Google%20Python%20Style%20Guide%20kor.md"
          >
            Markdown
          </a>
          에서 보거나 Personal Token 을 사용하여 API 요청 횟수를 일시적으로
          확보할 수 있습니다.
          <br />
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
            *{" "}
            <a
              target="_blank"
              style={{ color: "red" }}
              href="https://github.com/settings/tokens/new"
            >
              Personal Token
            </a>
            은 로컬 스토리지에 저장되며 서버에 저장하지 않습니다.
          </span>
          <br />
          <span style={{ color: "blue" }}>
            * 별도의 scopes 설정은 필요없습니다.
          </span>
        </div>
      )}
    </div>
  );
}
