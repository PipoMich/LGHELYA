'use client'

import { useEffect } from 'react'

/**
 * Watches all `.reveal` elements using IntersectionObserver.
 * When 12% of an element is visible it gets the `in-view` class (one-shot).
 */
export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          } else {
            // Remove the class when it scrolls out of view, so it animates AGAIN when scrolled back!
            entry.target.classList.remove('in-view')
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
