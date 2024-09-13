import React from "react";

import MenuSVG from "../svg/Menu";
import ExternalLink from "../svg/ExternalLink";

export default function Header({
  branchs = [],
  selected = "",
  onToggleMenu = () => {},
  onChangeBranch = () => {},
}) {
  return (
    <div className="header">
      <div>
        <a
          aria-label="menu"
          className="m_menu"
          href={window.location.hash}
          onClick={onToggleMenu}
        >
          <MenuSVG style={{ stroke: "black", width: "18px" }} />
        </a>
        <a className="title" href="" aria-label="title">
          Google Python Style Guide
        </a>
      </div>
      <ul className="menu">
        <li className="github">
          <a
            href="https://github.com/Yosseulsin-JOB/Google-Python-Style-Guide-kor"
            aria-label="github repo"
          >
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
    <select
      defaultValue={selected}
      onChange={handleChangeBracnh}
      aria-label="branch"
    >
      {branchs.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
