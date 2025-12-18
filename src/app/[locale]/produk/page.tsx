import { ArrowRight, Package } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

import Footer from '@/components/sections/Footer'
import StickyFooterWrapper from '@/components/StickyFooterWrapper'
import { LineShadowText } from '@/components/ui/line-shadow-text'
import { products } from '@/data/products'
import { Link } from '@/i18n/navigation'

// ISR: Revalidate every 30 minutes (1800 seconds)
// Product catalog may have price/availability updates
export const revalidate = 1800

export default async function ProductsListingPage() {
  const t = await getTranslations()

  // Get translated product data
  const getTranslatedProduct = (product: (typeof products)[0]) => {
    const key = product.translationKey
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
    <div
      className="w-full"
      style={{ backgroundColor: 'var(--primary-dark-brown)' }}
    >
      {/* Main Content */}
      <div
        className="relative z-10 min-h-screen"
        style={{ backgroundColor: 'var(--primary-cream)' }}
      >
        {/* Dotted Background Pattern - Global */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle, var(--primary-brown) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Hero Section */}
        <section className="relative z-10 py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <div>
              <h1
                className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl mb-6 flex flex-col items-center"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-primary)',
                }}
              >
                <div className="flex flex-wrap justify-center gap-x-3 sm:gap-x-4">
                  <LineShadowText shadowColor="var(--text-primary)">
                    Katalog
                  </LineShadowText>
                  <LineShadowText shadowColor="var(--text-primary)">
                    Lengkap
                  </LineShadowText>
                </div>
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-4">
                  Produk Plywood
                </span>
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-justify"
                style={{
                  color: 'var(--text-secondary)',
                  fontFamily: 'var(--font-secondary)',
                  textAlignLast: 'center',
                }}
              >
                {t('productsListingPage.subtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Results Count */}
            <div className="mb-8">
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {t('productsListingPage.showingResults', {
                  count: allProducts.length,
                })}
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {allProducts.map(product => (
                <div key={product.id}>
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
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Sticky Footer */}
      <StickyFooterWrapper>
        <Footer />
      </StickyFooterWrapper>
    </div>
  )
}
