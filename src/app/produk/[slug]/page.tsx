import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import ProductDetail from '@/components/sections/ProductDetail'
import { getProductBySlug, getAllProductSlugs } from '@/data/products'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug)

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

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="w-full overflow-auto">
      {/* Main Content with higher z-index for sticky footer */}
      <div className="relative z-10 min-h-screen" style={{ backgroundColor: 'var(--primary-cream)' }}>
        <Header />
        <ProductDetail product={product} />
      </div>

      {/* Sticky Footer with lower z-index */}
      <Footer />
    </div>
  )
}
