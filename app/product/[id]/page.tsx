import { use } from 'react'
import { notFound } from 'next/navigation'
import { getProductById, products } from '@/app/lib/products'
import ProductPageClient from './ProductPageClient'

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(Number(id))
  
  if (!product) return { title: 'Product Not Found' }

  return {
    title: `${product.name} — LGHELYA`,
    description: product.description,
    openGraph: {
      images: [product.src],
    },
  }
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const product = getProductById(Number(resolvedParams.id))

  if (!product) notFound()

  const others = products.filter((p) => p.id !== product.id)
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: `https://lghelya.com${product.src}`,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'LGHELYA'
    },
    offers: {
      '@type': 'Offer',
      url: `https://lghelya.com/product/${product.id}`,
      priceCurrency: 'USD',
      price: product.price,
      availability: product.tag === 'SOLD' ? 'https://schema.org/OutOfStock' : 'https://schema.org/InStock'
    }
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://lghelya.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Shop',
        item: 'https://lghelya.com/shop'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: `https://lghelya.com/product/${product.id}`
      }
    ]
  }

  return (
    <ProductPageClient 
      product={product} 
      others={others} 
      jsonLd={jsonLd} 
      breadcrumbLd={breadcrumbLd} 
    />
  )
}
