'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Mail, FileText } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { BackButton } from '@/components/ui/back-button'
import type { Product } from '@/data/products'
import { Link } from '@/i18n/navigation'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
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

  const key = productKeyMap[product.slug]

  // Get translated data
  const name = key ? t(`productData.${key}.name`) : product.name
  const description = key
    ? t(`productData.${key}.description`)
    : product.description
  const category = key ? t(`productData.${key}.category`) : product.category
  const grade = key ? t(`productData.${key}.grade`) : product.grade

  // Handle arrays (features, applications) which are objects in JSON
  const features = key
    ? Object.values(
        t.raw(`productData.${key}.features`) as Record<string, string>
      )
    : product.features

  const applications = key
    ? Object.values(
        t.raw(`productData.${key}.applications`) as Record<string, string>
      )
    : product.applications

  // Handle specifications
  const specifications = key
    ? (t.raw(`productData.${key}.specifications`) as Record<string, string>)
    : product.specifications

  return (
    <>
      {/* Breadcrumb */}
      <section
        className="py-6 px-6 lg:px-8 border-b"
        style={{
          backgroundColor: 'var(--neutral-white)',
          borderColor: 'var(--neutral-medium)',
        }}
      >
        <div className="mx-auto max-w-7xl">
          <div
            className="flex items-center gap-2 text-sm"
            style={{ color: 'var(--text-muted)' }}
          >
            <Link href="/" className="hover:opacity-70 transition-opacity">
              {t('navigation.home')}
            </Link>
            <span>/</span>
            <Link
              href="/produk"
              className="hover:opacity-70 transition-opacity"
            >
              {t('navigation.products')}
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--text-primary)' }}>{name}</span>
          </div>
        </div>
      </section>

      {/* Product Header */}
      <section
        className="py-12 px-6 lg:px-8"
        style={{ background: 'var(--gradient-warm)' }}
      >
        <div className="mx-auto max-w-7xl">
          <BackButton
            label={t('productDetail.backToProducts')}
            className="mb-8"
          />

          {/* Product Info - Full Width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="rounded-xl px-4 py-2 inline-block mb-4"
              style={{
                backgroundColor: 'var(--primary-brown)',
                color: 'white',
              }}
            >
              <span className="text-sm font-semibold">{category}</span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-primary)',
              }}
            >
              {name}
            </h1>

            <p
              className="text-lg mb-6 leading-relaxed text-justified"
              style={{
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-secondary)',
              }}
            >
              {description}
            </p>

            {/* Grade */}
            <div className="mb-6">
              <div
                className="text-sm font-semibold mb-2"
                style={{ color: 'var(--text-muted)' }}
              >
                {t('productsSection.gradeLabel')}
              </div>
              <div
                className="text-xl font-bold"
                style={{ color: 'var(--primary-dark-brown)' }}
              >
                {grade}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <div
                className="text-sm font-semibold mb-2"
                style={{ color: 'var(--text-muted)' }}
              >
                {t('productDetail.availableSizes')}
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <span
                    key={size}
                    className="rounded-lg px-4 py-2 text-sm font-medium border"
                    style={{
                      backgroundColor: 'var(--neutral-white)',
                      color: 'var(--text-primary)',
                      borderColor: 'var(--neutral-medium)',
                    }}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Thickness */}
            <div className="mb-8">
              <div
                className="text-sm font-semibold mb-2"
                style={{ color: 'var(--text-muted)' }}
              >
                {t('productDetail.thicknessOptions')}
              </div>
              <div className="flex flex-wrap gap-2">
                {product.thickness.map(thick => (
                  <span
                    key={thick}
                    className="rounded-lg px-4 py-2 text-sm font-medium"
                    style={{
                      backgroundColor: 'var(--primary-brown)',
                      color: 'white',
                    }}
                  >
                    {thick}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:info@3s-plywood.com"
                className="btn-primary btn-icon"
              >
                <Mail className="h-5 w-5" />
                {t('buttons.contactUs')}
              </a>

              <Link
                href={{ pathname: '/', hash: 'quote-request-form' }}
                className="btn-outline-dark btn-icon"
              >
                <FileText className="h-5 w-5" />
                {t('buttons.requestQuote')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specifications */}
      <section
        className="py-16 px-6 lg:px-8"
        style={{ backgroundColor: 'var(--primary-cream)' }}
      >
        <div className="mx-auto max-w-7xl">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-primary)',
            }}
          >
            {t('productDetail.specifications')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(specifications).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="grid grid-cols-[auto_1fr] items-center gap-3 p-6 rounded-xl border bg-white"
                style={{ borderColor: 'var(--neutral-medium)' }}
              >
                <span
                  className="text-sm font-semibold capitalize whitespace-nowrap"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {t(`productData.specifications.${key}`)}:
                </span>
                <span
                  className="text-sm font-bold text-right wrap-break-word"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        className="py-16 px-6 lg:px-8"
        style={{ backgroundColor: 'var(--neutral-white)' }}
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-primary)',
                }}
              >
                {t('productDetail.advantages')}
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="h-6 w-6 shrink-0 mt-0.5"
                      style={{ color: 'var(--primary-brown)' }}
                    />
                    <span
                      className="text-base"
                      style={{
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-secondary)',
                      }}
                    >
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-8"
                style={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-primary)',
                }}
              >
                {t('productDetail.applications')}
              </h2>
              <ul className="space-y-4">
                {applications.map((application, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="h-6 w-6 shrink-0 mt-0.5"
                      style={{ color: 'var(--primary-brown)' }}
                    />
                    <span
                      className="text-base"
                      style={{
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-secondary)',
                      }}
                    >
                      {application}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
