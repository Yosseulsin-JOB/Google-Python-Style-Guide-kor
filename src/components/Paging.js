import React from "react";

export default function Paging({ bothSidesContent = [] }) {
  const toName = ({ name }) => name.replace(".md", "");
  const toLink = ({ name }) => `#s${name.replace(" ", "-")}`;

  const [prev, next] = bothSidesContent;

  return (
    <div className="paging">
      {prev ? <a href={toLink(prev)}>{`< ${toName(prev)}`}</a> : <div />}
      {next ? <a href={toLink(next)}>{`${toName(next)} >`}</a> : <div />}
    </div>
  );
}
