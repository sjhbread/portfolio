import { curriculum, sections } from '../content'
import useReveal from '../useReveal'

// 회차 하나. 홀수는 선 왼쪽, 짝수는 오른쪽에 붙는다.
function Step({ step, index }) {
  const ref = useReveal(index * 90)
  const side = index % 2 === 0 ? 'is-left' : 'is-right'

  return (
    <li ref={ref} data-reveal="" className={`tl-step ${side}`}>
      <span className="tl-step__dot" aria-hidden="true" />

      <div className="tl-step__side">
        <div className="tl-step__connector" aria-hidden="true">
          <span className="tl-step__badge">{step.no}</span>
          <span className="tl-step__dash" />
        </div>

        <div className="tl-step__body">
          <span className="tl-step__label">Step {Number(step.no)}</span>
          <h4>{step.title}</h4>
          <p>{step.desc}</p>
          <span className="tl-step__out">{step.out}</span>
        </div>
      </div>
    </li>
  )
}

function Track({ track }) {
  return (
    <article className="track" id={`track-${track.id}`}>
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

      <ol className="timeline">
        {track.sessions.map((s, i) => (
          <Step key={s.no} step={s} index={i} />
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
        <h2 className="section__title">
          {sections.curriculum.head} <em>{sections.curriculum.italic}</em>
        </h2>
        <p className="section__note">{curriculum.note}</p>
      </div>

      {curriculum.tracks.map((t) => (
        <Track key={t.id} track={t} />
      ))}

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
