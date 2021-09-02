import React, { useEffect, useState } from "react";

import Loading from "./Loading";
import { searchData } from "../utils";

export default function SearchResult({ page = {}, contents = [] }) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const { type, name } = page;
    if (type !== "f") {
      return;
    }
    setResult(null);
    searchData(contents, decodeURI(name)).then(setResult);
  }, [page, contents]);

  return result === null ? (
    <Loading />
  ) : (
    <div className="contents">
      <div style={{ height: "40px" }} />
      {result.length} 개의 페이지가 검색되었습니다.
      <ul className="result">
        {result.map(({ name }) => {
          const path = name.replace(".md", "");
          return (
            <li key={name}>
              <a href={`#s${path.replace(" ", "-")}`}>{path}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/*


    const pageReg = /#s([0-9\.]+)-(.+)?/;
    const resultReg = /#result-(.*)/;
    const hash = window.location.hash;
    const resultRegExec = resultReg.exec(hash);

    // if (resultRegExec && contents.length > 0) {
    //   const searchText = resultRegExec[1];
    //   setSearchResult(null);
    //   searchData(toFlatContents(contents), decodeURI(searchText)).then(
    //     setSearchResult
    //   );
    // }

*/
