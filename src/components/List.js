import React, { useEffect, useState } from "react";

import Search from "./Search";
import { isSelectedContent, toFlatContents } from "../utils";

import ArrowSVG from "../svg/Arrow";
import ExternalLink from "../svg/ExternalLink";

export default function List({ page = {}, show = false, contents = [] }) {
  const [license, setLicense] = useState(false);
  return (
    <div className={`list${show ? " show" : ""}`}>
      <Search faltContents={toFlatContents(contents)} />
      <ul className="title">
        {contents.map((data) => (
          <Item key={data.sha} data={data} page={page} />
        ))}
      </ul>
      <ul className="title all">
        <li>
          <a
            aria-label="markdown link"
            href="https://github.com/Yosseulsin-JOB/Google-Python-Style-Guide-kor/blob/master/Google%20Python%20Style%20Guide%20kor.md"
          >
            Github에서 보기
          </a>
        </li>
      </ul>
      <ul className="title info">
        <li
          className={`parent${license ? " selected" : ""}`}
          onClick={() => setLicense(!license)}
        >
          <a href={window.location.hash} aria-label="open license list">
            License
            <ArrowSVG
              className="children"
              style={{ transform: `rotate(${license ? 90 : 0}deg)` }}
            />
          </a>
        </li>
        <li>
          <ul
            className="subtitle info"
            style={license ? { maxHeight: "1000px" } : {}}
          >
            <li>
              <a
                href="https://google.github.io/styleguide/pyguide.html"
                aria-label="go to original style guide"
              >
                원문
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yangheeryu/Gowun-Dodum"
                aria-label="go to font license"
              >
                고운돋움글꼴
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Sotaneum"
                aria-label="go to website developer"
              >
                페이지
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <ul className="title github">
        <li>
          <a
            href="https://github.com/Yosseulsin-JOB/Google-Python-Style-Guide-kor"
            aria-label="Python 스타일 가이드 한국어판 깃헙 방문하기"
          >
            Github
            <ExternalLink style={{ width: "18px", stroke: "#34568b" }} />
          </a>
        </li>
      </ul>
    </div>
  );
}

function Item({ data, page = {} }) {
  const { hash } = page;
  const { num, name, children } = data;
  const [show, setShow] = useState(false);

  const isSelected = isSelectedContent(page, data);

  useEffect(() => {
    const { type } = page;
    if (type !== "s") {
      return;
    }
    setShow(isSelected);
  }, [page]);

  const hasChildren = children.length > 1;

  return (
    <>
      <li key={name} className={`parent${isSelected ? " selected" : ""}`}>
        <a
          href={hasChildren ? hash : `#s${num}.${children[0].num}`}
          onClick={() => setShow(!show)}
        >
          {name}
          {hasChildren && (
            <ArrowSVG
              className="children"
              style={{ transform: `rotate(${show ? 90 : 0}deg)` }}
            />
          )}
        </a>
      </li>
      {hasChildren && (
        <li>
          <ul className="subtitle" style={show ? { maxHeight: "1500px" } : {}}>
            {children.map((data) => (
              <SubItem
                data={data}
                key={data.sha}
                href={`#s${num}.${data.num}`}
                selected={page.name === `${num}.${data.num}`}
              />
            ))}
          </ul>
        </li>
      )}
    </>
  );
}

function SubItem({ data, href, selected = false }) {
  const { name } = data;

  return (
    <li className={selected ? "selected" : ""}>
      <a href={href} aria-label={`${name} 읽어보기`}>
        {name.replace(".md", "")}
      </a>
    </li>
  );
}
