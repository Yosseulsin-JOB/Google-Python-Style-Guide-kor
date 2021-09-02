import React, { useRef, useEffect } from "react";
import hljs from "highlight.js";
import * as marked from "marked";

import { setNewOpen } from "../utils";

import "highlight.js/styles/rainbow.css";

export default function Markdown({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = marked(children, {});
      hljs.highlightAll();
      setNewOpen();
    }
  }, [ref, children]);

  return <div ref={ref} />;
}
