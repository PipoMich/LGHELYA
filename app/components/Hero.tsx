"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-label="Hero">
      {/* Animated conic-gradient orb */}
      <div className={styles.orb} aria-hidden="true" />

      {/* Left — text content */}
      <div className={styles.content}>
        <p className={styles.sub}>— 2026 WINTER / SPRING COLLECTION</p>
        <h1 className={styles.headline}>
          Show
          <br />
          the world
          <br />
          chkon
          <br />
          ntaaa
        </h1>
        <Link
          href="#new-release"
          className={`btn-primary ${styles.cta}`}
          id="hero-cta"
        >
          CHECK OUR PRODUCTS
        </Link>
      </div>

      {/* Right — hero model image */}
      <div className={styles.heroImg}>
        <Image
          src="/img/hero_model_1.png"
          alt="Model wearing LGHELYA street jacket"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 50vw"
          className={styles.heroImgInner}
        />
        {/* Gradient fade on left edge to blend into cream */}
        <div className={styles.heroImgFade} />
      </div>

      {/* Rotating badge — bottom right corner */}
      <Link
        href="#new-release"
        scroll={false}
        onClick={(e) => {
          e.preventDefault();

          const el = document.getElementById("new-release");
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <div className={styles.badge} aria-label="New Release — Scroll to products">
          <svg
            className={styles.badgeSvg}
            viewBox="0 0 160 160"
            role="img"
          >
            <title>Rotating Badge: New Release Arrivals</title>
            <defs>
              <path
                id="bc"
                d="M 80,80 m -58,0 a 58,58 0 1,1 116,0 a 58,58 0 1,1 -116,0"
              />
            </defs>
            <text
              fontFamily="'Space Mono',monospace"
              fontSize="11"
              fill="var(--brand-orange)"
              fontWeight="700"
              letterSpacing="3"
            >
              <textPath href="#bc">NEW REALEASE ✦ NEW REALEASE ✦</textPath>
            </text>
          </svg>
          <div
            className={styles.badgeArrow}
            aria-label="View Black Friday Offers"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </Link>
    </section>
  );
}
