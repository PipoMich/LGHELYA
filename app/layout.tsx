import type { Metadata } from 'next'
import { Anton, Space_Mono } from 'next/font/google'
import './globals.css'
import { whatsappChatUrl } from './lib/whatsapp'

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

export const metadata: Metadata = {
  metadataBase: new URL('https://lghelya.com'),
  title: 'LGHELYA — Show the world who you truly are',
  description:
    'LGHELYA is a bold, street-culture fashion brand. Empowerment begins with wearing what expresses who you are inside. Shop the 2024 Winter/Spring Collection.',
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
  openGraph: {
    title: 'LGHELYA — Show the world who you truly are',
    description: 'Bold street-culture fashion. Shop new arrivals, jackets, and urban wear.',
    type: 'website',
    images: [
      {
        url: 'https://lghelya.com/icon.png',
        width: 1200,
        height: 630,
        alt: 'LGHELYA Storefront'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LGHELYA — Street Culture Fashion',
    description: 'Empowerment begins with wearing what expresses who you are inside.',
    images: ['https://lghelya.com/icon.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  alternates: {
    canonical: 'https://lghelya.com',
  },
}

import SplashScreen from './components/SplashScreen'
import Cursor from './components/Cursor'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${spaceMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'LGHELYA',
              url: 'https://lghelya.com',
              logo: 'https://lghelya.com/icon.png',
              sameAs: [
                'https://instagram.com/the.lghelya',
                'https://x.com/lghelya',
                'https://tiktok.com/@lghelya0'
              ]
            })
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Cursor />
        <SplashScreen />
        {children}
        {/* Floating WhatsApp button — visible on every page */}
        <a
          href={whatsappChatUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-float"
          id="floating-whatsapp-btn"
          aria-label="Chat with us on WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.115 1.529 5.845L.057 23.272a.75.75 0 00.922.922l5.427-1.472A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.944 0-3.77-.502-5.354-1.38l-.383-.22-3.972 1.077 1.077-3.972-.22-.383A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
        </a>
      </body>
    </html>
  )
}
