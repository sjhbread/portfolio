// ─────────────────────────────────────────────────────────────
//  사이트에 나오는 모든 글·숫자는 여기 있다.
//  ⚠ = 임시로 채워둔 값이다. 공개 전에 실제 값으로 바꿔라.
//
//  목적: 바이브코딩 강사 브랜딩 / 주 대상: 비개발자·입문자
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'sjhbread',
  // 한 줄을 넘기면 제목이 밀린다. 이 길이가 상한선이다.
  greeting: "Hey. I'm sjhbread — a developer.",
  email: 'ardors.official@gmail.com',
  location: 'Seoul, KR',
  // 심사자가 지금 당장 할 수 있는 행동 둘. 주 = 궁금한 것 확인, 보조 = 연락.
  ctaPrimary:   { label: '제안 과정 보기', href: '#curriculum' },
  ctaSecondary: { label: '수업 문의하기', href: 'mailto:ardors.official@gmail.com' },
}

// 레퍼런스와 같은 구조: 굵은 대문자 → 세리프 이탤릭 → 굵은 대문자
export const heroTitle = [
  { text: 'Vibe Coding', style: 'heavy' },
  { text: 'for', style: 'italic' },
  { text: 'Everyone', style: 'heavy' },
]

export const heroLead =
  '코딩을 몰라도 만들 수 있습니다. AI에게 제대로 시키는 법을 가르칩니다. 첫 시간에 이론 대신, 실제로 돌아가는 걸 하나 만들어서 돌아갑니다.'

// 실제 실적만 쓴다. 근거를 못 대는 숫자는 기관 제출물에서 리스크가 된다.
// 34회 · 96시간 = 스크래치·파이썬 교육(26회/80h) + 대학생 대상 교육(8회/16h).
// 프로그램 3개 = 스크래치 · 파이썬 · 대학생 과정(별도 설계).
// kr: true 는 한글 값이라는 표시. Anton 에 한글이 없어서 조판을 따로 잡는다.
export const stats = [
  { value: '34', label: 'Sessions Run' },
  { value: '96', label: 'Hours Taught' },
  { value: '3',  label: 'Programs Designed' },
  { value: '초등–대학', label: 'Age Range Taught', kr: true },
]

// 앞 2칸 = 수강생이 얻는 것. 뒤 2칸 = 기관이 확인하고 싶은 것.
export const services = [
  { title: 'NO CODING REQUIRED', desc: '코드를 외우지 않습니다. AI에게 시키는 법을 배웁니다.' },
  { title: 'BUILD FROM DAY ONE', desc: '첫 시간부터 돌아가는 결과물을 하나 만듭니다.' },
  { title: 'EVERY SESSION SHIPS', desc: '매 회차 끝에 수강생 손에 결과물이 하나씩 남습니다. 기관 홍보 자료로 그대로 쓸 수 있습니다.' },
  { title: 'PROVEN ACROSS AGES', desc: '초등부터 대학까지 34회 96시간. 대상이 바뀌면 난이도와 예제를 다시 설계합니다.' },
]

export const marqueeText =
  'Vibe Coding ✱ Claude Code ✱ AI Pair Programming ✱ Ship It ✱ No Experience Needed ✱'

// 섹션 제목. head = 굵은 대문자, italic = 세리프 이탤릭
export const sections = {
  work:       { eyebrow: '01 — Teaching Record', head: 'Teaching', italic: 'Record',
                note: '스크래치·파이썬 과정 26회 80시간, 대학생 과정 8회 16시간. 합계 34회 96시간.' },
  about:      { eyebrow: '02 — About' },
  process:    { eyebrow: '03 — How It Works', head: 'How It', italic: 'Works' },
  curriculum: { eyebrow: '04 — Proposed Programs', head: 'Proposed', italic: 'Programs' },
  contact:    { eyebrow: '05 — Contact' },
}

// 확인된 사실만 적는다. 기관 제출물이라 못 대는 근거는 그대로 리스크가 된다.
//
// ⚠ 아직 못 채운 것 — 확인되면 바로 넣어라:
//    - 각 프로그램의 진행 기관명 (사이트 공개 가능 여부도 같이)
//    - 진행 연도 (year 필드가 비어 있으면 화면에 아무것도 안 나온다)
//    - 스크래치 / 파이썬 각각의 회차·시간 분리 (지금은 26회·80시간 합산만 확인됨)
//    - 각 프로그램 대상 학년 (초등/중등 추정으로 쓰지 않았다)
//
// href 가 없으면 링크가 아니라 그냥 카드로 그려진다.
// image 에 파일 경로를 넣으면 회색 박스 대신 사진이 뜬다. (예: image: '/session-1.jpg')
export const works = [
  { no: '01', title: '대학생 대상 프로그래밍 과정', tags: '대학생 · 8회 · 16시간', year: '', href: null, image: null },
  { no: '02', title: '파이썬 교육 프로그램',        tags: '파이썬 기초',            year: '', href: null, image: null },
  { no: '03', title: '스크래치 교육 프로그램',      tags: '블록 코딩 기초',          year: '', href: null, image: null },
]

