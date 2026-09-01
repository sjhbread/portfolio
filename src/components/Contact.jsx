import { contact, site, sections } from '../content'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <span className="eyebrow">{sections.contact.eyebrow}</span>

      <h2 className="contact__title">
        {contact.lines.map((line, i) => (
          <span key={i} className={line.style}>
            {line.text}
          </span>
        ))}
      </h2>

      <a className="contact__mail" href={`mailto:${site.email}`}>
        {site.email}
      </a>

      <div className="contact__links">
        {contact.links.map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {site.name}</span>
      <span>Designed &amp; built in Seoul</span>
      <a href="#top">BACK TO TOP ↑</a>
    </footer>
  )
}
