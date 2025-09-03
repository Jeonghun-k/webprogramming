# webprogramming

# 웹프로그래밍 수업 — 간략 마크다운 프로그램

## 1) 한줄 요약 ✔️  
웹기초(HTML/CSS/JS) → 프론트엔드 실습 → 간단 백엔드 연동(REST) → 최종 프로젝트(포트폴리오) 순서의 8주 단기 코스입니다.

---

# 핵심 개념 정리 (키워드 표)
| 키워드 | 설명(간단) |
|---|---|
| `HTML` | 문서 구조(마크업) 📄 |
| `CSS` | 스타일(레이아웃, 반응형) 🎨 |
| `JavaScript` | 동적 동작, DOM 조작 ⚙️ |
| `HTTP/REST` | 클라이언트-서버 통신 🌐 |
| `AJAX/Fetch` | 비동기 데이터 요청 ↔️ |
| `Git` | 버전관리 (기본) 🧾 |
| `Responsive` | 반응형 디자인 (모바일 우선) 📱 |

---

# 단계별 사고 방식 (체크리스트 + 흐름도)
- [ ] 요구사항 분석 → 화면 설계(와이어프레임)
- [ ] 정적 페이지(HTML) 작성
- [ ] 스타일 적용(CSS, Flex/Grid, 미디어쿼리)
- [ ] 동적 기능 추가(JS: 이벤트, DOM)
- [ ] 외부 API 연동(Fetch/AJAX)
- [ ] 간단 백엔드(Express 등)와 REST 연동
- [ ] 배포(깃허브 페이지 또는 간단 호스팅)

간단 흐름도 (ASCII):
```
아이디어 → 설계 → HTML → CSS → JS → API 연동 → 테스트 → 배포
```

---

# 수업 요약(주별 플랜 — 8주)
| 주차 | 주제 | 실습/과제 |
|---:|---|---|
| 1주 | 웹의 기초(인터넷, 브라우저, HTML) | 간단한 개인 프로필 HTML 페이지 |
| 2주 | CSS 기본, 박스모델, Flexbox | 반응형 카드 레이아웃 만들기 |
| 3주 | 레이아웃(Grid, 미디어쿼리) | 모바일/데스크톱 레이아웃 완성 |
| 4주 | JavaScript 기초(문법, DOM) | 버튼 클릭으로 내용 변경 기능 |
| 5주 | 이벤트, 폼 처리, 로컬 스토리지 | 간단 To-Do 앱 (로컬 저장) |
| 6주 | Fetch API + 외부 API 사용 | 공개 API로 데이터 표시(예: 날씨) |
| 7주 | 간단 백엔드 개념 + REST | Express 기초(간단 CRUD API) |
| 8주 | 최종 프로젝트 발표 & 배포 | 포트폴리오 페이지 완성/배포 |

---

# 평가 방식 (간단)
- 출석/참여: 20%  
- 주간 과제(실습): 40%  
- 중간 과제(작은 앱): 15%  
- 최종 프로젝트: 25%

---

# 예시 과제 (실습 템플릿)
**To-Do 앱 핵심 코드(간단)**

```html
<!-- index.html -->
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Todo</title>
  </head>
  <body>
    <input id="taskInput" placeholder="할 일 입력" />
    <button id="addBtn">추가</button>
    <ul id="list"></ul>

    <script>
      const input = document.getElementById('taskInput');
      const btn = document.getElementById('addBtn');
      const list = document.getElementById('list');

      btn.addEventListener('click', () => {
        const text = input.value.trim();
        if (!text) return;
        const li = document.createElement('li');
        li.textContent = text;
        list.appendChild(li);
        input.value = '';
      });
    </script>
  </body>
</html>
```

---

# 실전 적용 팁 (고급 팁)
1. **모바일 우선(Mobile-first)** — CSS 작성 시 작은 화면 기준으로 시작하세요.  
2. **컴포넌트화** — 반복 UI는 재사용 가능한 컴포넌트(함수/모듈)로 분리.  
3. **디버깅 습관** — `console.log`, 브라우저 개발자 도구(F12)를 적극 활용.  
4. **작게 자주 커밋** — Git 커밋을 작고 의미있게 남기면 복구가 쉬움.  
5. **접근성(a11y)** — `alt`, `aria-*`, 시맨틱 HTML을 신경쓰세요.

---

# 추천 자료 (빠르게 시작)
- MDN Web Docs (HTML/CSS/JS) — 기초 및 레퍼런스  
- freeCodeCamp — 실습형 튜토리얼  
- GitHub Pages / Netlify — 간단 배포용

---

# 수업 결과물(권장)
- 개인 포트폴리오 페이지(최종 프로젝트)
- GitHub 저장소(과제 및 코드)
- 최소 1개의 REST 연동 실습 예제

---

# 핵심 요약 (한눈에)
- 목표: **기초 웹 개발 → 작은 웹앱 제작 → 배포**  
- 핵심 스택: `HTML`, `CSS`, `JavaScript`, `Fetch`, (간단) `Express`  
- 기간: **8주** 권장, 주당 **실습 3~5시간** 권장
