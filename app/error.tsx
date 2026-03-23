'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import styles from './ErrorPages.module.css'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error('Runtime error caught by next.js:', error)
  }, [error])

  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>500</h1>
      <h2 className={styles.title}>Something went wrong</h2>
      <p className={styles.message}>
        We encountered an unexpected error. Please try again or return to the homepage.
      </p>
      <div className={styles.actions}>
        <button
          onClick={() => reset()}
          className="btn-outline"
        >
          Try Again
        </button>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  )
}
