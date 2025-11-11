'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Mail } from 'lucide-react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

import LanguageSwitcher from '@/components/LanguageSwitcher'
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
import { Link } from '@/i18n/navigation'

export default function Header() {
  const t = useTranslations()
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

  // Disable scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  const products = [
    { name: t('products.standard'), slug: 'plywood-standar' },
    { name: t('products.marine'), slug: 'plywood-marine' },
    { name: t('products.filmFaced'), slug: 'plywood-film-faced' },
    { name: t('products.decorative'), slug: 'plywood-decorative' },
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
                {t('navigation.products')}
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
                        href={{
                          pathname: '/produk/[slug]',
                          params: { slug: product.slug },
                        }}
                        className="block rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:shadow-none"
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
                {t('navigation.company')}
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
                      className="block rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:shadow-none"
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
                      {t('navigation.aboutUs')}
                    </Link>
                    <Link
                      href="/blog"
                      className="block rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:shadow-none"
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
                      {t('navigation.blog')}
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NextLink
              href="/sertifikasi"
              className="text-base font-medium transition-colors hover:opacity-80"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('navigation.certification')}
            </NextLink>
          </div>

          {/* Language Switcher + CTA Button Group */}
          <div className="flex items-center gap-6">
            {/* Language Switcher - Ghost Mode */}
            <LanguageSwitcher />

            {/* CTA Button - Direct render */}
            <a
              href="mailto:info@3s-plywood.com"
              className="btn-primary btn-icon"
            >
              <Mail className="h-5 w-5" />
              {t('buttons.contactUs')}
            </a>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo>
              <LogoContent />
            </NavbarLogo>
            <div className="flex items-center justify-center min-w-[44px] min-h-[44px]">
              <MobileNavToggle
                isOpen={mobileMenuOpen}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu isOpen={mobileMenuOpen}>
            <div className="w-full space-y-1 px-2">
              {/* Produk */}
              <div className="space-y-2">
                <button
                  onClick={() => setProdukDropdownOpen(!produkDropdownOpen)}
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium min-h-[44px]"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {t('navigation.products')}
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
                          href={{
                            pathname: '/produk/[slug]',
                            params: { slug: product.slug },
                          }}
                          className="block rounded-md px-3 py-3 text-sm font-medium min-h-[44px] flex items-center focus:outline-none focus:shadow-none"
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
                  className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium min-h-[44px]"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {t('navigation.company')}
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
                        className="block rounded-md px-3 py-3 text-sm font-medium min-h-[44px] flex items-center focus:outline-none focus:shadow-none"
                        style={{ color: 'var(--text-secondary)' }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t('navigation.aboutUs')}
                      </Link>
                      <Link
                        href="/blog"
                        className="block rounded-md px-3 py-3 text-sm font-medium min-h-[44px] flex items-center focus:outline-none focus:shadow-none"
                        style={{ color: 'var(--text-secondary)' }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {t('navigation.blog')}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NextLink
                href="/sertifikasi"
                className="block rounded-md px-3 py-3 text-base font-medium min-h-[44px] flex items-center"
                style={{ color: 'var(--text-primary)' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('navigation.certification')}
              </NextLink>

              {/* Language Switcher - Mobile */}
              <div
                className="pt-2 mt-2"
                style={{ borderTop: '1px solid var(--neutral-medium)' }}
              >
                <LanguageSwitcher mobile />
              </div>
            </div>

            <a
              href="mailto:info@3s-plywood.com"
              className="btn-primary btn-icon w-full mt-6 justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Mail className="h-5 w-5" />
              {t('buttons.contactUs')}
            </a>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  )
}
