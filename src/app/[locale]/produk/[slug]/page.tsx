import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'
import ProductDetail from '@/components/sections/ProductDetail'
import { getProductBySlug, getAllProductSlugs } from '@/data/products'

type Props = {
  params: Promise<{ slug: string }>
}

// ISR: Revalidate every 1 hour (3600 seconds)
// Product specifications are relatively stable
export const revalidate = 3600

export async function generateStaticParams() {
  const slugs = getAllProductSlugs()
  return slugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Produk Tidak Ditemukan',
    }
  }

  return {
    title: product.name,
    description: product.description,
    keywords: [
      product.name,
      'plywood',
      product.category,
      'PT Sekawan Sahabat Sejati',
      '3S Plywood',
    ],
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="w-full h-screen overflow-auto">
      {/* Main Content with higher z-index for sticky footer */}
      <div
        className="relative z-10 pb-8 sm:pb-12"
        style={{ backgroundColor: 'var(--primary-cream)' }}
      >
        <Header />
        <ProductDetail product={product} />
      </div>

      {/* Sticky Footer with lower z-index */}
      <Footer />
    </div>
  )
}
