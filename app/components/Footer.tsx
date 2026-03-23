import Link from "next/link";
import styles from "./Footer.module.css";

const shopLinks = [
  { label: "New Arrivals", href: "/shop" },
  // { label: "Jackets", href: "/shop" },
  // { label: "Hoodies", href: "/shop" },
  // { label: "Streetwear", href: "/shop" },
  // { label: "Sale", href: "/shop" },
];
const infoLinks = [
  { label: "About Us", href: "/about" },
  // { label: "Careers", href: "#" },
  // { label: "Press", href: "/contact" },
  // { label: "Sustainability", href: "#" },
];
const helpLinks = [
  { label: "Contact Us", href: "/contact" },
  // { label: "Shipping & Returns", href: "#" },
  // { label: "Size Guide", href: "#" },
  // { label: "FAQ", href: "#" },
  // { label: "Track Order", href: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer" role="contentinfo">
      <div className={styles.inner}>
        {/* Brand column */}
        <div className={styles.brand}>
          <p className={styles.logo}>LGHELYA</p>
          <p className={styles.tagline}>
            Show the world
            <br />
            who you truly are.
          </p>
          <nav className={styles.socials} aria-label="Social media links">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/the.lghelya/"
              aria-label="Instagram"
              className={styles.social}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            {/* Twitter/X */}
            <a
              href="https://x.com/lghelya"
              aria-label="Twitter"
              className={styles.social}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@lghelya0"
              aria-label="TikTok"
              className={styles.social}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </nav>
        </div>

        {/* Shop links */}
        <nav className={styles.col} aria-label="Shop links">
          <p className={styles.colTitle}>SHOP</p>
          <ul>
            {shopLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={styles.link}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Info links */}
        <nav className={styles.col} aria-label="Info links">
          <p className={styles.colTitle}>INFO</p>
          <ul>
            {infoLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={styles.link}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Help links */}
        <nav className={styles.col} aria-label="Help links">
          <p className={styles.colTitle}>HELP</p>
          <ul>
            {helpLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className={styles.link}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copy}>&copy; 2026 LGHELYA. All rights reserved.</p>
        {/* <div className={styles.policy}>
          {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map(l => (
            <a key={l} href="#" className={styles.link}>{l}</a>
          ))}
        </div> */}
      </div>
    </footer>
  );
}
