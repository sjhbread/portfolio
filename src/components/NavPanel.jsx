import { nav, site } from '../content'

export default function NavPanel({ open, onClose }) {
  return (
    <nav
      className={`nav-panel${open ? ' is-open' : ''}`}
      id="navPanel"
      aria-hidden={!open}
    >
      <ul>
        {nav.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={onClose} tabIndex={open ? 0 : -1}>
              <em>{item.no}</em>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="nav-panel__foot">
        <a href={`mailto:${site.email}`} tabIndex={open ? 0 : -1}>
          {site.email}
        </a>
        <span>{site.location}</span>
      </div>
    </nav>
  )
}
