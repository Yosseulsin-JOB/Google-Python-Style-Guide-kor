import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "@/styles/App.css";
import "@/styles/components/Contents.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Suspense>
    <App />
  </Suspense>
);
