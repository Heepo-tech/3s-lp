'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Mail, FileText, ArrowLeft } from 'lucide-react'

import type { Product } from '@/data/products'
import { Link } from '@/i18n/navigation'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
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
              Home
            </Link>
            <span>/</span>
            <Link
              href={{ pathname: '/', hash: 'produk' }}
              className="hover:opacity-70 transition-opacity"
            >
              Produk
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--text-primary)' }}>{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Header */}
      <section
        className="py-12 px-6 lg:px-8"
        style={{ background: 'var(--gradient-warm)' }}
      >
        <div className="mx-auto max-w-7xl">
          <Link
            href={{ pathname: '/', hash: 'produk' }}
            className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: 'var(--text-secondary)' }}
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Produk
          </Link>

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
              <span className="text-sm font-semibold">{product.category}</span>
            </div>

            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-primary)',
              }}
            >
              {product.name}
            </h1>

            <p
              className="text-lg mb-6 leading-relaxed text-justified"
              style={{
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-secondary)',
              }}
            >
              {product.description}
            </p>

            {/* Grade */}
            <div className="mb-6">
              <div
                className="text-sm font-semibold mb-2"
                style={{ color: 'var(--text-muted)' }}
              >
                Grade:
              </div>
              <div
                className="text-xl font-bold"
                style={{ color: 'var(--primary-dark-brown)' }}
              >
                {product.grade}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-6">
              <div
                className="text-sm font-semibold mb-2"
                style={{ color: 'var(--text-muted)' }}
              >
                Available Sizes:
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
                Thickness Options:
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
                Hubungi Kami
              </a>

              <Link
                href={{ pathname: '/', hash: 'quote-request-form' }}
                className="btn-outline-dark btn-icon"
              >
                <FileText className="h-5 w-5" />
                Request Quote
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
            Spesifikasi{' '}
            <span style={{ color: 'var(--primary-brown)' }}>Teknis</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(product.specifications).map(
              ([key, value], index) => (
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
                    {key}:
                  </span>
                  <span
                    className="text-sm font-bold text-right break-words"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {value}
                  </span>
                </motion.div>
              )
            )}
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
                Keunggulan{' '}
                <span style={{ color: 'var(--primary-brown)' }}>Produk</span>
              </h2>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
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
                Aplikasi{' '}
                <span style={{ color: 'var(--primary-brown)' }}>
                  Penggunaan
                </span>
              </h2>
              <ul className="space-y-4">
                {product.applications.map((application, index) => (
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
