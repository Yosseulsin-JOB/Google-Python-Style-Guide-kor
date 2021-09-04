import React from "react";

export default function Paging({ small = false, bothSidesContent = [] }) {
  const toName = ({ name }) => {
    const targetName = name.replace(".md", "");
    return small ? targetName.split(" ")[0] : targetName;
  };
  const toLink = ({ name }) => `#s${name.replace(" ", "-")}`;

  const [prev, next] = bothSidesContent;

  return (
    <div className="paging">
      {prev ? <a href={toLink(prev)}>{`< ${toName(prev)}`}</a> : <div />}
      {next ? <a href={toLink(next)}>{`${toName(next)} >`}</a> : <div />}
    </div>
  );
}
