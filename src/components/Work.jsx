import { works, sections } from '../content'
import useReveal from '../useReveal'

function WorkCard({ item, index }) {
  const ref = useReveal((index % 4) * 70) // 살짝 시차를 두고 등장

  // 링크 걸 곳이 없는 실적은 <a> 로 두면 눌러도 아무 데도 안 간다. 그냥 카드로 그린다.
  const Tag = item.href ? 'a' : 'div'

  // 사진이 없으면 큰 빈 회색 박스가 남는다. 제출본에서는 미완성으로 읽힌다.
  // 사진이 붙기 전까지는 번호를 앞에 세운 목록형으로 그린다.
  const flat = !item.image

  return (
    <Tag
      className={`work${flat ? ' work--flat' : ''}`}
      href={item.href || undefined}
      ref={ref}
      data-reveal=""
    >
      {flat ? (
        <span className="work__index">{item.no}</span>
      ) : (
        <div className="work__thumb">
          <img src={item.image} alt={item.title} />
        </div>
      )}

      <div className="work__meta">
        <h3>{item.title}</h3>
        {item.year && <span className="work__year">{item.year}</span>}
        <p>{item.tags}</p>
      </div>
    </Tag>
  )
}

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="section__head">
        <span className="eyebrow">{sections.work.eyebrow}</span>
        <h2 className="section__title">
          {sections.work.head} <em>{sections.work.italic}</em>
        </h2>
        <p className="section__note">{sections.work.note}</p>
      </div>

      <div className="work-grid">
        {works.map((item, i) => (
          <WorkCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
