import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Cursor from '@/app/components/Cursor'
import styles from './page.module.css'

export const metadata = {
  title: 'About — LGHELYA',
  description: 'LGHELYA is built on the belief that what you wear is a declaration. Learn the story, values, and mission behind the brand.',
}

const values = [
  {
    num: '01',
    title: 'AUTHENTICITY',
    body: 'Every piece is designed to amplify who you already are — not to mask it. We reject fast fashion noise and create clothing with intention.',
  },
  {
    num: '02',
    title: 'URBAN ROOTS',
    body: 'Born on concrete, shaped by street culture. LGHELYA draws from the raw energy of city life — its rhythm, its grit, its relentless creativity.',
  },
  {
    num: '03',
    title: 'CRAFTSMANSHIP',
    body: 'Premium materials, rigorous construction, and zero shortcuts. Each garment is stress-tested for the pace of real life.',
  },
  {
    num: '04',
    title: 'COMMUNITY',
    body: 'We are more than a brand — we are a collective. LGHELYA is worn by the explorer, the rebel, the creator, the everyday visionary.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Cursor />
      <Navbar />

      <main className={styles.main}>
        {/* ── Hero ── */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <p className="section-label">Our Story</p>
            <h1 className={styles.heroTitle}>WE ARE<br/>LGHELYA</h1>
            <p className={styles.heroCopy}>
              A brand built on the radical idea that clothing is identity — and identity is power.
            </p>
          </div>
          <div className={styles.heroImgWrap}>
            <Image
              src="/img/hero_model_1.png"
              alt="LGHELYA — Urban street fashion"
              fill
              className={styles.heroImg}
              priority
            />
            <div className={styles.heroImgOverlay} />
          </div>
        </section>

        {/* ── Mission statement ── */}
        <section className={styles.mission}>
          <div className={styles.missionInner}>
            <blockquote className={styles.quote}>
              "Show the world who you truly are."
            </blockquote>
            <p className={styles.missionBody}>
              LGHELYA was founded on one conviction: your clothes should speak before you do.
              We create urban streetwear for people who refuse to blend in — pieces that carry swagger,
              substance, and a point of view. From the concrete jungles of New York to the backstreets
              of Tokyo, LGHELYA is worn by those who move with purpose.
            </p>
            <div className={styles.stats}>
              {[['2019', 'Founded'], ['12K+', 'Community Members'], ['3', 'Collections / Year'], ['62', 'Countries']].map(([n, l]) => (
                <div key={l} className={styles.stat}>
                  <span className={styles.statNum}>{n}</span>
                  <span className={styles.statLabel}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className={styles.values}>
          <div className={styles.valuesInner}>
            <div className={styles.valuesHeader}>
              <h2 className={styles.valuesTitle}>WHAT WE<br/>STAND FOR</h2>
              <div className="orange-bar" />
            </div>
            <div className={styles.valuesGrid}>
              {values.map(v => (
                <div key={v.num} className={styles.value}>
                  <span className={styles.valueNum}>{v.num}</span>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueBody}>{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Models strip ── */}
        <section className={styles.strip}>
          <div className={styles.stripImgs}>
            {['/img/about_model_1.png', '/img/about_model_2.png', '/img/character_model_1.png'].map((src, i) => (
              <div key={i} className={styles.stripImg}>
                <Image src={src} alt={`LGHELYA campaign ${i + 1}`} fill className={styles.stripImgInner} />
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>READY TO<br/>DECLARE YOURSELF?</h2>
          <Link href="/shop" className="btn-primary" id="about-shop-cta">SHOP THE COLLECTION</Link>
        </section>
      </main>

      <Footer />
    </>
  )
}
