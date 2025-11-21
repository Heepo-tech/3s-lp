'use client'

import { motion, AnimatePresence, easeInOut } from 'framer-motion'
import { ChevronDown, Globe, Mail, Menu, X } from 'lucide-react'
import Image from 'next/image'
import NextLink from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { useState, useEffect } from 'react'

import { Navbar, NavBody, NavbarLogo } from '@/components/ui/resizable-navbar'
import { useFooterVisibility } from '@/hooks/useFooterVisibility'
import { Link } from '@/i18n/navigation'

export default function Header() {
  const t = useTranslations()
  const locale = useLocale()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [produkDropdownOpen, setProdukDropdownOpen] = useState(false)
  const [perusahaanDropdownOpen, setPerusahaanDropdownOpen] = useState(false)
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)
  const [desktopLanguageDropdownOpen, setDesktopLanguageDropdownOpen] =
    useState(false)
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

  // Motion variants for animations
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: { duration: 0.3, ease: easeInOut },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: easeInOut, staggerChildren: 0.1 },
    },
  }

  const mobileItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  }

  const mobileHeaderVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  }

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
                        prefetch={true}
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
                      prefetch={true}
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
                      prefetch={true}
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
          <div className="flex items-center gap-3 lg:gap-6">
            {/* Language Switcher - Desktop only */}
            <div className="hidden lg:block relative">
              <button
                onClick={() =>
                  setDesktopLanguageDropdownOpen(!desktopLanguageDropdownOpen)
                }
                className="flex items-center gap-1.5 px-2 py-1.5 text-sm font-medium rounded-lg transition-all duration-200"
                style={{
                  color: 'var(--primary-brown)',
                  backgroundColor: desktopLanguageDropdownOpen
                    ? 'var(--primary-cream)'
                    : 'transparent',
                }}
              >
                <Globe className="h-4 w-4" />
                <span>{locale === 'id' ? 'ID' : 'EN'}</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${
                    desktopLanguageDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Desktop Dropdown Menu */}
              <AnimatePresence>
                {desktopLanguageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 rounded-lg border shadow-lg overflow-hidden z-50"
                    style={{
                      backgroundColor: 'var(--neutral-white)',
                      borderColor: 'var(--neutral-medium)',
                    }}
                  >
                    <Link
                      href="/"
                      locale="id"
                      className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                        locale === 'id' ? 'bg-(--primary-cream)' : ''
                      }`}
                      style={{
                        color:
                          locale === 'id'
                            ? 'var(--primary-brown)'
                            : 'var(--text-secondary)',
                      }}
                      onClick={() => setDesktopLanguageDropdownOpen(false)}
                    >
                      <span className="text-lg">🇮🇩</span>
                      <span>Indonesia</span>
                    </Link>
                    <Link
                      href="/"
                      locale="en"
                      className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors ${
                        locale === 'en' ? 'bg-(--primary-cream)' : ''
                      }`}
                      style={{
                        color:
                          locale === 'en'
                            ? 'var(--primary-brown)'
                            : 'var(--text-secondary)',
                      }}
                      onClick={() => setDesktopLanguageDropdownOpen(false)}
                    >
                      <span className="text-lg">🇬🇧</span>
                      <span>English</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button - Desktop only */}
            <a
              href="mailto:info@3s-plywood.com"
              className="hidden lg:flex btn-primary btn-icon"
            >
              <Mail className="h-5 w-5" />
              {t('buttons.contactUs')}
            </a>
          </div>
        </NavBody>
      </Navbar>

      {/* Mobile Hamburger Button - Outside Navbar, Always on Top */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-6 right-4 md:right-6 z-70 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
        style={{
          backgroundColor: mobileMenuOpen ? 'var(--primary-brown)' : 'white',
          color: mobileMenuOpen ? 'white' : 'var(--text-primary)',
          border: mobileMenuOpen ? 'none' : '1px solid var(--neutral-medium)',
        }}
        aria-label="Toggle mobile menu"
      >
        {mobileMenuOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* New Mobile Menu - Slide in from right */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: easeInOut }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-20 left-1/2 -translate-x-1/2 md:left-auto md:right-6 md:translate-x-0 bottom-20 z-50 w-[360px] max-w-[calc(100vw-32px)] flex flex-col rounded-3xl border shadow-2xl lg:hidden"
              style={{
                backgroundColor: 'var(--neutral-white)',
                borderColor: 'var(--neutral-medium)',
              }}
            >
              {/* Logo Header Section - Fixed at Top */}
              <motion.div
                variants={mobileHeaderVariants}
                className="flex items-center gap-3 p-6 border-b"
                style={{ borderColor: 'var(--neutral-medium)' }}
              >
                <div className="flex h-12 w-12 items-center justify-center">
                  <Image
                    src="/Logo.PNG"
                    alt="PT. Sekawan Sahabat Sejati Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="flex flex-col">
                  <span
                    className="text-sm font-bold leading-tight"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    PT. Sekawan
                  </span>
                  <span
                    className="text-sm font-bold leading-tight"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Sahabat Sejati
                  </span>
                </div>
              </motion.div>

              {/* Middle Section - Scrollable Navigation */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5">
                {/* Produk Section */}
                <motion.div variants={mobileItemVariants}>
                  <button
                    onClick={() => setProdukDropdownOpen(!produkDropdownOpen)}
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span
                      className="text-base font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {t('navigation.products')}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        produkDropdownOpen ? 'rotate-180' : ''
                      }`}
                      style={{ color: 'var(--text-secondary)' }}
                    />
                  </button>
                  <AnimatePresence>
                    {produkDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 space-y-2 overflow-hidden"
                      >
                        {products.map(product => (
                          <Link
                            key={product.slug}
                            href={{
                              pathname: '/produk/[slug]',
                              params: { slug: product.slug },
                            }}
                            prefetch={true}
                            className="block rounded-md px-4 py-2 text-sm transition-colors"
                            style={{ color: 'var(--text-secondary)' }}
                            onMouseEnter={e => {
                              e.currentTarget.style.backgroundColor =
                                'var(--primary-cream)'
                            }}
                            onMouseLeave={e => {
                              e.currentTarget.style.backgroundColor =
                                'transparent'
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {product.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Perusahaan Section */}
                <motion.div variants={mobileItemVariants}>
                  <button
                    onClick={() =>
                      setPerusahaanDropdownOpen(!perusahaanDropdownOpen)
                    }
                    className="flex w-full items-center justify-between text-left"
                  >
                    <span
                      className="text-base font-semibold"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {t('navigation.company')}
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        perusahaanDropdownOpen ? 'rotate-180' : ''
                      }`}
                      style={{ color: 'var(--text-secondary)' }}
                    />
                  </button>
                  <AnimatePresence>
                    {perusahaanDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 space-y-2 overflow-hidden"
                      >
                        <Link
                          href="/tentang-kami"
                          prefetch={true}
                          className="block rounded-md px-4 py-2 text-sm transition-colors"
                          style={{ color: 'var(--text-secondary)' }}
                          onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor =
                              'var(--primary-cream)'
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor =
                              'transparent'
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t('navigation.aboutUs')}
                        </Link>
                        <Link
                          href="/blog"
                          prefetch={true}
                          className="block rounded-md px-4 py-2 text-sm transition-colors"
                          style={{ color: 'var(--text-secondary)' }}
                          onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor =
                              'var(--primary-cream)'
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor =
                              'transparent'
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {t('navigation.blog')}
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Sertifikasi */}
                <motion.div variants={mobileItemVariants}>
                  <NextLink
                    href="/sertifikasi"
                    className="block text-base font-semibold transition-colors"
                    style={{ color: 'var(--text-primary)' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('navigation.certification')}
                  </NextLink>
                </motion.div>
              </div>

              {/* Bottom Section - Fixed at Bottom */}
              <div
                className="p-6 space-y-4 border-t"
                style={{ borderColor: 'var(--neutral-medium)' }}
              >
                {/* Language Dropdown */}
                <motion.div variants={mobileItemVariants}>
                  <div className="space-y-2">
                    {/* Dropdown Button */}
                    <button
                      onClick={() =>
                        setLanguageDropdownOpen(!languageDropdownOpen)
                      }
                      className="rounded-xl h-12 w-full flex items-center justify-between px-4 transition-all duration-200 border"
                      style={{
                        backgroundColor: 'white',
                        borderColor: 'var(--neutral-medium)',
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <Globe
                          className="h-4 w-4"
                          style={{ color: 'var(--text-primary)' }}
                        />
                        <span
                          className="text-sm font-medium"
                          style={{ color: 'var(--text-primary)' }}
                        >
                          {locale === 'id' ? 'Indonesia' : 'English'}
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          languageDropdownOpen ? 'rotate-180' : ''
                        }`}
                        style={{ color: 'var(--text-secondary)' }}
                      />
                    </button>

                    {/* Dropdown Options */}
                    <AnimatePresence>
                      {languageDropdownOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-1 pt-1">
                            <Link
                              href="/"
                              locale="id"
                              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                                locale === 'id'
                                  ? 'bg-(--primary-cream)'
                                  : 'hover:bg-gray-50'
                              }`}
                              onClick={() => {
                                setLanguageDropdownOpen(false)
                                setMobileMenuOpen(false)
                              }}
                            >
                              <span className="text-xl">🇮🇩</span>
                              <span
                                className={`text-sm ${locale === 'id' ? 'font-semibold' : 'font-medium'}`}
                                style={{ color: 'var(--text-primary)' }}
                              >
                                Indonesia
                              </span>
                            </Link>

                            <Link
                              href="/"
                              locale="en"
                              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                                locale === 'en'
                                  ? 'bg-(--primary-cream)'
                                  : 'hover:bg-gray-50'
                              }`}
                              onClick={() => {
                                setLanguageDropdownOpen(false)
                                setMobileMenuOpen(false)
                              }}
                            >
                              <span className="text-xl">🇬🇧</span>
                              <span
                                className={`text-sm ${locale === 'en' ? 'font-semibold' : 'font-medium'}`}
                                style={{ color: 'var(--text-primary)' }}
                              >
                                English
                              </span>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div variants={mobileItemVariants}>
                  <a
                    href="mailto:info@3s-plywood.com"
                    className="btn-primary btn-icon w-full justify-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Mail className="h-5 w-5" />
                    {t('buttons.contactUs')}
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
