'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './ErrorPages.module.css'
import { Anton, Space_Mono } from 'next/font/google'
import Cursor from './components/Cursor'
import './globals.css'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--ff-display',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--ff-body',
  display: 'swap',
})

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Global Layout error:', error)
  }, [error])

  return (
    <html lang="en" className={`${anton.variable} ${spaceMono.variable}`}>
      <body>
        <Cursor />
        <div className={styles.container}>
          <h1 className={styles.errorCode}>500</h1>
          <h2 className={styles.title}>Critical Error</h2>
          <p className={styles.message}>
            We encountered a critical crash. Refresh the page or return to the storefront.
          </p>
          <div className={styles.actions}>
            <button
              onClick={() => reset()}
              className="btn-outline"
            >
              Try Again
            </button>
            <a href="/" className="btn-primary">
              Return Home
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
