// ─────────────────────────────────────────────────────────────
//  사이트에 나오는 모든 글·숫자는 여기 있다.
//  ★ = 아직 실제 값이 아니다. 반드시 채워야 한다.
//
//  목적: 바이브코딩 강사 브랜딩 / 주 대상: 비개발자·입문자
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'SOLT',                       // ★ 실제 이름 또는 활동명
  greeting: "Hey. I'm Solt — a developer.",  // ★ 실제 이름
  email: 'ardors.official@gmail.com',
  location: 'Seoul, KR',
  ctaLabel: 'Follow Along',           // 히어로 버튼 문구
}

// 레퍼런스와 같은 구조: 굵은 대문자 → 세리프 이탤릭 → 굵은 대문자
export const heroTitle = [
  { text: 'Vibe Coding', style: 'heavy' },
  { text: 'for', style: 'italic' },
  { text: 'Everyone', style: 'heavy' },
]

export const heroLead =
  '코딩을 몰라도 만들 수 있습니다. AI에게 제대로 시키는 법을 가르칩니다. 첫 시간에 이론 대신, 실제로 돌아가는 걸 하나 만들어서 돌아갑니다.'

// ★ 실제 숫자를 받기 전까지 비워둔다. 지어내지 않는다.
export const stats = [
  { value: '—', label: 'Students Taught' },
  { value: '—', label: 'Sessions Run' },
  { value: '—', label: 'Hours Taught' },
  { value: '—', label: 'Would Recommend' },
]

// 비개발자 입장에서 "나에게 뭐가 좋은가"로 쓴다
export const services = [
  { title: 'NO CODING REQUIRED', desc: '코드를 외우지 않습니다. AI에게 시키는 법을 배웁니다.' },
  { title: 'BUILD FROM DAY ONE', desc: '첫 시간부터 돌아가는 결과물을 하나 만듭니다.' },
  { title: 'IDEA TO LIVE URL', desc: '머릿속 아이디어를 인터넷 주소까지 올려봅니다.' },
  { title: 'STUCK? ASK ANYTHING', desc: '막히는 지점을 그 자리에서 같이 풉니다.' },
]

export const marqueeText =
  'Vibe Coding ✱ Claude Code ✱ AI Pair Programming ✱ Ship It ✱ No Experience Needed ✱'

// 섹션 제목. head = 굵은 대문자, italic = 세리프 이탤릭
export const sections = {
  work:    { eyebrow: '01 — Selected Sessions', head: 'Selected', italic: 'Sessions' },
  about:   { eyebrow: '02 — About' },
  process: { eyebrow: '03 — How It Works', head: 'How It', italic: 'Works' },
  contact: { eyebrow: '04 — Contact' },
}

// ★ 전부 예시다. 실제 강의/워크숍/영상으로 바꿔라.
// image 에 파일 경로를 넣으면 회색 박스 대신 사진이 뜬다. (예: image: '/session-1.jpg')
export const works = [
  { no: '01', title: '★ 강의 이름', tags: '★ 대상 · 형식 · 시간', year: '2026', href: '#', image: null },
  { no: '02', title: '★ 강의 이름', tags: '★ 대상 · 형식 · 시간', year: '2026', href: '#', image: null },
  { no: '03', title: '★ 강의 이름', tags: '★ 대상 · 형식 · 시간', year: '2025', href: '#', image: null },
  { no: '04', title: '★ 강의 이름', tags: '★ 대상 · 형식 · 시간', year: '2025', href: '#', image: null },
]

export const about = {
  titleHead: 'Anyone Can',
  titleItalic: 'Ship',
  titleTail: 'Now',
  lead: '만드는 일이 개발자만의 것이던 시절은 끝났습니다. 이제 필요한 건 문법이 아니라, 원하는 걸 정확히 말하는 능력입니다.',
  // ★ 본인 이력으로 바꿔라. 확인되지 않은 숫자·경력은 넣지 마라.
  body: '★ 개발자로 일해온 이야기, 왜 가르치기 시작했는지, 어떤 사람들을 가르쳐 왔는지를 여기에 쓴다.',
  facts: [
    { key: 'Teaching', value: '바이브코딩 · AI 활용 · 노코드에서 실제 코드로' },
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

export const contact = {
  lines: [
    { text: 'Let’s', style: 'heavy' },
    { text: 'Build', style: 'italic' },
    { text: 'Together', style: 'heavy' },
  ],
  // ★ 실제 채널 주소로 바꿔라. 없는 채널은 지워라.
  links: [
    { label: 'YouTube', href: '#' },
    { label: 'Newsletter', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'GitHub', href: 'https://github.com/sjhbread' },
  ],
}

export const nav = [
  { no: '01', label: 'Sessions', href: '#work' },
  { no: '02', label: 'About', href: '#about' },
  { no: '03', label: 'How', href: '#process' },
  { no: '04', label: 'Contact', href: '#contact' },
]
