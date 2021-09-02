import React, { useEffect, useState } from "react";

import "@/styles/components/List.css";
import Search from "./Search";
import { isSelectedContent, toFlatContents } from "../utils";
import ArrowSVG from "../svg/Arrow";

export default function List({ page = {}, contents = [] }) {
  return (
    <div className="list">
      <Search faltContents={toFlatContents(contents)} />
      <ul className="title">
        {contents.map((data) => (
          <Item key={data.sha} data={data} page={page} />
        ))}
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
        <ul
          className="subtitle"
          style={show ? { maxHeight: window.outerHeight } : {}}
        >
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
