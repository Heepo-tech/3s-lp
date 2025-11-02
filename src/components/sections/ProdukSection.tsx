'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Package } from 'lucide-react'
import Link from 'next/link'

import { products } from '@/data/products'

export default function ProdukSection() {
  // Ambil 6 produk pertama untuk ditampilkan
  const featuredProducts = products.slice(0, 6)

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
            Produk <span style={{ color: 'var(--primary-gold)' }}>Plywood</span>{' '}
            Kami
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-secondary)',
            }}
          >
            Berbagai jenis plywood berkualitas tinggi untuk memenuhi kebutuhan
            proyek Anda
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link
                href={`/produk/${product.slug}`}
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
                      style={{ background: 'var(--gradient-gold)' }}
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
                      className="mb-3 sm:mb-4 text-sm leading-relaxed"
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
                        <span className="font-semibold">Grade:</span>
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
                      Lihat Detail
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div
                    className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"
                    style={{ background: 'var(--gradient-gold)' }}
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
          <Link href="/#produk" className="btn-dark btn-icon">
            <Package className="h-5 w-5" />
            Lihat Semua Produk
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