export const about = {
  titleHead: 'Anyone Can',
  titleItalic: 'Ship',
  titleTail: 'Now',
  lead: '만드는 일이 개발자만의 것이던 시절은 끝났습니다. 이제 필요한 건 문법이 아니라, 원하는 걸 정확히 말하는 능력입니다.',
  // ⚠ 세부 사실(기관명·연도)은 아직 안 넣었다. 확인되면 채운다.
  body: '스크래치와 파이썬으로 34회, 96시간을 가르쳤습니다. 초등학생부터 대학생까지 대상이 달랐고, 그때마다 예제와 난이도를 다시 설계했습니다. 스크래치를 가르치며 확인한 게 하나 있습니다. 아이들이 막히는 지점은 문법이 아니라 "내가 뭘 만들고 싶은지"를 말로 정리하지 못하는 순간이라는 것. 바이브코딩은 그 지점을 정면으로 다루는 도구입니다. 문법을 걷어내고 남은 건 결국 같은 능력입니다 — 원하는 걸 정확히 말하는 것. 도구가 스크래치에서 AI로 바뀌었을 뿐, 34회 동안 가르쳐온 것과 같습니다.',
  facts: [
    { key: 'Taught', value: '스크래치 · 파이썬 · 바이브코딩' },
    { key: 'Learners', value: '초등 · 중등 · 대학' },
    { key: 'Tools', value: 'Claude Code · Cursor · Vercel' },
    { key: 'Based in', value: 'Seoul, South Korea' },
  ],
}

// 수업이 굴러가는 방식
export const process = [
  { no: '01', title: 'Bring', desc: '만들고 싶은 걸 하나 가지고 옵니다. 거창하지 않아도 됩니다.' },
  { no: '02', title: 'Prompt', desc: 'AI에게 어떻게 말해야 원하는 게 나오는지 배웁니다.' },
  { no: '03', title: 'Ship', desc: '만든 걸 실제 인터넷 주소에 올립니다. 남들이 볼 수 있게.' },
  { no: '04', title: 'Repeat', desc: '혼자서도 다음 걸 만들 수 있는 상태로 끝납니다.' },
]

// ─────────────────────────────────────────────────────────────
//  제안 과정. 기관 심사자가 제일 먼저 확인하는 부분이다.
//
//  ⚠ 아래 운영 항목은 초안이다. 제출 전에 본인이 직접 확인해서 확정해라:
//     - 정원 12~16명이 실제로 혼자 감당 가능한 숫자인지
//     - AI 도구 무료 등급으로 전 회차가 실제로 돌아가는지
//     - 회당 2시간이 기관 시간표와 맞는지
//  숫자와 조건은 기관이 그대로 계약서에 옮겨 적는 부분이다. 추정으로 두면 안 된다.
// ─────────────────────────────────────────────────────────────

