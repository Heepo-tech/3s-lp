'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [produkDropdownOpen, setProdukDropdownOpen] = useState(false)
  const [perusahaanDropdownOpen, setPerusahaanDropdownOpen] = useState(false)

  const products = [
    { name: 'Plywood Standar', slug: 'plywood-standar' },
    { name: 'Plywood Marine', slug: 'plywood-marine' },
    { name: 'Plywood Film Faced', slug: 'plywood-film-faced' },
    { name: 'Plywood Decorative', slug: 'plywood-decorative' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg" style={{ borderColor: 'var(--neutral-medium)' }}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg font-bold text-white" style={{ background: 'var(--gradient-brown)' }}>
            <span className="text-xl">3S</span>
          </div>
          <div className="hidden md:flex flex-col">
            <span className="text-sm font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
              PT. Sekawan
            </span>
            <span className="text-sm font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
              Sahabat Sejati
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          {/* Produk Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProdukDropdownOpen(true)}
            onMouseLeave={() => setProdukDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-base font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
              Produk
              <ChevronDown className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {produkDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-56 rounded-lg border bg-white p-2 shadow-lg"
                  style={{ borderColor: 'var(--neutral-medium)' }}
                >
                  {products.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/produk/${product.slug}`}
                      className="block rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-opacity-10"
                      style={{
                        color: 'var(--text-secondary)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--primary-cream)'
                        e.currentTarget.style.color = 'var(--text-primary)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent'
                        e.currentTarget.style.color = 'var(--text-secondary)'
                      }}
                    >
                      {product.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Perusahaan Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPerusahaanDropdownOpen(true)}
            onMouseLeave={() => setPerusahaanDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-base font-medium transition-colors" style={{ color: 'var(--text-secondary)' }}>
              Perusahaan
              <ChevronDown className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {perusahaanDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 rounded-lg border bg-white p-2 shadow-lg"
                  style={{ borderColor: 'var(--neutral-medium)' }}
                >
                  <Link
                    href="/tentang-kami"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-cream)'
                      e.currentTarget.style.color = 'var(--text-primary)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = 'var(--text-secondary)'
                    }}
                  >
                    Tentang Kami
                  </Link>
                  <Link
                    href="/blog"
                    className="block rounded-md px-4 py-2 text-sm font-medium transition-colors"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-cream)'
                      e.currentTarget.style.color = 'var(--text-primary)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = 'var(--text-secondary)'
                    }}
                  >
                    Blog
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/sertifikasi" className="text-base font-medium transition-colors hover:opacity-80" style={{ color: 'var(--text-secondary)' }}>
            Sertifikasi
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <Link
            href="mailto:info@3s-plywood.com"
            className="rounded-lg px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md"
            style={{ background: 'var(--gradient-gold)' }}
          >
            Hubungi Kami
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden rounded-md p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: 'var(--text-primary)' }}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white border-t"
            style={{ borderColor: 'var(--neutral-medium)' }}
          >
            <div className="space-y-1 px-6 py-4">
              {/* Produk */}
              <div className="space-y-2">
                <button
                  onClick={() => setProdukDropdownOpen(!produkDropdownOpen)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Produk
                  <ChevronDown className={`h-4 w-4 transition-transform ${produkDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {produkDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-1 pl-4"
                    >
                      {products.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/produk/${product.slug}`}
                          className="block rounded-md px-3 py-2 text-sm font-medium"
                          style={{ color: 'var(--text-secondary)' }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {product.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Perusahaan */}
              <div className="space-y-2">
                <button
                  onClick={() => setPerusahaanDropdownOpen(!perusahaanDropdownOpen)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Perusahaan
                  <ChevronDown className={`h-4 w-4 transition-transform ${perusahaanDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {perusahaanDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-1 pl-4"
                    >
                      <Link
                        href="/tentang-kami"
                        className="block rounded-md px-3 py-2 text-sm font-medium"
                        style={{ color: 'var(--text-secondary)' }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Tentang Kami
                      </Link>
                      <Link
                        href="/blog"
                        className="block rounded-md px-3 py-2 text-sm font-medium"
                        style={{ color: 'var(--text-secondary)' }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Blog
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/sertifikasi"
                className="block rounded-md px-3 py-2 text-base font-medium"
                style={{ color: 'var(--text-primary)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sertifikasi
              </Link>

              <Link
                href="mailto:info@3s-plywood.com"
                className="block mt-4 rounded-lg px-6 py-2.5 text-center text-sm font-semibold text-white shadow-sm"
                style={{ background: 'var(--gradient-gold)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Hubungi Kami
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
