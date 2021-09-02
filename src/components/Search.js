import React, { useState } from "react";

import "@/styles/components/Search.css";
import SearchSVG from "../svg/Search";

export default function Search() {
  const [text, setText] = useState("");

  const handleEnter = (e) => {
    if (e.charCode === 13) {
      window.location.href = `#f${text}`;
      setText("");
    }
  };

  const handleChange = (e) => setText(e.target.value);

  return (
    <div className="search">
      <input
        placeholder="검색어를 입력하세요."
        value={text}
        onChange={handleChange}
        onKeyPress={handleEnter}
      />
      <SearchSVG className="search_icon" />
    </div>
  );
}
