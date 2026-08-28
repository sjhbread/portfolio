import { site } from '../content'

export default function TopBar({ open, onToggle }) {
  return (
    <header className="topbar">
      <a className="logo" href="#top">
        <span className="dot" />
        {site.name}
      </a>

      <button
        className="menu-btn"
        aria-expanded={open}
        aria-controls="navPanel"
        onClick={onToggle}
      >
        <span className="menu-btn__label">MENU</span>
        <span className="menu-btn__bars" aria-hidden="true">
          <i />
          <i />
        </span>
      </button>
    </header>
  )
}
