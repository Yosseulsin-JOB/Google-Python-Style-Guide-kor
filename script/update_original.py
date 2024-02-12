import os, sys, requests
import urllib.request
from github import Github

MASTER_BRANCH = "master"
MASTER_REF = "refs/heads/master"
ORIGINAL_MARKDOWN_PATH = "Original.md"
ACCESS_TOKEN = os.environ['ACCESS_TOKEN'] if "ACCESS_TOKEN" in os.environ else ""
REPO_NAME = "Yosseulsin-JOB/Google-Python-Style-Guide-kor"
RAW_MARKDOWN_URL = "https://raw.githubusercontent.com/google/styleguide/gh-pages/pyguide.md"
GITHUB_COMMIT_API = "https://api.github.com/repos/google/styleguide/commits"

def create_ref_name(commit):
    return 'refs/heads/original/' + commit['label']


def create_branch_name(commit):
    return 'original/' + commit['label']


def create_commit_title(commit):
    return 'merge ' + commit['label'] + ' 🛰'


def create_pr_title(commit):
    return '['+commit['label']+'] 번역 요청 💬'


def create_pr_body():
    return '''
새로운 번역이 왔습니다. 번역해주세요! 💤
'''

# 항상 루트에서 python ./script/update_original.py 로 실행해야 루트에 있는 Original.md 파일로 대체됩니다.
def download_from_google_style_guide_original():
    urllib.request.urlretrieve(RAW_MARKDOWN_URL, ORIGINAL_MARKDOWN_PATH)

# commit 이름과 링크를 가져옵니다.
def get_commit_from_google_style_guide_original():
    response = requests.get(GITHUB_COMMIT_API, {'path': 'pyguide.md'});
    response.raise_for_status()
    commit_histories = response.json()

    if len(commit_histories) == 0 :
        raise Exception(
            "주소가 달라졌거나 selector 포맷이 변경되었습니다. 업데이트하세요. > ( https://github.com/Yosseulsin-JOB/Google-Python-Style-Guide-kor/blob/master/script/update_original.py )")
    
    commit_history = commit_histories[0];
    return {"label": commit_history['sha'][0:7], 'url': commit_history['html_url']}


def get_repo():
    if ACCESS_TOKEN == "":
        raise Exception(
            "'ACCESS_TOKEN'값을 지정해 주세요. 이 값이 없으면 PR 생성이 불가합니다. ( https://github.com/Yosseulsin-JOB/Google-Python-Style-Guide-kor/settings/secrets/actions )")
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

    print("원본 데이터 > 다운로드 시작")

    # 스타일 가이드를 최신 버전을 가져옵니다.
    download_from_google_style_guide_original()

    print("원본 데이터 > 다운로드 완료")
    print("원본 데이터 > commit 정보 가져오기 시작")

    # 최신 버전의 commit id와 주소를 가져옵니다.
    commit = get_commit_from_google_style_guide_original()

    print("원본 데이터 > commit 정보 가져오기 완료")
    print("\n==================================")
    print("commit id : " + commit['label'])
    print("url : " + commit['url'])
    print("==================================\n")
    print("Github > 연동 작업 시작")

    # 스타일 가이드 한글판 레포를 가져옵니다.
    repo = get_repo()

    print("Github > 연동 작업 완료")
    print("Github > branch 생성 작업 시작")

    # 브랜치를 생성합니다.
    branch = create_branch(repo, commit)

    # 브랜치를 생성할 수 없는 상태라면 이미 생성된 것으로 더이상의 작업을 진행하지 않습니다.
    if branch is False:
        print('Github > branch 생성 작업 실패')
        print("\n==================================")
        print("이미 생성된 작업 요청과 동일한 Commit 입니다. 🚨")
        print("==================================\n")
        sys.exit(0)

    print("Github > branch 생성 작업 완료")
    print("Github > add 및 commit 작업 시작")

    # 업데이트 된 파일을 commit합니다.
    create_commit(repo, commit)

    print("Github > add 및 commit 작업 완료")
    print("Github > PR 작업 시작")

    # Pull Request를 생성합니다.
    create_pull_request(repo, commit)

    print("Github > PR 작업 완료")
