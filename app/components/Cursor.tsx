'use client'

import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const pos     = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })
  const raf     = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top  = e.clientY + 'px'
      }
    }

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      raf.current = requestAnimationFrame(animate)
    }

    const onEnter = () => document.body.classList.add(styles.hover ?? 'cursor-hover')
    const onLeave = () => document.body.classList.remove(styles.hover ?? 'cursor-hover')

    const targets = () => document.querySelectorAll('a, button, [role="button"]')

    const attachHover = () => {
      targets().forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }

    window.addEventListener('mousemove', onMove)
    raf.current = requestAnimationFrame(animate)
    attachHover()

    // Re-attach on DOM changes
    const observer = new MutationObserver(attachHover)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  )
}
