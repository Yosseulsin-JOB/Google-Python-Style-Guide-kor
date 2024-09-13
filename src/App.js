import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

import Loading from "./pages/Loading";

import {
  getPage,
  getBranchData,
  getContentData,
  toFlatContents,
  getToken,
  setToken,
} from "./utils";
import { getRateLimit } from "./utils/github";

const NotFound = lazy(() => import("./pages/NotFound"));
const List = lazy(() => import("./components/List"));
const Header = lazy(() => import("./components/Header"));

const pages = {
  s: lazy(() => import("./pages/Viewer")),
  f: lazy(() => import("./pages/SearchResult")),
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
  const [check, setCheck] = useState(false);
  const ref = useRef(true);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleHashChange = () => {
    setPage(getPage());
    setShowMenu(false);
  };

  useEffect(() => {
    getRateLimit()
      .then((response) => response[0].rate)
      .then(({ reset, remaining = 0 } = {}) => {
        if (ref.current === false) {
          return;
        }
        if (remaining > 0) {
          setCheck(true);
          return;
        }
        const token = getToken();
        if (token) {
          setToken("");
          location.reload();
          return;
        }
        setError({
          body: `해당 IP의 API 요청 회수 초과로 ${new Date(
            reset * 1000
          ).toLocaleString()} 이후에 새로고침 후 이용 부탁드립니다.`,
        });
      });
    return () => {
      ref.current = false;
    };
  }, []);

  useEffect(() => {
    if (!check) {
      return;
    }
    getBranchData()
      .then(setBranchs)
      .catch(() => {
        setError({
          body: "해당 IP의 API 요청 회수 초과로 1시간 이후에 새로고침 후 이용 부탁드립니다.",
        });
      });
    window.addEventListener("hashchange", handleHashChange);
    () => window.removeEventListener("hashchange", handleHashChange);
  }, [check]);

  useEffect(() => {
    if (!check) {
      return;
    }
    setFetch(false);
    getContentData(branch)
      .then(setContents)
      .then(() => setFetch(true));
  }, [branch, check]);

  if (error) {
    return (
      <div className="body">
        <div className="container">
          <NotFound body={error.body} isToken />
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
      <Suspense>
        <Header
          branchs={branchs}
          selected={branch}
          onChangeBranch={setBranch}
          onToggleMenu={handleToggleMenu}
        />
      </Suspense>
      <div style={{ display: "flex", height: "calc(100vh - 100px - 56px)" }}>
        <Suspense>
          <List page={page} show={showMenu} contents={contents} />
        </Suspense>
        <div
          className="container"
          onClick={() => showMenu && setShowMenu(false)}
        >
          <Suspense>
            <PageComponent page={page} contents={flatContents} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