export const curriculum = {
  note: '회당 2시간 기준으로 짠 구성입니다. 대상 연령·회차 수·정원은 기관 사정에 맞춰 조정합니다.',

  tracks: [
    {
      id: 'short',
      name: '입문 4회차',
      hours: '총 8시간 · 2시간 × 4회',
      goal: '수강생 전원이 자기 웹페이지를 인터넷 주소에 올리고 끝냅니다.',
      meta: [
        { k: '대상', v: '중등 이상 · 코딩 경험 불필요' },
        { k: '정원', v: '12~16명' },
        { k: '형식', v: '노트북 실습 · 온·오프라인 모두 가능' },
      ],
      sessions: [
        {
          no: '01', title: '첫 화면 띄우기',
          desc: '도구 세팅부터 시작해 첫 시간 안에 화면에 뜨는 페이지를 하나 만듭니다. 이론 설명으로 시작하지 않습니다.',
          out: '내 화면에서 돌아가는 페이지',
        },
        {
          no: '02', title: '원하는 대로 고치기',
          desc: '같은 요청을 다르게 말해보며 결과가 어떻게 달라지는지 봅니다. 되는 요청과 안 되는 요청의 차이를 몸으로 익힙니다.',
          out: '내가 정한 주제로 바뀐 페이지',
        },
        {
          no: '03', title: '동작하는 기능 붙이기',
          desc: '버튼·입력창·목록 중 하나를 골라, 실제로 눌리고 반응하는 기능을 답니다.',
          out: '동작하는 기능 1개',
        },
        {
          no: '04', title: '인터넷에 올리기',
          desc: '만든 것을 배포해 주소를 만듭니다. 각자 링크를 공유하고 서로 눌러봅니다.',
          out: '공개된 웹 주소',
        },
      ],
    },

    {
      id: 'full',
      name: '정규 8회차',
      hours: '총 16시간 · 2시간 × 8회',
      goal: '각자 직접 기획한 것을 만들어 배포하고, 마지막 시간에 시연합니다.',
      meta: [
        { k: '대상', v: '중등 이상 · 코딩 경험 불필요' },
        { k: '정원', v: '12~16명' },
        { k: '형식', v: '노트북 실습 · 오프라인 권장' },
      ],
      sessions: [
        {
          no: '01', title: '첫 화면 띄우기',
          desc: '도구 세팅과 첫 페이지. 4회차 과정과 같되, 각자 만들고 싶은 것을 미리 한 줄로 적어둡니다.',
          out: '돌아가는 페이지 + 만들고 싶은 것 한 줄',
        },
        {
          no: '02', title: '말 바꿔가며 고치기',
          desc: '프롬프트를 다르게 써보며 원하는 화면에 가까이 갑니다. AI가 잘못 알아듣는 지점을 찾아냅니다.',
          out: '주제에 맞게 바뀐 페이지',
        },
        {
          no: '03', title: '화면 여러 개 만들기',
          desc: '페이지 하나에서 여러 개로. 메뉴와 이동을 붙여 하나의 사이트 모양을 갖춥니다.',
          out: '화면 3개 이상이 연결된 사이트',
        },
        {
          no: '04', title: '기능과 데이터',
          desc: '입력한 내용이 저장되고 다시 보이는 구조를 만듭니다. 여기서 처음으로 코드를 열어 봅니다 — 읽기만 합니다.',
          out: '입력·저장이 되는 기능',
        },
        {
          no: '05', title: '내 프로젝트 정하기',
          desc: '만들고 싶은 것을 확정하고, 그것을 AI가 알아들을 수 있는 문장으로 바꿔 씁니다. 이 회차가 과정 전체의 분기점입니다.',
          out: '기획 한 장 + 첫 프롬프트',
        },
        {
          no: '06', title: '만들기 1',
          desc: '각자 자기 것을 만듭니다. 강사는 막히는 지점을 개별로 붙어서 풉니다.',
          out: '절반쯤 돌아가는 내 프로젝트',
        },
        {
          no: '07', title: '만들기 2 · 배포',
          desc: '마무리하고 인터넷에 올립니다. 주소가 생깁니다.',
          out: '공개된 내 프로젝트 주소',
        },
        {
          no: '08', title: '시연회',
          desc: '각자 3분씩 자기가 만든 것을 보여줍니다. 기관 관계자 참관을 권합니다.',
          out: '시연 영상·사진 · 수강생별 공개 주소',
        },
      ],
    },
  ],

  // 기관이 계약 전에 반드시 묻는 것들. 먼저 답해두면 문의가 한 번 줄어든다.
  ops: [
    { k: '준비물', v: '인터넷이 되는 노트북 1인 1대. 별도 실습실 세팅은 필요 없습니다.' },
    { k: 'AI 도구', v: '무료 등급 기준으로 구성합니다. 유료 계정이 필요한 심화 구성은 별도 협의.' },
    { k: '산출물', v: '수강생 1인당 공개 웹 주소 1개. 기관 홍보 자료로 그대로 쓸 수 있습니다.' },
    { k: '조정 가능', v: '대상 연령 · 회차 수 · 회당 시간 · 정원. 초등 대상은 예제와 난이도를 다시 설계합니다.' },
  ],
}

export const contact = {
  lines: [
    { text: 'Let’s', style: 'heavy' },
    { text: 'Build', style: 'italic' },
    { text: 'Together', style: 'heavy' },
  ],
  // 실제로 굴러가는 채널만 둔다. 이메일은 바로 위에 따로 크게 나온다.
  links: [
    { label: 'Instagram', href: 'https://www.instagram.com/sjhbread/' },
    { label: 'GitHub', href: 'https://github.com/sjhbread' },
  ],
}

export const nav = [
  { no: '01', label: 'Record', href: '#work' },
  { no: '02', label: 'About', href: '#about' },
  { no: '03', label: 'How', href: '#process' },
  { no: '04', label: 'Programs', href: '#curriculum' },
  { no: '05', label: 'Contact', href: '#contact' },
]
