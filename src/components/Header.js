import React from "react";

import MenuSVG from "../svg/Menu";
import ExternalLink from "../svg/ExternalLink";

import "@/styles/components/Header.css";

export default function Header({
  branchs = [],
  selected = "",
  onChangeBranch = () => {},
  onToggleMenu = () => {},
}) {
  return (
    <div className="header">
      <div>
        <a
          className="m_menu"
          href={window.location.hash}
          onClick={onToggleMenu}
        >
          <MenuSVG style={{ stroke: "black", width: "18px" }} />
        </a>
        <a className="title" href="">
          Google Python Style Guide
        </a>
      </div>
      <ul className="menu">
        <li className="github">
          <a href="https://github.com/Yosseulsin-JOB/Google-Python-Style-Guide-kor">
            Github
            <ExternalLink style={{ width: "18px", stroke: "#34568b" }} />
          </a>
        </li>
        <li>
          <SelectBranch
            branchs={branchs}
            selected={selected}
            onChangeBranch={onChangeBranch}
          />
        </li>
      </ul>
    </div>
  );
}

function SelectBranch({
  branchs = [],
  selected = "",
  onChangeBranch = () => {},
}) {
  const handleChangeBracnh = (e) => onChangeBranch(e.target.value || "master");

  return (
    <select defaultValue={selected} onChange={handleChangeBracnh}>
      {branchs.map(({ name }) => {
        const label = name === "master" ? `${name} : 최신` : name.split("/")[1];
        return (
          <option key={name} value={name}>
            {label}
          </option>
        );
      })}
    </select>
  );
}
