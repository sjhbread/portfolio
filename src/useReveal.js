import { useEffect, useRef } from 'react'

/**
 * 화면에 들어오면 클래스 is-in 을 붙여 부드럽게 등장시킨다.
 * IntersectionObserver = "이 요소 화면에 보이면 알려줘" 라고 브라우저에 부탁하는 기능.
 * 스크롤 이벤트를 직접 듣는 것보다 훨씬 가볍다.
 */
export default function useReveal(delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // 움직임을 줄여달라는 시스템 설정이면 그냥 바로 보여준다.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-in')
      return
    }

    el.style.transitionDelay = `${delay}ms`
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        el.classList.add('is-in')
        io.disconnect() // 한 번만 실행
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])

  return ref
}
