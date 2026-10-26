# 손쌤 교실 도구 (sonssam-classroom-apps)

초등 교실에서 쓰는 작은 웹 도구 9개의 소스 코드입니다. 모두 `index.html` 하나로 만들어져 있어 **빌드 없이 파일을 열면 바로 동작**합니다. 로그인도, 서버도, 학생 정보 전송도 없습니다.

온라인 허브(설명·수업 활용 가이드·인쇄 양식): https://sonssam-hub.bluesskssk.workers.dev/

## 도구 목록

| 도구 | 분류 | 하는 일 | 바로가기 |
| --- | --- | --- | --- |
| [마블 서바이벌 레이스 프로](./marble-race/) | 학급 운영 | 번호나 모둠을 구슬로 만들어 굴려 발표자·순서·당번을 정하는 도구 | [온라인](https://sonssam-hub.bluesskssk.workers.dev/apps/marble-race/) · [가이드](https://sonssam-hub.bluesskssk.workers.dev/lessons/marble-race/) |
| [스마트 자리배치 & 모둠 메이커 프로](./seat-master/) | 학급 운영 | 학생 수와 대형을 고르면 자리를 섞고 공개 연출 후 A4로 인쇄하는 도구 | [온라인](https://sonssam-hub.bluesskssk.workers.dev/apps/seat-master/) · [가이드](https://sonssam-hub.bluesskssk.workers.dev/lessons/seat-master/) |
| [교실 신호등](./class-signal/) | 학급 운영 | 초록·노랑·빨강 신호와 큰 타이머로 활동 시간을 교실 TV에 보여 주는 도구 | [온라인](https://sonssam-hub.bluesskssk.workers.dev/apps/class-signal/) · [가이드](https://sonssam-hub.bluesskssk.workers.dev/lessons/class-signal/) |
| [토너먼트 마스터 프로](./tournament-master/) | 학급 운영 | 토너먼트·리그전·조별리그·스위스 라운드 대진표를 만들고 점수를 기록하는 도구 | [온라인](https://sonssam-hub.bluesskssk.workers.dev/apps/tournament-master/) · [가이드](https://sonssam-hub.bluesskssk.workers.dev/lessons/tournament-master/) |
| [소수 탈출 넘버 런 프로](./prime-escape/) | 수학 | 수가 나오면 소수는 일어서고 합성수는 앉는 교실 전체 수학 놀이 | [온라인](https://sonssam-hub.bluesskssk.workers.dev/apps/prime-escape/) · [가이드](https://sonssam-hub.bluesskssk.workers.dev/lessons/prime-escape/) |
| [해상 함대전 배틀쉽 프로](./battleship/) | 수학 | A~J × 1~10 좌표로 함선을 찾는 좌표 보드게임(AI 대전·2인 대결·좌표 스피드 훈련) | [온라인](https://sonssam-hub.bluesskssk.workers.dev/apps/battleship/) · [가이드](https://sonssam-hub.bluesskssk.workers.dev/lessons/battleship/) |
| [사목 대결 — 네 칸 연결](./connect-four/) | 수학·학급 놀이 | 7열×6행 판에서 같은 색 네 칸을 먼저 잇는 전략 보드게임 | [온라인](https://sonssam-hub.bluesskssk.workers.dev/apps/connect-four/) · [가이드](https://sonssam-hub.bluesskssk.workers.dev/lessons/connect-four/) |
| [수학 확률 탐구 실험실 프로](./dice-math-lab/) | 수학 | 주사위 실험과 대량 시뮬레이션으로 상대도수와 이론 확률을 비교하는 도구 | [온라인](https://sonssam-hub.bluesskssk.workers.dev/apps/dice-math-lab/) · [가이드](https://sonssam-hub.bluesskssk.workers.dev/lessons/dice-math-lab/) |
| [구글 스프레드시트 공공데이터 실습 가이드북](./data-graph-lab/) | 실과·정보·수학 | 구글 스프레드시트로 CSV 열기·수식·막대/원그래프·해석 문장까지 7단계로 안내하는 학생용 실습 가이드 | [온라인](https://sonssam-hub.bluesskssk.workers.dev/apps/data-graph-lab/) · [가이드](https://sonssam-hub.bluesskssk.workers.dev/lessons/data-graph-lab/) |

## 쓰는 법

각 폴더의 `index.html`을 브라우저로 엽니다. 자세한 설명은 폴더 안 `README.md` 에 있습니다.

## 개인정보

- 모든 도구는 정보를 서버로 보내지 않습니다. 일부 도구(마블 레이스, 자리배치, 교실 신호등, 토너먼트)는 설정과 명단을 **이 브라우저에만** 저장합니다. 공용 기기에서 실명을 썼다면 사용 후 브라우저 사이트 데이터를 지우세요.
- 화면에 들어 있는 예시 이름은 샘플입니다. 실제 학생 이름으로 바꿔 쓰세요.

## 공개하지 않은 도구

이 저장소에는 외부 이미지·교재 파일이 섞여 있어 권리 확인이 필요한 도구(초록별 에코팜, 우주탐사 아카데미)는 넣지 않았습니다.

## 라이선스

MIT License. 학교·교육 목적으로 자유롭게 쓰고 고치고 나눌 수 있습니다. `LICENSE` 를 보세요.
