import React, { useRef, useEffect } from "react";
import * as marked from "marked";

import { setNewOpen } from "../utils";

export default function Markdown({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = marked(children, {});
      if (window?.hljs) {
        hljs.highlightAll();
      }
      setNewOpen();
    }
  }, [ref, children]);

  return <div ref={ref} />;
}
