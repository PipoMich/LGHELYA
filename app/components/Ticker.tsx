import styles from './Ticker.module.css'

const items = [
  'LATEST COLLECTION ↘',
  'FASHION JACKET ↘',
  'WINTER COLLECTION ↘',
  'NEW ARRIVALS ↘',
  'STREET WEAR ↘',
  'URBAN CULTURE ↘',
]

export default function Ticker() {
  // Duplicate for seamless loop
  const doubled = [...items, ...items]
  return (
    <section className={styles.container}>
      <div className={styles.wrap} aria-label="Brand ticker" role="marquee">
        <div className={styles.track} aria-hidden="true">
          {doubled.map((item, i) => (
            <span key={i} className={styles.item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
