import { about, sections } from '../content'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="section__head">
        <span className="eyebrow">{sections.about.eyebrow}</span>
        <h2 className="section__title">
          {about.titleHead} <em>{about.titleItalic}</em> {about.titleTail}
        </h2>
      </div>

      <div className="about__body">
        <p className="about__lead">{about.lead}</p>
        <p>{about.body}</p>

        <ul className="about__list">
          {about.facts.map((f) => (
            <li key={f.key}>
              <b>{f.key}</b>
              <span>{f.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
