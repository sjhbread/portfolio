import { useEffect, useState } from 'react'
import TopBar from './components/TopBar'
import NavPanel from './components/NavPanel'
import Hero from './components/Hero'
import { Strip, Marquee } from './components/Strip'
import Work from './components/Work'
import About from './components/About'
import Process from './components/Process'
import Curriculum from './components/Curriculum'
import { Contact, Footer } from './components/Contact'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  // 메뉴가 열려 있는 동안엔 뒤 배경이 스크롤되지 않게 막는다.
  // ESC 키로도 닫힌다.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <TopBar open={menuOpen} onToggle={() => setMenuOpen((v) => !v)} />
      <NavPanel open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main id="top">
        <Hero />
        <Strip />
        <Marquee />
        <Work />
        <About />
        <Process />
        <Curriculum />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
