"git_errors": [
    {
      "command": "git add",
      "errors": [
        {
          "error": "fatal: not a git repository",
          "cause": "현재 디렉토리가 Git 저장소로 초기화되지 않았거나, .git 폴더가 없을 때 발생합니다.",
          "solution": [
            "pwd 명령어로 현재 위치 확인",
            "cd 명령어로 올바른 프로젝트 디렉토리로 이동",
            "git init 실행하여 새 저장소 초기화"
          ]
        },
        {
          "error": "fatal: pathspec '...' did not match any files",
          "cause": "Git이 지정된 파일이나 디렉토리를 찾지 못했을 때 발생합니다.",
          "solution": [
            "ls 명령어로 현재 디렉토리의 파일 목록 확인",
            "파일 이름의 대소문자, 확장자, 경로를 정확히 확인",
            "와일드카드()를 사용하여 여러 파일 한 번에 추가 가능 (예: git add.txt)"
          ]
        }
      ]
      }
      ]