import { works } from '../content'
import useReveal from '../useReveal'

function WorkCard({ item, index }) {
  const ref = useReveal((index % 4) * 70) // 살짝 시차를 두고 등장

  return (
    <a className="work" href={item.href} ref={ref} data-reveal="">
      <div className="work__thumb">
        {item.image ? <img src={item.image} alt={item.title} /> : <span>{item.no}</span>}
      </div>
      <div className="work__meta">
        <h3>{item.title}</h3>
        <span className="work__year">{item.year}</span>
        <p>{item.tags}</p>
      </div>
    </a>
  )
}

export default function Work() {
  return (
    <section className="section" id="work">
      <div className="section__head">
        <span className="eyebrow">01 — Selected Work</span>
        <h2 className="section__title">
          최근 <em>작업들</em>
        </h2>
      </div>

      <div className="work-grid">
        {works.map((item, i) => (
          <WorkCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
