# 교실 신호등

초록·노랑·빨강 신호와 큰 타이머로 활동 시간을 교실 TV에 보여 주는 도구. (분류: 학급 운영)

## 어떻게 실행하나요

1. 이 폴더의 `index.html`을 더블클릭해 브라우저(Chrome·Edge 권장)로 엽니다. 설치도, 로그인도 필요 없습니다.
2. 또는 이 저장소 전체를 내려받은 뒤 터미널에서 `python3 -m http.server` 를 실행하고 `http://localhost:8000/class-signal/` 를 엽니다.
3. 온라인 버전: https://sonssam-hub.bluesskssk.workers.dev/apps/class-signal/

> 상단 파란 막대(소리·전체화면)는 저장소 루트의 `common-nav.js` 를 씁니다. `class-signal` 폴더만 따로 옮기면 이 막대는 나오지 않고 도구는 그대로 동작합니다.

## 사용 전 확인

- 로그인: 없음 / 비용: 무료
- 인터넷: 필요 없음(처음부터 이 폴더 안의 파일만 씁니다)
- 저장되는 정보: 마지막 활동·시간 설정이 이 브라우저(localStorage)에 저장됩니다. 학생 이름은 받지 않습니다.
- 외부 서버로 전송: 없음

## 수업에서 쓰는 방법

수업 활용 가이드(준비, 수업 흐름, 팁, 자주 묻는 질문): https://sonssam-hub.bluesskssk.workers.dev/lessons/class-signal/

## 라이선스

MIT License — 저장소 루트의 `LICENSE` 를 보세요. 학교·교육 목적으로 자유롭게 쓰고 고칠 수 있습니다.
