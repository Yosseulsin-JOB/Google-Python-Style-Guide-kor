import "core-js/stable";
import "regenerator-runtime/runtime";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "@/styles/App.css";
import "@/styles/components/List.css";
import "@/styles/components/Header.css";
import "@/styles/components/Search.css";
import "@/styles/components/Contents.css";

ReactDOM.render(<App />, document.getElementById("root"));
