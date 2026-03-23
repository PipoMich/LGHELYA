import Image from 'next/image'
import Link from 'next/link'
import styles from './About.module.css'
import ScrollLink from './ScrollLink.jsx';
export default function About() {
  return (
    <section className={`${styles.about} reveal`} id="about" aria-label="About LGHELYA">
      <div className={styles.text}>
        <p className="section-label">OUR STORY</p>
        <h2 className={styles.headline}>
          We believe true التقة comes from wearing what speaks to your soul.
        </h2>
        <p className={styles.body}>
          LGHELYA was born from the streets — from the artists, rebels, and visionaries who
          refused to blend in. Every piece we create is a statement, an armour, a love letter
          to self‑expression. We don&apos;t make clothes. We make identities.
        </p>
        <p className={styles.body}>
          Our collections are rooted in urban culture and future aesthetics, designed for those
          who understand that fashion is the most public form of self‑disclosure. Wear your
          truth. Show the world.
        </p>
        <ScrollLink target="new-release" className="btn-outline" id="about-cta">
          CHECK NEW ARRIVAL
        </ScrollLink>
      </div>

      <div className={styles.photos} aria-hidden="true">
        <div className={`${styles.photoWrap} ${styles.photoTop}`}>
          <Image
            src="/img/about_model_1.png"
            alt="Model wearing vibrant urban jacket"
            fill
            sizes="(max-width: 768px) 90vw, 360px"
            className={styles.img}
          />
        </div>
        <div className={`${styles.photoWrap} ${styles.photoBottom}`}>
          <Image
            src="/img/about_model_2.png"
            alt="Model in graphic streetwear hoodie"
            fill
            sizes="(max-width: 768px) 90vw, 360px"
            className={styles.img}
          />
        </div>
      </div>
    </section>
  )
}
