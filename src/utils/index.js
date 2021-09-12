import { GITHUB_REPO, GITHUB_ROOT_FOLDER } from "../constants";
import { getFiles, getFolders, getReleases, getRawByContent } from "./github";

export function contentToNum(content) {
  return content?.name ? content?.name.split(" ")[0] || "" : "";
}

function nameToNum(name) {
  return name.replace(/([0-9].[0-9]*).*/, "$1") || "1.1";
}

export function getPage() {
  const hash = window.location.hash;
  const pathType = hash.replace(/#([a-z]).*/, "$1") || "s";
  const pathName = hash.replace(/#[a-z](.*)/, "$1") || "";

  return {
    hash,
    type: pathType,
    name: pathType === "s" ? nameToNum(pathName) : pathName,
  };
}

function sortContents(contents) {
  return contents.sort((a, b) => a.num - b.num);
}

function getContentChildrenData({ parent, branch = "master" }) {
  const { path, name } = parent;

  return getFiles({
    path,
    branch,
    repo: GITHUB_REPO,
    onFilter: ({ name }) =>
      name !== "ReadMe.md" && name.substring(name.length - 3) === ".md",
  })
    .then((files) =>
      files.map((file) =>
        Object.assign(file, {
          parent: name,
          id: file.name.split(" ")[0],
          num: file.name.split(" ")[0].split(".")[1],
        })
      )
    )
    .then(sortContents);
}

export function getContentData(branch = "master") {
  return getFolders({
    branch,
    repo: GITHUB_REPO,
    path: GITHUB_ROOT_FOLDER,
  })
    .then((folders) =>
      Promise.all(
        folders.map(async (folder) =>
          Object.assign(folder, {
            num: folder.name.split(".")[0],
            children: await getContentChildrenData({
              branch,
              parent: folder,
            }),
          })
        )
      )
    )
    .then(sortContents);
}

function releaseToBranch({ name, tag_name }) {
  const [branch, date = "2019.12.10"] = name.split(" ")[0].split("_");
  return { date, label: `${date} (${branch})`, value: tag_name };
}

export function getBranchData() {
  return getReleases({ repo: GITHUB_REPO })
    .then((releases) =>
      releases.map(releaseToBranch).sort((a, b) => a.date < b.date)
    )
    .then((branch) => [{ value: "master", label: "최신 (master)" }, ...branch]);
}

export function getContent(num, contents = []) {
  return contents.find(({ id }) => id === num);
}

export function setNewOpen() {
  [...document.querySelectorAll("a")].forEach((element) => {
    if (
      !element.getAttribute("href") ||
      element.getAttribute("href").substr(0, 1) === "#"
    ) {
      return;
    }
    element.setAttribute("target", "_blank");
  });
}

function findData(content, raw, text) {
  const re = new RegExp(text, "g");
  if (!!re.exec(content.name) || !!re.exec(content.parent)) {
    return true;
  }

  return !!re.exec(raw);
}

export function searchData(flatContents = [], text) {
  return Promise.all(flatContents.map(getRawByContent))
    .then((raws) =>
      raws.map((raw, idx) =>
        findData(flatContents[idx], raw, text) ? idx : null
      )
    )
    .then((data) => data.filter((idx) => idx !== null))
    .then((data) => data.map((idx) => flatContents[idx]));
}

export function toFlatContents(contents) {
  return contents.reduce((flat, folder) => flat.concat(folder.children), []);
}

export function getBothSidesContent(faltContents = [], num) {
  const idx = faltContents.findIndex(
    (content) => content.name.split(" ")[0] === num
  );
  const prevContent = idx - 1 >= 0 ? faltContents[idx - 1] : null;
  const nextContent =
    idx + 1 < faltContents.length ? faltContents[idx + 1] : null;

  return [prevContent, nextContent];
}

export function isSelectedContent(page, content) {
  const { name } = page;
  const { num, children } = content;
  const [parent, child] = name.split(".");

  if (parent !== num) {
    return false;
  }

  return !!children.find((item) => item.num === child);
}
