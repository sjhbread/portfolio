import { services, marqueeText } from '../content'

export function Strip() {
  return (
    <section className="strip">
      {services.map((s) => (
        <article key={s.title}>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </article>
      ))}
    </section>
  )
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      {/* 같은 문구를 두 번 넣어야 끊김 없이 이어져 흐른다 */}
      <div className="marquee__track">
        <span>{marqueeText}</span>
        <span>{marqueeText}</span>
      </div>
    </div>
  )
}
