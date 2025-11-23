'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Package } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { products } from '@/data/products'
import { Link } from '@/i18n/navigation'

export default function ProdukSection() {
  const t = useTranslations()

  // Map product slugs to translation keys
  const productKeyMap: Record<string, string> = {
    'plywood-standar': 'standard',
    'plywood-marine': 'marine',
    'plywood-film-faced': 'filmFaced',
    'plywood-decorative': 'decorative',
    'plywood-commercial': 'commercial',
    'plywood-engineered': 'engineered',
  }

  // Get translated product data
  const getTranslatedProduct = (product: (typeof products)[0]) => {
    const key = productKeyMap[product.slug]
    if (!key) return product

    return {
      ...product,
      name: t(`productData.${key}.name`),
      shortDescription: t(`productData.${key}.shortDescription`),
      category: t(`productData.${key}.category`),
      grade: t(`productData.${key}.grade`),
    }
  }

  // Ambil 3 produk unggulan untuk ditampilkan
  const featuredProducts = products.slice(0, 3).map(getTranslatedProduct)

  return (
    <section
      id="produk"
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--neutral-white)' }}
    >
      {/* Dotted Background Pattern */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(82, 36, 5, 0.15) 2px, transparent 2px)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-primary)',
            }}
          >
            {t('productsSection.title')}
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0 text-center"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-secondary)',
            }}
          >
            {t('productsSection.subtitle')}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <Link
                href={{
                  pathname: '/produk/[slug]',
                  params: { slug: product.slug },
                }}
                prefetch={true}
                className="group block h-full"
              >
                <div
                  className="relative h-full overflow-hidden rounded-2xl border-2 transition-all duration-300 md:hover:shadow-2xl md:hover:border-opacity-70"
                  style={{
                    backgroundColor: 'var(--neutral-white)',
                    borderColor: 'var(--neutral-medium)',
                  }}
                >
                  {/* Left Accent Bar */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-300 group-hover:w-2"
                    style={{
                      background:
                        'linear-gradient(to bottom, var(--primary-brown), var(--primary-gold))',
                    }}
                  />

                  {/* Product Content */}
                  <div className="p-6 sm:p-8">
                    {/* Header with Category Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div
                          className="inline-block rounded-lg px-3 py-1 text-xs font-bold mb-3"
                          style={{
                            backgroundColor: 'var(--primary-cream)',
                            color: 'var(--primary-brown)',
                          }}
                        >
                          {product.category}
                        </div>
                        <h3
                          className="text-2xl sm:text-3xl font-bold leading-tight group-hover:text-opacity-80 transition-opacity"
                          style={{
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-primary)',
                          }}
                        >
                          {product.name}
                        </h3>
                      </div>
                      <Package
                        className="w-8 h-8 opacity-20 transition-all duration-300 group-hover:opacity-40 group-hover:scale-110"
                        style={{ color: 'var(--primary-brown)' }}
                      />
                    </div>

                    <p
                      className="mb-6 text-base leading-relaxed"
                      style={{
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-secondary)',
                      }}
                    >
                      {product.shortDescription}
                    </p>

                    {/* Specifications */}
                    <div className="mb-6 space-y-4">
                      {/* Grade */}
                      <div className="flex items-center gap-3">
                        <span
                          className="text-sm font-semibold min-w-20"
                          style={{ color: 'var(--primary-brown)' }}
                        >
                          {t('productsSection.gradeLabel')}
                        </span>
                        <span
                          className="text-sm font-medium"
                          style={{ color: 'var(--text-secondary)' }}
                        >
                          {product.grade}
                        </span>
                      </div>

                      {/* Thickness Options */}
                      <div>
                        <span
                          className="text-sm font-semibold block mb-2"
                          style={{ color: 'var(--primary-brown)' }}
                        >
                          {t('productsSection.thicknessLabel')}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {product.thickness.slice(0, 6).map(thick => (
                            <span
                              key={thick}
                              className="rounded-lg px-3 py-1.5 text-sm font-semibold border transition-all duration-300 group-hover:border-opacity-70"
                              style={{
                                backgroundColor: 'var(--primary-cream)',
                                color: 'var(--primary-brown)',
                                borderColor: 'var(--neutral-medium)',
                              }}
                            >
                              {thick}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CTA with Arrow */}
                    <div
                      className="flex items-center justify-between pt-4 border-t"
                      style={{ borderColor: 'var(--neutral-medium)' }}
                    >
                      <span
                        className="text-sm font-bold transition-colors"
                        style={{
                          color: 'var(--primary-gold)',
                          fontFamily: 'var(--font-primary)',
                        }}
                      >
                        {t('buttons.viewDetail')}
                      </span>
                      <ArrowRight
                        className="h-5 w-5 transition-all duration-300 group-hover:translate-x-2"
                        style={{ color: 'var(--primary-gold)' }}
                      />
                    </div>
                  </div>

                  {/* Bottom Hover Effect Border */}
                  <div
                    className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                    style={{
                      background:
                        'linear-gradient(to right, var(--primary-brown), var(--primary-gold))',
                    }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Products CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link href="/produk" prefetch={true} className="btn-dark btn-icon">
            <Package className="h-5 w-5" />
            {t('buttons.viewAll')}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
