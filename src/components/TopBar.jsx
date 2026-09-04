import { useEffect, useState } from 'react'
import { site } from '../content'

export default function TopBar({ open, onToggle }) {
  const [scrolled, setScrolled] = useState(false)

  // 로고는 히어로에서만 보인다. 조금이라도 스크롤하면 사라진다.
  // MENU 버튼은 계속 남는다 — 어디서든 이동할 수 있어야 한다.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll() // 새로고침으로 중간에서 시작하는 경우
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="topbar">
      <a className={`logo${scrolled ? ' is-hidden' : ''}`} href="#top">
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
