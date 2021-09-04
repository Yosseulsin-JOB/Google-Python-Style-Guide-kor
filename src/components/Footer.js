import React from "react";

import "@/styles/components/Footer.css";

export default function Footer() {
  return (
    <ul className="footer">
      <li>
        <a href="https://google.github.io/styleguide/pyguide.html">
          Google Python Style Guide(ENG)
        </a>
        {"-"}
        <a href="https://creativecommons.org/licenses/by/3.0/">CC-By 3.0</a>
      </li>

      <li>
        이 페이지는{" "}
        <a href="https://github.com/yangheeryu/Gowun-Dodum">고운돋움글꼴</a>이
        적용되어 있습니다.
      </li>
      <li>
        누구나 더 나은 번역을 위한{" "}
        <a href="https://github.com/Yosseulsin-JOB/Google-Python-Style-Guide-kor">
          기여
        </a>{" "}
        할 수 있습니다.
      </li>
    </ul>
  );
}
