import { useState } from 'react'
import { site, heroTitle, heroLead, stats } from '../content'

// public/photo.jpg 를 넣으면 사진이 뜬다. 없으면 안내 문구가 보인다.
const PHOTO = `${import.meta.env.BASE_URL}photo.jpg`

export default function Hero() {
  const [photoFailed, setPhotoFailed] = useState(false)

  return (
    <section className="hero">
      <div className="hero__copy">
        <p className="hero__hi">{site.greeting}</p>

        <h1 className="hero__title">
          {heroTitle.map((line, i) => (
            <span key={i} className={`line ${line.style}`}>
              {line.text}
            </span>
          ))}
        </h1>

        <p className="hero__lead">{heroLead}</p>

        <a className="btn" href="#contact">
          <span>{site.ctaLabel}</span>
          <i className="btn__arrow" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h13M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </i>
        </a>
      </div>

      <figure className="hero__photo">
        <div className={`hero__arch${photoFailed ? ' is-empty' : ''}`}>
          {!photoFailed && (
            <img src={PHOTO} alt="" onError={() => setPhotoFailed(true)} />
          )}
          <span className="photo-hint">
            photo.jpg
            <small>public 폴더에 사진을 넣으세요</small>
          </span>
        </div>
      </figure>

      <ul className="hero__stats">
        {stats.map((s) => (
          <li key={s.label}>
            <b>{s.value}</b>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
