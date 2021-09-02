import React from "react";

import GithubSVG from "../svg/Github";

import "@/styles/components/Header.css";
import DarkModeSVG from "../svg/ExternalLink";
import ExternalLink from "../svg/ExternalLink";

export default function Header({
  branchs = [],
  selected = "",
  onChangeBranch = () => {},
}) {
  return (
    <div className="header">
      <a className="title" href="">
        Google Python Style Guide
      </a>
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
