# SOLT — Portfolio

React + Vite 로 만든 1페이지 포트폴리오.

## 실행

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ 폴더에 결과물 생성
```

## 내용 수정

글·숫자·프로젝트 목록은 전부 `src/content.js` 한 파일에 있다.
그 파일만 고치면 사이트 전체가 바뀐다. `★` 표시가 붙은 값은 예시라 반드시 실제 값으로 바꿔야 한다.

## 사진 넣기

- 인물 사진: `public/photo.jpg`
- 작업 썸네일: `public/` 에 넣고 `src/content.js` 의 `image` 값에 경로 지정 (예: `image: '/work-1.jpg'`)

## 배포

```bash
./deploy.sh
```

빌드한 뒤 `gh-pages` 브랜치에 올린다. GitHub Pages 가 그 브랜치를 그대로 서빙한다.

> push 할 때마다 자동 배포되게 하려면 GitHub Actions 를 쓰면 된다.
> 그러려면 `gh auth refresh -s workflow` 로 `workflow` 권한을 한 번 열어야 한다.

주소가 `https://<계정>.github.io/<저장소>/` 형태이므로 `BASE` 값이 저장소 이름과 같아야 한다.
자체 도메인이나 Vercel 처럼 루트에 올릴 때는 `BASE=/ npm run build`.

## 구조

```
src/
  content.js       ← 모든 글·숫자
  styles.css       ← 모든 디자인
  App.jsx          ← 조각들을 순서대로 배치
  useReveal.js     ← 스크롤 등장 효과
  components/      ← 화면 조각들
```
