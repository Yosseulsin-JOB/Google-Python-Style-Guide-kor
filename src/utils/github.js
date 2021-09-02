import { CONTENT_TYPE, GITHUB_API_URL } from "../constants/github";

function isNotFound(defaultValue = [], onMap = (response) => response) {
  return (response) =>
    response?.message === "Not Found" ? defaultValue : onMap(response);
}

export function getBranchs({ repo, onFilter = (branch) => branch }) {
  const url = `${GITHUB_API_URL}/repos/${repo}/branches`;
  const notFound = isNotFound([], (response) =>
    Array.isArray(response) ? response : [response]
  );
  return fetch(url)
    .then((response) => response.json())
    .then(notFound)
    .then((response) => response.filter(onFilter));
}

export function getContents({ repo, path = "", branch = "master" }) {
  const url = `${GITHUB_API_URL}/repos/${repo}/contents/${path}?ref=${branch}`;
  const notFound = isNotFound([], (response) =>
    Array.isArray(response) ? response : [response]
  );
  return fetch(url)
    .then((response) => response.json())
    .then(notFound);
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
