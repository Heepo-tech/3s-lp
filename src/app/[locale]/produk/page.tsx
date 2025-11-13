'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { products } from '@/data/products'
import { Link } from '@/i18n/navigation'

export default function ProductsListingPage() {
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

  // Get all products with translations
  const allProducts = products.map(getTranslatedProduct)

  return (
    <>
      {/* Hero Section */}
      <section
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--primary-cream)' }}
      >
        {/* Dotted Background Pattern */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle, var(--primary-brown) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-primary)',
              }}
            >
              {t('productsListingPage.title')}
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-secondary)',
              }}
            >
              {t('productsListingPage.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section
        className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: 'var(--neutral-white)' }}
      >
        <div className="mx-auto max-w-7xl">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {t('productsListingPage.showingResults', {
                count: allProducts.length,
              })}
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Link
                  href={{
                    pathname: '/produk/[slug]',
                    params: { slug: product.slug },
                  }}
                  className="group block h-full"
                >
                  <div
                    className="relative h-full overflow-hidden rounded-2xl border transition-all duration-300 md:hover:shadow-xl md:hover:-translate-y-2"
                    style={{
                      backgroundColor: 'var(--neutral-white)',
                      borderColor: 'var(--neutral-medium)',
                    }}
                  >
                    {/* Product Image */}
                    <div
                      className="relative h-48 sm:h-56 md:h-64 overflow-hidden"
                      style={{ backgroundColor: 'var(--primary-cream)' }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="text-6xl font-bold opacity-10"
                          style={{ color: 'var(--primary-brown)' }}
                        >
                          {product.category}
                        </div>
                      </div>
                      {/* Category Badge */}
                      <div
                        className="absolute top-4 right-4 rounded-full px-4 py-1.5 text-xs font-semibold text-white"
                        style={{ backgroundColor: 'var(--primary-brown)' }}
                      >
                        {product.category}
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4 sm:p-6">
                      <h3
                        className="mb-2 text-xl sm:text-2xl font-bold group-hover:text-opacity-80 transition-opacity"
                        style={{
                          color: 'var(--text-primary)',
                          fontFamily: 'var(--font-primary)',
                        }}
                      >
                        {product.name}
                      </h3>

                      <p
                        className="mb-3 sm:mb-4 text-sm leading-relaxed text-justified"
                        style={{
                          color: 'var(--text-secondary)',
                          fontFamily: 'var(--font-secondary)',
                        }}
                      >
                        {product.shortDescription}
                      </p>

                      {/* Specifications */}
                      <div className="mb-4 space-y-2">
                        <div
                          className="flex items-center gap-2 text-sm sm:text-xs"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          <span className="font-semibold">
                            {t('productsSection.gradeLabel')}
                          </span>
                          <span>{product.grade}</span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {product.thickness.slice(0, 4).map(thick => (
                            <span
                              key={thick}
                              className="rounded-md px-1.5 sm:px-2 py-0.5 text-xs font-medium"
                              style={{
                                backgroundColor: 'var(--primary-cream)',
                                color: 'var(--text-secondary)',
                              }}
                            >
                              {thick}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div
                        className="flex items-center gap-2 text-xs sm:text-sm font-semibold group-hover:gap-3 transition-all"
                        style={{ color: 'var(--primary-gold)' }}
                      >
                        {t('buttons.viewDetail')}
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div
                      className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: 'var(--primary-brown)' }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
