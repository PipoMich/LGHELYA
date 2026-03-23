'use client'

import { use, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductById, products } from '@/app/lib/products'
import { openWhatsAppOrder } from '@/app/lib/whatsapp'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Cursor from '@/app/components/Cursor'
import styles from './page.module.css'

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = getProductById(Number(id))

  if (!product) notFound()

  const [selectedSize,  setSelectedSize]  = useState('')
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name)
  const [qty,           setQty]           = useState(1)
  const [pulse,         setPulse]         = useState(false)
  const [sizeError,     setSizeError]     = useState(false)

  const others = products.filter((p) => p.id !== product.id)

  const handleOrder = () => {
    if (!selectedSize) {
      setSizeError(true)
      setTimeout(() => setSizeError(false), 600)
      return
    }
    setPulse(true)
    setTimeout(() => setPulse(false), 400)
    openWhatsAppOrder({
      productName: product.name,
      price:       product.price,
      size:        selectedSize,
      color:       selectedColor,
      qty,
    })
  }

  return (
    <>
      <Cursor />
      <Navbar />

      <main className={styles.main}>
        {/* ── Breadcrumb ── */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/shop">Shop</Link>
          <span aria-hidden="true"> / </span>
          <span>{product.name}</span>
        </nav>

        {/* ── Product layout ── */}
        <div className={styles.product}>
          {/* Left — Image */}
          <div className={styles.gallery}>
            <div className={styles.mainImgWrap}>
              <Image
                src={product.src}
                alt={product.name}
                fill
                sizes="(max-width:768px) 100vw, 55vw"
                className={styles.mainImg}
                priority
              />
              <span className={styles.tag}>{product.tag}</span>
            </div>
          </div>

          {/* Right — Info */}
          <div className={styles.info}>
            <p className="section-label">{product.tag}</p>
            <h1 className={styles.name}>{product.name}</h1>
            <p className={styles.price}>${product.price}.00</p>

            <p className={styles.desc}>{product.description}</p>

            {/* Color picker */}
            <div className={styles.optionGroup}>
              <p className={styles.optionLabel}>
                COLOR — <span>{selectedColor}</span>
              </p>
              <div className={styles.colors}>
                {product.colors.map(c => (
                  <button
                    key={c.name}
                    className={`${styles.colorSwatch} ${selectedColor === c.name ? styles.colorActive : ''}`}
                    style={{ background: c.hex }}
                    aria-label={`Select color ${c.name}`}
                    onClick={() => setSelectedColor(c.name)}
                  />
                ))}
              </div>
            </div>

            {/* Size picker */}
            <div className={styles.optionGroup}>
              <p className={`${styles.optionLabel} ${sizeError ? styles.optionError : ''}`}>
                SIZE {!selectedSize && '— SELECT A SIZE'}
              </p>
              <div className={styles.sizes}>
                {product.sizes.map(s => (
                  <button
                    key={s}
                    className={`${styles.sizeBtn} ${selectedSize === s ? styles.sizeActive : ''} ${sizeError && !selectedSize ? styles.sizeError : ''}`}
                    onClick={() => { setSelectedSize(s); setSizeError(false) }}
                    aria-label={`Size ${s}`}
                    aria-pressed={selectedSize === s}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty + WhatsApp CTA */}
            <div className={styles.ctaRow}>
              <div className={styles.qtyControl}>
                <button onClick={() => setQty(q => Math.max(1, q - 1))} aria-label="Decrease quantity">−</button>
                <span>{qty}</span>
                <button onClick={() => setQty(q => q + 1)} aria-label="Increase quantity">+</button>
              </div>
              <button
                className={`${styles.waBtn} ${pulse ? styles.pulse : ''}`}
                id="order-whatsapp-btn"
                onClick={handleOrder}
                aria-label="Order via WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.115 1.529 5.845L.057 23.272a.75.75 0 00.922.922l5.427-1.472A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.944 0-3.77-.502-5.354-1.38l-.383-.22-3.972 1.077 1.077-3.972-.22-.383A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                ORDER VIA WHATSAPP
              </button>
            </div>

            {/* WhatsApp note */}
            <p className={styles.waNote}>
              You'll be redirected to WhatsApp with your order pre-filled. We'll confirm availability &amp; payment details.
            </p>

            {/* Details accordion */}
            <details className={styles.details}>
              <summary className={styles.detailsSummary}>PRODUCT DETAILS</summary>
              <ul className={styles.detailsList}>
                {product.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </details>
          </div>
        </div>

        {/* ── You may also like ── */}
        <section className={styles.related}>
          <h2 className={styles.relatedTitle}>YOU MAY ALSO LIKE</h2>
          <div className={styles.relatedGrid}>
            {others.map(p => (
              <Link key={p.id} href={`/product/${p.id}`} className={styles.relatedCard} id={`related-${p.id}`}>
                <div className={styles.relatedImgWrap}>
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    sizes="(max-width:768px) 90vw, 360px"
                    className={styles.relatedImg}
                  />
                  <span className={styles.relatedTag}>{p.tag}</span>
                </div>
                <p className={styles.relatedName}>{p.name}</p>
                <p className={styles.relatedPrice}>${p.price}.00</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
