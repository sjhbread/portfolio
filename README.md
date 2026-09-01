# SOLT — Vibe Coding for Everyone

바이브코딩 강사 랜딩페이지. React + Vite.

**라이브: https://sjhbrad-vibe.vercel.app**

## 실행

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # dist/ 폴더에 결과물 생성
```

## 내용 수정

글·숫자·강의 목록·섹션 제목은 전부 `src/content.js` 한 파일에 있다.
`★` 표시가 붙은 값은 아직 실제 값이 아니다. 반드시 채워야 한다.

## 사진 넣기

- 인물 사진: `public/photo.jpg`
- 강의 썸네일: `public/` 에 넣고 `src/content.js` 의 `image` 값에 경로 지정 (예: `image: '/session-1.jpg'`)

## 배포

배포는 **Vercel 하나로 통일**했다.

```bash
git add -A && git commit -m "무엇을 바꿨는지"
./deploy.sh      # npx vercel --prod
git push
```

> **자동 배포로 바꾸려면**: Vercel 계정에 GitHub 로그인 연결을 추가한 뒤
> (https://vercel.com/account/login-connections) `npx vercel git connect` 를 실행한다.
> 그러면 `git push` 만으로 배포된다.

옛 GitHub Pages 주소(`sjhbread.github.io/portfolio/`)는 은퇴했고,
접속하면 위 Vercel 주소로 자동 이동한다.

## 폰트

- 영문: Anton(굵은 대문자) · Playfair Display(세리프 이탤릭) · EB Garamond(본문) · Oswald(라벨)
- 한글: **Pretendard 고정**

CSS 변수에서 라틴 폰트를 앞, Pretendard 를 뒤에 둔다.
브라우저가 글자마다 앞에서부터 폰트를 찾으므로, 라틴 폰트에 없는 한글만 Pretendard 로 떨어진다.

## 구조

```
src/
  content.js       ← 모든 글·숫자·섹션 제목
  styles.css       ← 모든 디자인 (색은 --bg / --ink / --accent 세 개)
  App.jsx          ← 조각들을 순서대로 배치
  useReveal.js     ← 스크롤 등장 효과
  components/      ← 화면 조각들
```
