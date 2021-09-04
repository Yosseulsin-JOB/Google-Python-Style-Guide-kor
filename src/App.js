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
  const [error, setError] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleHashChange = () => {
    setPage(getPage());
    setShowMenu(false);
  };

  useEffect(() => {
    getBranchData()
      .then(setBranchs)
      .catch(() => {
        setError({
          body: "해당 IP로 API 요청 회수 초과로 1시간 이후에 새로고침 후 이용 부탁드립니다.",
        });
      });
    window.addEventListener("hashchange", handleHashChange);
    () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    setFetch(false);
    getContentData(branch)
      .then(setContents)
      .then(() => setFetch(true));
  }, [branch]);

  if (error) {
    return (
      <div className="body">
        <div className="container">
          <NotFound body={error.body} />
        </div>
      </div>
    );
  }

  if (!page.hash || !fetch) {
    if (fetch) {
      setTimeout(() => {
        window.location.href = "#s1.1";
      }, 1);
    }
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
      <Header
        branchs={branchs}
        selected={branch}
        onChangeBranch={setBranch}
        onToggleMenu={handleToggleMenu}
      />
      <div style={{ display: "flex", height: "calc(100vh - 100px - 56px)" }}>
        <List page={page} show={showMenu} contents={contents} />
        <div
          className="container"
          onClick={() => showMenu && setShowMenu(false)}
        >
          <PageComponent page={page} contents={flatContents} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
