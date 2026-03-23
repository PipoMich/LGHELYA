import Image from "next/image";
import Link from "next/link";
import styles from "./FutureCulture.module.css";

export default function FutureCulture() {
  return (
    <section
      className={`${styles.section} reveal`}
      id="future"
      aria-label="Where the future meets culture"
    >
      <div className={styles.textCol}>
        <p className="section-label">MANIFESTO</p>
        <h2 className={styles.headline}>
          WHERE THE
          <br />
          <span className={styles.accent}>FUTURE</span>
          <br />
          MEETS CULTURE
        </h2>
        <div className={styles.squiggle} aria-hidden="true" />
        <p className={styles.body}>
          We stand at the crossroads of tomorrow and tradition. LGHELYA bridges
          the gap between street culture and forward‑thinking design — creating
          pieces that carry both memory and momentum. This is not just fashion;
          this is a movement.
        </p>
        <Link
          href="/about"
          className={`btn-primary ${styles.desktopCTA}`}
          id="future-cta"
          style={{ marginTop: "2rem", display: "inline-block" }}
        >
          EXPLORE NOW
        </Link>
      </div>

      <div className={styles.photosCol} aria-hidden="true">
        <div className={`${styles.photo} ${styles.photo1}`}>
          <Image
            src="/img/hero_model_1.png"
            alt="Model in bold orange street jacket"
            fill
            sizes="300px"
            className={styles.img}
          />
        </div>
        <div className={`${styles.photo} ${styles.photo2}`}>
          <Image
            src="/img/character_model_3.png"
            alt="Model in graphic bomber jacket"
            fill
            sizes="300px"
            className={styles.img}
          />
        </div>
      </div>

      <div className={styles.mobileCTA}>
        <Link
          href="/about"
          className="btn-primary"
          style={{ marginTop: "1rem" }}
        >
          EXPLORE NOW
        </Link>
      </div>
    </section>
  );
}
