import { CONTENT_TYPE, GITHUB_API_URL } from "../constants/github";

function isNotFound(defaultValue = [], onMap = (response) => response) {
  return (response) =>
    response?.message === "Not Found" ? defaultValue : onMap(response);
}

function fetchData(url, onFilter = (branch) => branch) {
  const notFound = isNotFound([], (response) =>
    Array.isArray(response) ? response : [response]
  );
  return fetch(url)
    .then((response) => response.json())
    .then(notFound)
    .then((response) => response.filter(onFilter));
}

/* 2021.09.12 : release 값을 기반으로 branch 데이터를 처리하기로 결정. */
// export function getBranchs({ repo, onFilter = (branch) => branch }) {
//   return fetchData(`${GITHUB_API_URL}/repos/${repo}/branches`, onFilter);
// }

export function getReleases({ repo, onFilter = (release) => release }) {
  return fetchData(`${GITHUB_API_URL}/repos/${repo}/releases`, onFilter);
}

export function getContents({ repo, path = "", branch = "master" }) {
  return fetchData(
    `${GITHUB_API_URL}/repos/${repo}/contents/${path}?ref=${branch}`
  );
}

export function getRateLimit() {
  return fetchData(`${GITHUB_API_URL}/rate_limit`);
}

export function getFiles({
  repo,
  path = "",
  branch = "master",
  onFilter = () => true,
}) {
  return getContents({ repo, path, branch }).then((response) =>
    response.filter(
      ({ type, ...data }) => type === CONTENT_TYPE.FILE && onFilter(data)
    )
  );
}

export function getFolders({
  repo,
  path = "",
  branch = "master",
  onFilter = () => true,
}) {
  return getContents({ repo, path, branch }).then((response) =>
    response.filter(
      ({ type, ...data }) => type === CONTENT_TYPE.DIR && onFilter(data)
    )
  );
}

export function getRawByContent({ download_url }) {
  return fetch(download_url).then((response) => response.text());
}

export function getRawByPath({ repo, path = "", branch = "master" }) {
  return getContents({ repo, path, branch }).then((response) => {
    const content = response.shift();
    if (!content) {
      return "";
    }

    return content?.type === CONTENT_TYPE.DIR
      ? getRawByPath({ repo, path: content.path, branch })
      : getRawByContent(content);
  });
}
