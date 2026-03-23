import Image from 'next/image'
import Link from 'next/link'
import styles from './CharacterGrid.module.css'

const cards = [
  { src: '/img/character_model_1.png', alt: 'Model in puffer jacket', tag: 'EXPLORER #OOTD ↘', cls: 'card1' },
  { src: '/img/character_model_2.png', alt: 'Model in windbreaker',   tag: 'REBELLIOUS ↘',    cls: 'card2' },
  { src: '/img/character_model_3.png', alt: 'Model in bomber jacket', tag: 'CREATOR ↘',        cls: 'card3' },
]

export default function CharacterGrid() {
  return (
    <section className={`${styles.section} reveal`} id="character" aria-label="Reveal Your True Character">
      <div className={styles.header}>
        <h2 className={styles.headline}>BEYEN Your True Character</h2>
      </div>

      <div className={styles.grid}>
        {cards.map(({ src, alt, tag, cls }) => (
          <div key={cls} className={`${styles.card} ${styles[cls]}`}>
            <div className={styles.imgWrap}>
              <Image src={src} alt={alt} fill sizes="(max-width:768px) 90vw, 320px" className={styles.img} />
            </div>
            <span className={styles.tag}>{tag}</span>
          </div>
        ))}

        {/* CTA split card */}
        <div className={`${styles.card} ${styles.ctaCard}`}>
          <Link href="/shop" className={styles.ctaTop} id="char-view-all" aria-label="View all products">
            <span>VIEW ALL</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </Link>
          <div className={styles.ctaBottom}>
            <p className={styles.newDrop}>NEW DROP</p>
            <div className={styles.dropArrow}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="16" fill="var(--brand-orange)"/>
                <path d="M9 16h14M19 11l5 5-5 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
