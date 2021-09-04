import React, { useState, useEffect } from "react";

import { contentToNum, getBothSidesContent, getContent } from "../utils";
import { getRawByContent } from "../utils/github";
import Paging from "../components/Paging";
import Markdown from "../components/Markdown";
import Loading from "./Loading";
import NotFound from "./NotFound";

export default function Viewr({ page = {}, contents = [] }) {
  const [content, setContent] = useState({});
  const [markdown, setMarkdown] = useState("");
  const [fetch, setFetch] = useState(false);
  const [error, setError] = useState(null);
  const [small, setSmall] = useState(false);

  const [bothSidesContent, setBothSidesContent] = useState([null, null]);

  useEffect(() => {
    const handleResize = () => setSmall(window.innerWidth <= 480);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const { type, name } = page;

    if (type !== "s" || contentToNum(content) === name) {
      return;
    }

    const nextContent = getContent(name, contents);

    if (!nextContent) {
      return setError({
        body: (
          <>
            요청하신 페이지는 제거되었거나 찾을 수 없습니다. (참고 :{" "}
            <a
              target="_blank"
              href="https://github.com/google/styleguide/issues/627#issuecomment-791570024"
            >
              #627
            </a>
            )
          </>
        ),
      });
    }
    if (content === nextContent) {
      return;
    }

    setContent(nextContent);
  }, [page, contents]);

  useEffect(() => {
    if (!content?.download_url) {
      if (markdown) {
        setContent({});
      }
      return;
    }
    setError(null);
    setFetch(false);
    getRawByContent(content)
      .then((text) => `# ${content.parent}\n${text}`)
      .then(setMarkdown)
      .then(() => {
        document.querySelector("html").scrollTop = 0;
        setBothSidesContent(
          getBothSidesContent(contents, content.name.split(" ")[0])
        );
      })
      .then(() => setFetch(true))
      .catch(() => {
        setError({ body: "서버와 연결이 끊어졌습니다. 다시 요청하세요." });
        setFetch(true);
      });
  }, [content]);

  if (error) {
    return <NotFound body={error.body} />;
  }

  if (!fetch) {
    return <Loading text="로드 중..." background={false} />;
  }

  return (
    <div className="contents">
      <Paging bothSidesContent={bothSidesContent} small={small} />
      <Markdown>{markdown}</Markdown>
      <Paging bothSidesContent={bothSidesContent} small={small} />
      <br />
      <br />
    </div>
  );
}
