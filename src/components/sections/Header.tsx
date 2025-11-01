'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from '@/components/ui/resizable-navbar'
import { useFooterVisibility } from '@/hooks/useFooterVisibility'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [produkDropdownOpen, setProdukDropdownOpen] = useState(false)
  const [perusahaanDropdownOpen, setPerusahaanDropdownOpen] = useState(false)
  const isFooterVisible = useFooterVisibility(0.7)

  // Auto-close mobile menu when footer becomes visible
  useEffect(() => {
    if (isFooterVisible && mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
  }, [isFooterVisible, mobileMenuOpen])

  const products = [
    { name: 'Plywood Standar', slug: 'plywood-standar' },
    { name: 'Plywood Marine', slug: 'plywood-marine' },
    { name: 'Plywood Film Faced', slug: 'plywood-film-faced' },
    { name: 'Plywood Decorative', slug: 'plywood-decorative' },
  ]

  const LogoContent = () => (
    <>
      <div className="flex h-10 w-10 items-center justify-center">
        <Image
          src="/Logo.PNG"
          alt="PT. Sekawan Sahabat Sejati Logo"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
      </div>
      <div className="hidden md:flex flex-col">
        <span
          className="text-xs font-bold leading-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          PT. Sekawan
        </span>
        <span
          className="text-xs font-bold leading-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          Sahabat Sejati
        </span>
      </div>
    </>
  )

  const CTAButtonWrapper = ({
    children,
    visible,
  }: {
    children: React.ReactNode
    visible?: boolean
  }) => (
    <motion.div
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.95,
        x: visible ? 0 : 20,
      }}
      transition={{
        type: 'tween',
        duration: 0.3,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo>
            <LogoContent />
          </NavbarLogo>

          <div className="flex flex-1 items-center justify-center gap-x-8">
            {/* Produk Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProdukDropdownOpen(true)}
              onMouseLeave={() => setProdukDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-base font-medium transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
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
                    {products.map(product => (
                      <Link
                        key={product.slug}
                        href={`/produk/${product.slug}`}
                        className="block rounded-md px-4 py-2 text-sm font-medium transition-colors"
                        style={{
                          color: 'var(--text-secondary)',
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.backgroundColor =
                            'var(--primary-cream)'
                          e.currentTarget.style.color = 'var(--text-primary)'
                        }}
                        onMouseLeave={e => {
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
              <button
                className="flex items-center gap-1 text-base font-medium transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
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
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor =
                          'var(--primary-cream)'
                        e.currentTarget.style.color = 'var(--text-primary)'
                      }}
                      onMouseLeave={e => {
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
                      onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor =
                          'var(--primary-cream)'
                        e.currentTarget.style.color = 'var(--text-primary)'
                      }}
                      onMouseLeave={e => {
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

            <Link
              href="/sertifikasi"
              className="text-base font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--text-secondary)' }}
            >
              Sertifikasi
            </Link>
          </div>

          {/* CTA Button - Wrapped with motion for synchronized animation */}
          <CTAButtonWrapper>
            <Link
              href="mailto:info@3s-plywood.com"
              className="btn-primary btn-icon"
            >
              <Mail className="h-5 w-5" />
              Hubungi Kami
            </Link>
          </CTAButtonWrapper>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo>
              <LogoContent />
            </NavbarLogo>
            <MobileNavToggle
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu isOpen={mobileMenuOpen}>
            <div className="w-full space-y-1 px-2">
              {/* Produk */}
              <div className="space-y-2">
                <button
                  onClick={() => setProdukDropdownOpen(!produkDropdownOpen)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Produk
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${produkDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {produkDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-1 pl-4 relative z-10"
                    >
                      {products.map(product => (
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
                  onClick={() =>
                    setPerusahaanDropdownOpen(!perusahaanDropdownOpen)
                  }
                  className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Perusahaan
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${perusahaanDropdownOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {perusahaanDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-1 pl-4 relative z-10"
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
            </div>

            <Link
              href="mailto:info@3s-plywood.com"
              className="btn-primary btn-icon w-full mt-6 justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Mail className="h-5 w-5" />
              Hubungi Kami
            </Link>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  )
}
