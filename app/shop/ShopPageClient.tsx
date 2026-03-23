'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { products, Product } from '@/app/lib/products'
import { openWhatsAppQuickOrder } from '@/app/lib/whatsapp'
import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import CustomSelect from '@/app/components/CustomSelect'
import styles from './page.module.css'

const FILTERS = ['ALL', 'BESTSELLER', 'NEW DROP', 'LIMITED','SOLD']
const SORTS   = ['DEFAULT', 'PRICE: LOW–HIGH', 'PRICE: HIGH–LOW']

export default function ShopPageClient({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState('ALL')
  const [sort,   setSort]   = useState('DEFAULT')

  const displayed = useMemo(() => {
    let list = filter === 'ALL' ? products : products.filter(p => p.tag === filter)
    if (sort === 'PRICE: LOW–HIGH')  list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'PRICE: HIGH–LOW') list = [...list].sort((a, b) => b.price - a.price)
    return list
  }, [filter, sort, products])

  return (
    <>
      <Navbar />

      <main className={styles.main}>
        {/* ── Hero banner ── */}
        <div className={styles.hero}>
          <div className={styles.heroInner}>
            <p className="section-label">2024 Collection</p>
            <h1 className={styles.heroTitle}>SHOP ALL</h1>
            <p className={styles.heroSub}>{products.length} pieces. Zero compromises.</p>
          </div>
        </div>

        {/* ── Toolbar ── */}
        <div className={styles.toolbar}>
          <div className={styles.filters}>
            {FILTERS.map(f => (
              <button
                key={f}
                className={`${styles.filterBtn} ${filter === f ? styles.filterActive : ''}`}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
              >
                {f}
              </button>
            ))}
          </div>
          <CustomSelect
            className={styles.sortSelect}
            value={sort}
            onChange={setSort}
            options={SORTS.map(s => ({ label: s, value: s }))}
          />
        </div>

        {/* ── Product grid ── */}
        <div className={styles.grid}>
          {displayed.map(p => (
            <article key={p.id} className={styles.card} id={`shop-product-${p.id}`}>
              <Link href={`/product/${p.id}`} className={styles.imgLink}>
                <div className={styles.imgWrap}>
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    sizes="(max-width:600px) 90vw, (max-width:900px) 45vw, 30vw"
                    className={styles.img}
                  />
                  <span className={styles.tag}>{p.tag}</span>
                  <div className={styles.overlay}>
                    <span className={styles.overlayText}>QUICK VIEW</span>
                  </div>
                </div>
              </Link>
              <div className={styles.info}>
                <Link href={`/product/${p.id}`} className={styles.nameLink}>
                  <p className={styles.name}>{p.name}</p>
                </Link>
                <p className={styles.price}>${p.price}.00</p>
                <div className={styles.actions}>
                  <button
                    className={`btn-outline-sm ${styles.addBtn}`}
                    onClick={() => openWhatsAppQuickOrder(p.name, p.price)}
                    aria-label={`Order ${p.name} via WhatsApp`}
                    id={`shop-wa-${p.id}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.556 4.115 1.529 5.845L.057 23.272a.75.75 0 00.922.922l5.427-1.472A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.944 0-3.77-.502-5.354-1.38l-.383-.22-3.972 1.077 1.077-3.972-.22-.383A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    ORDER NOW
                  </button>
                  <Link href={`/product/${p.id}`} className={`btn-outline-sm ${styles.viewBtn}`} id={`shop-view-${p.id}`}>
                    VIEW
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {displayed.length === 0 && (
          <div className={styles.empty}>
            <p>No products match this filter.</p>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}
