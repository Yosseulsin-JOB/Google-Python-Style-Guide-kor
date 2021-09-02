import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

import {
  getPage,
  getBranchData,
  getContentData,
  toFlatContents,
} from "./utils";

import "@/styles/App.css";
import "@/styles/components/Contents.css";

import SearchResult from "./pages/SearchResult";
import Viewer from "./pages/Viewer";
import Loading from "./pages/Loading";
import NotFound from "./pages/NotFound";

const pages = {
  s: Viewer,
  f: SearchResult,
  loading: Loading,
};

export default function App() {
  const [page, setPage] = useState(getPage());
  const [contents, setContents] = useState([]);
  const [branchs, setBranchs] = useState([]);
  const [branch, setBranch] = useState("master");
  const [fetch, setFetch] = useState(false);

  const handleHashChange = () => setPage(getPage());

  useEffect(() => {
    getBranchData().then(setBranchs);
    window.addEventListener("hashchange", handleHashChange);
    () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    setFetch(false);
    getContentData(branch)
      .then(setContents)
      .then(() => setFetch(true));
  }, [branch]);

  if (!fetch) {
    return (
      <div className="body">
        <div className="container">
          <Loading text="초기화" />
        </div>
      </div>
    );
  }

  if (!page.hash) {
    setTimeout(() => {
      window.location.href = "#s1.1";
    }, 1);
    return (
      <div className="body">
        <div className="container">
          <Loading text="초기화" />
        </div>
      </div>
    );
  }

  const flatContents = toFlatContents(contents);
  const PageComponent =
    pages[flatContents.length === 0 ? "loading" : page?.type] || NotFound;

  return (
    <div className="body">
      <Header branchs={branchs} selected={branch} onChangeBranch={setBranch} />
      <div className="container">
        <List page={page} contents={contents} />
        <PageComponent page={page} contents={flatContents} />
      </div>
      <Footer />
    </div>
  );
}
