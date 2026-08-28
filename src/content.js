// ─────────────────────────────────────────────────────────────
//  사이트에 나오는 모든 글·숫자는 여기 있다.
//  ★ 표시는 지금 예시값이다. 실제 값으로 바꿔야 한다.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'SOLT',                       // ★ 로고 / 푸터에 나오는 이름
  greeting: "Hey. I'm Solt,",         // ★
  email: 'ardors.official@gmail.com', // ★
  location: 'Seoul, KR',
}

export const heroTitle = [
  { text: 'A UI/UX', style: 'heavy' },   // 굵은 대문자
  { text: '& Brand', style: 'italic' },  // 세리프 이탤릭
  { text: 'Designer', style: 'heavy' },
]

export const heroLead =
  '아이디어를 눈에 보이는 결과로 바꿉니다. 시선을 붙잡고, 머물게 하고, 결국 행동하게 만드는 UI/UX와 브랜드 디자인.'

// ★ 전부 예시 숫자다. 사실과 다르면 반드시 고쳐라.
export const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '280+', label: 'Projects Delivered' },
  { value: '*99%', label: 'Client Satisfaction' },
  { value: '50', label: 'Clients Worldwide' },
]

export const services = [
  { title: 'USER-CENTERED DESIGN', desc: '사용자에게 딱 맞춘, 직관적이고 몰입되는 경험.' },
  { title: 'BRAND IDENTITY & STRATEGY', desc: '기억에 남는 브랜드를 만드는 강한 시각적 서사.' },
  { title: 'RESPONSIVE & MODERN UI', desc: '어떤 화면에서도 흐트러지지 않는 픽셀 단위 설계.' },
  { title: 'SEAMLESS PROTOTYPING', desc: '개발 전에 만져보는 인터랙티브 목업.' },
]

export const marqueeText =
  'UI/UX Design ✱ Brand Identity ✱ Design System ✱ Prototyping ✱ Art Direction ✱'

// ★ 전부 예시 프로젝트다. 실제 작업으로 바꿔라.
// image 에 파일 경로를 넣으면 회색 박스 대신 사진이 뜬다. (예: image: '/work-1.jpg')
export const works = [
  { no: '01', title: 'Nova Finance App', tags: '모바일 뱅킹 · UI/UX · 디자인 시스템', year: '2025', href: '#', image: null },
  { no: '02', title: 'Ardor Studio Rebrand', tags: '브랜드 아이덴티티 · 아트 디렉션', year: '2025', href: '#', image: null },
  { no: '03', title: 'Loop Commerce', tags: '이커머스 · 웹 디자인 · 전환 최적화', year: '2024', href: '#', image: null },
  { no: '04', title: 'Halo Health', tags: '헬스케어 SaaS · 대시보드 · 프로토타입', year: '2024', href: '#', image: null },
]

export const about = {
  titleHead: '디자인은',
  titleItalic: '결정',
  titleTail: '의 기록',
  lead: '예쁜 화면을 만드는 일이 아니라, 왜 이 버튼이 여기 있어야 하는지를 설명할 수 있게 만드는 일이라고 생각합니다.',
  // ★ 아래 문단의 연차·프로젝트 수도 예시다.
  body: '15년 동안 스타트업부터 대기업까지 280개가 넘는 프로젝트를 진행했습니다. 브랜드의 뼈대를 세우는 일부터, 매일 쓰이는 제품 화면을 다듬는 일까지. 공통점은 하나입니다 — 숫자로 확인되는 결과.',
  facts: [
    { key: 'Design', value: 'UI/UX · 브랜드 · 디자인 시스템' },
    { key: 'Tools', value: 'Figma · Framer · After Effects' },
    { key: 'Based in', value: 'Seoul, South Korea' },
  ],
}

export const process = [
  { no: '01', title: 'Discover', desc: '문제를 정의합니다. 사용자, 경쟁사, 데이터부터 봅니다.' },
  { no: '02', title: 'Define', desc: '구조와 흐름을 잡습니다. 화면을 그리기 전에 결정을 먼저.' },
  { no: '03', title: 'Design', desc: '비주얼과 시스템을 만듭니다. 재사용 가능한 단위로.' },
  { no: '04', title: 'Deliver', desc: '개발에 넘기고, 출시 후 숫자를 보며 다듬습니다.' },
]

export const contact = {
  lines: [
    { text: '함께', style: 'heavy' },
    { text: '만들어', style: 'italic' },
    { text: '볼까요', style: 'heavy' },
  ],
  // ★ 실제 프로필 주소로 바꿔라.
  links: [
    { label: 'LinkedIn', href: '#' },
    { label: 'Behance', href: '#' },
    { label: 'Dribbble', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
}

export const nav = [
  { no: '01', label: 'Work', href: '#work' },
  { no: '02', label: 'About', href: '#about' },
  { no: '03', label: 'Process', href: '#process' },
  { no: '04', label: 'Contact', href: '#contact' },
]
