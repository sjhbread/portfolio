import { process, sections } from '../content'
import useReveal from '../useReveal'

function Step({ step, index }) {
  const ref = useReveal(index * 70)

  return (
    <li ref={ref} data-reveal="">
      <b>{step.no}</b>
      <h3>{step.title}</h3>
      <p>{step.desc}</p>
    </li>
  )
}

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="section__head">
        <span className="eyebrow">{sections.process.eyebrow}</span>
        <h2 className="section__title">
          {sections.process.head} <em>{sections.process.italic}</em>
        </h2>
      </div>

      <ol className="process">
        {process.map((step, i) => (
          <Step key={step.no} step={step} index={i} />
        ))}
      </ol>
    </section>
  )
}
