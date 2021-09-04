import React, { useEffect, useState } from "react";

import "@/styles/components/List.css";
import Search from "./Search";
import { isSelectedContent, toFlatContents } from "../utils";
import ArrowSVG from "../svg/Arrow";
import ExternalLink from "../svg/ExternalLink";

export default function List({ page = {}, contents = [], show = false }) {
  const [license, setLicense] = useState(false);
  return (
    <div className={`list${show ? " show" : ""}`}>
      <Search faltContents={toFlatContents(contents)} />
      <ul className="title">
        {contents.map((data) => (
          <Item key={data.sha} data={data} page={page} />
        ))}
      </ul>
      <ul className="title info">
        <li
          className={`parent${license ? " selected" : ""}`}
          onClick={() => setLicense(!license)}
        >
          <a href={window.location.hash}>
            License
            <ArrowSVG
              className="children"
              style={{ transform: `rotate(${license ? 90 : 0}deg)` }}
            />
          </a>
        </li>
        <ul
          className="subtitle info"
          style={license ? { maxHeight: "1000px" } : {}}
        >
          <li>
            <a href="https://google.github.io/styleguide/pyguide.html">원문</a>
          </li>
          <li>
            <a href="https://github.com/yangheeryu/Gowun-Dodum">고운돋움글꼴</a>
          </li>
          <li>
            <a href="https://github.com/Sotaneum">페이지</a>
          </li>
        </ul>
      </ul>
      <ul className="title github">
        <a href="https://github.com/Yosseulsin-JOB/Google-Python-Style-Guide-kor">
          Github
          <ExternalLink style={{ width: "18px", stroke: "#34568b" }} />
        </a>
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
      )}
    </>
  );
}

function SubItem({ data, href, selected = false }) {
  const { name } = data;

  return (
    <li className={selected ? "selected" : ""}>
      <a href={href}>{name.replace(".md", "")}</a>
    </li>
  );
}
