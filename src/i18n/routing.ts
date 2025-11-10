import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  // Supported locales
  locales: ['id', 'en'],

  // Default locale
  defaultLocale: 'id',

  // Locale prefix mode - always show locale in URL
  localePrefix: 'always',

  // Pathname localization
  pathnames: {
    '/': '/',
    '/produk': {
      id: '/produk',
      en: '/products',
    },
    '/produk/[slug]': {
      id: '/produk/[slug]',
      en: '/products/[slug]',
    },
    '/tentang-kami': {
      id: '/tentang-kami',
      en: '/about-us',
    },
    '/blog': '/blog',
    '/blog/[slug]': '/blog/[slug]',
  },
}) satisfies Parameters<typeof createNavigation>[0]

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
