# 4주차-0924

## ch04

1.  **CSS 스타일 시트 만드는 방법**
    1.  `<style>` 태그에 스타일 시트 작성
    2.  `style` 속성에 스타일 시트 작성
    3.  스타일 시트를 별도 파일로 작성
        -   외부 파일 가져올 땐 `<link>` 태그 사용
2.  **스타일 상속**
    -   부모 태그에 속성을 지정하면 자식 태그도 속성이 지정됨
3.  **셀렉터**
    -   태그의 모양을 꾸밀 스타일 시트를 선택하는 기능\
    -   `h3 { ... }` 형식\
    -   여러 태그에 동시에 적용하려면 `,` 사용 (공백 불가)
4.  **class 셀렉터**
    -   여러 태그를 하나로 묶을 때 사용\
    -   `.abc { color: red }`\
    -   `<h1 class="abc">경성대학교 공과대학</h1>`\
    -   `.` 은 클래스를 의미\
    -   단 하나의 태그만 지정하려면 `id` 속성 사용\
    -   `body.main` 은 body 태그에 main 클래스를 가진 경우
5.  **id 셀렉터**
    -   코드에서 유일하게 지정할 때 사용\
    -   `#list { ... }`\
    -   `<ul id="list"> ... </ul>`
6.  **자식 셀렉터**
    -   `>` 기호 사용\
    -   예: `div > strong { ... }`
7.  **자손 셀렉터**
    -   공백 사용\
    -   예: `ul strong { ... }`
8.  **전체 셀렉터와 속성 셀렉터**
    -   전체: `* { ... }` (모든 태그 적용)\
    -   속성: `input[type=text] { ... }`
9.  **가상 클래스**
    -   :hover, :active (마우스)\
    -   :focus (폼 요소, blur는 포커스 해제)\
    -   :link, :visited (링크)\
    -   :first-letter, :first-line (블록)\
    -   :nth-child(even), :nth-child(1) (구조)
10. **색 표현**
    -   140개 색 이름 지원\
    -   rgb, rgba(알파값=투명도)
11. **텍스트 꾸미기**
    -   `text-indent`\
    -   `text-align: left|right|center|justify`\
    -   `text-decoration: none|underline|overline|line-through`
12. **표준 단위**
    -   브라우저마다 기본 폰트 존재
13. **폰트**
    -   클라이언트에 폰트 없을 경우 기본 폰트 적용\
    -   이를 방지하기 위해 웹폰트 사용
14. **CSS 박스 모델**
    -   HTML 태그를 하나의 박스로 처리\
    -   **padding**: 내용과 박스 사이 여백\
    -   **margin**: 요소와 요소 간 간격\
    -   **border**: 테두리 (`border-radius` 로 둥글게 가능)
15. **텍스트 그림자**
    -   `text-shadow`

------------------------------------------------------------------------

## ch05

1.  **display**

    -   `display: block`\
    -   `display: inline`\
    -   `display: inline-block`

2.  **박스 배치: position**

    -   `relative` 연습 (p.11 참고)

3.  **리스트로 nav 만들기** (p.26 참고)

4.  **CSS로 표 꾸미기**

    -   `table` → `tr` → `td` 구조\
    -   `tr` 마다 같은 개수의 `td` 필요\
    -   `tr:hover` : 마우스 올리면 강조

5.  **애니메이션**

    -   사용하지 않음 (p.38)

