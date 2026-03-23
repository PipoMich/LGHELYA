import { products } from '@/app/lib/products'
import ShopPageClient from './ShopPageClient'

export const metadata = {
  title: 'Shop All — LGHELYA',
  description: 'Explore the full LGHELYA collection. From tactical urban jackets to exclusive street drops. High-performance streetwear for those who declare themselves.',
}

export default function ShopPage() {
  return <ShopPageClient products={products} />
}
