import Link from 'next/link'
import styles from './EmpowermentBanner.module.css'

export default function EmpowermentBanner() {
  return (
    <section className={`${styles.banner} reveal`} id="banner" aria-label="Empowerment banner">
      <div className={styles.radial} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.textCol}>
          <h2 className={styles.headline}>
            EMPOWERMENT
            BEGINS WITH WEARING
            ما يُعبّر عن روحك.
          </h2>
        </div>
        <div className={styles.actionCol}>
          <p className={styles.sub}>
            Discover pieces that speak for you —<br />bold, unapologetic, yours.
          </p>
          <Link 
            href="/shop" 
            className={styles.shopBtn} 
            id="banner-shop-btn"
            prefetch={true}
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  )
}
