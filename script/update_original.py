import os
import sys
import requests
import urllib.request
from bs4 import BeautifulSoup
from github import Github, InputGitAuthor

MASTER_BRANCH = "master"
MASTER_REF = "refs/heads/master"
ORIGINAL_MARKDOWN_PATH = "Original.md"
ACCESS_TOKEN = os.environ['ACCESS_TOKEN']
REPO_NAME = "Yosseulsin-JOB/Google-Python-Style-Guide-kor"
COMMIT_ID_CLASSNAME = ".text-small.text-mono.link-gray"
MARDOWN_URL = "https://github.com/google/styleguide/blob/gh-pages/pyguide.md"
RAW_MARKDOWN_URL = "https://raw.githubusercontent.com/google/styleguide/gh-pages/pyguide.md"

def create_ref_name(commit):
    return 'refs/heads/original/' + commit['label']

def create_branch_name(commit):
    return 'original/' + commit['label']

def create_commit_title(commit):
    return 'merge ' + commit['label'] + ' 🛰'

def create_pr_title(commit):
    return '['+commit['label']+'] 변역 요청 💬'

def create_pr_body():
    return '''
새로운 번역이 왔습니다. 번역해주세요! 💤
'''

# 항상 루트에서 python ./script/update_original.py 로 실행해야 루트에 있는 Original.md 파일로 대체됩니다.
def download_from_google_style_guide_original():
    urllib.request.urlretrieve(RAW_MARKDOWN_URL, ORIGINAL_MARKDOWN_PATH)
    print("저장완료")

# commit 이름과 링크를 가져옵니다.
def get_commit_from_google_style_guide_original():
    markdown = requests.get(MARDOWN_URL).text
    soup = BeautifulSoup(markdown, 'html.parser')
    commit = soup.select(COMMIT_ID_CLASSNAME)[0]
    commit_label = commit.text
    commit_url = 'https://github.com' + commit.attrs['href']

    print(commit_label, commit_url)

    return { "label":commit_label,'url': commit_url }

def get_repo():
    return Github(ACCESS_TOKEN).get_repo(REPO_NAME)

def create_branch(repo, commit):
    ref = create_ref_name(commit)
    branch = repo.get_branch(branch=MASTER_BRANCH)

    try:
      repo.create_git_ref(ref=ref, sha=branch.commit.sha)
    except:
      return False
    return True

def create_commit(repo, commit):
    branch = create_branch_name(commit)
    title = create_commit_title(commit)
    text = open(ORIGINAL_MARKDOWN_PATH, "r").read()
    contents = repo.get_contents(ORIGINAL_MARKDOWN_PATH, ref=MASTER_REF)

    repo.update_file(contents.path, title, text, contents.sha, branch=branch)

def create_pull_request(repo, commit):
    body = create_pr_body()
    head = create_branch_name(commit)
    title = create_pr_title(commit)

    repo.create_pull(title=title, body=body, head=head, base=MASTER_BRANCH)


if __name__ == "__main__":

    # 스타일 가이드를 최신 버전을 가져옵니다.
    download_from_google_style_guide_original()

    # 최신 버전의 commit id와 주소를 가져옵니다.
    commit = get_commit_from_google_style_guide_original()

    # 스타일 가이드 한글판 레포를 가져옵니다.
    repo = get_repo()

    # 브랜치를 생성합니다.
    branch = create_branch(repo, commit)

    # 브랜치를 생성할 수 없는 상태라면 이미 생성된 것으로 더이상의 작업을 진행하지 않습니다.
    if branch is False:
        print('이미 생성된 작업 요청과 동일한 Commit 입니다. 🚨')
        sys.exit(0)
    
    # 업데이트 된 파일을 commit합니다.
    create_commit(repo, commit)

    # Pull Request를 생성합니다.
    create_pull_request(repo, commit)

    print("요청 완료했습니다.")














