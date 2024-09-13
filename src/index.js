import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/stable";

import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import "@/styles/App.css";
import "@/styles/components/List.css";
import "@/styles/components/Header.css";
import "@/styles/components/Search.css";
import "@/styles/components/Contents.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
