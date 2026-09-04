import { curriculum, sections } from '../content'
import useReveal from '../useReveal'

function Session({ session }) {
  return (
    <li className="track__session">
      <b className="track__no">{session.no}</b>
      <div className="track__body">
        <h4>{session.title}</h4>
        <p>{session.desc}</p>
        <span className="track__out">{session.out}</span>
      </div>
    </li>
  )
}

function Track({ track, index }) {
  const ref = useReveal(index * 90)

  return (
    <article ref={ref} data-reveal="" className="track" id={`track-${track.id}`}>
      <header className="track__head">
        <h3>{track.name}</h3>
        <span className="track__hours">{track.hours}</span>
      </header>

      <p className="track__goal">{track.goal}</p>

      <dl className="track__meta">
        {track.meta.map((m) => (
          <div key={m.k}>
            <dt>{m.k}</dt>
            <dd>{m.v}</dd>
          </div>
        ))}
      </dl>

      <ol className="track__sessions">
        {track.sessions.map((s) => (
          <Session key={s.no} session={s} />
        ))}
      </ol>

      {track.note && <p className="track__note">{track.note}</p>}
    </article>
  )
}

export default function Curriculum() {
  return (
    <section className="section" id="curriculum">
      <div className="section__head">
        <span className="eyebrow">{sections.curriculum.eyebrow}</span>
        <h2 className="section__title">
          {sections.curriculum.head} <em>{sections.curriculum.italic}</em>
        </h2>
        <p className="section__note">{curriculum.note}</p>
      </div>

      <div className="tracks">
        {curriculum.tracks.map((t, i) => (
          <Track key={t.id} track={t} index={i} />
        ))}
      </div>

      {/* 기관이 계약 전에 묻는 것들. 미리 답해둔다. */}
      <dl className="ops">
        {curriculum.ops.map((o) => (
          <div key={o.k}>
            <dt>{o.k}</dt>
            <dd>{o.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
