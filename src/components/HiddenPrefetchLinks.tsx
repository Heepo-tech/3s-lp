'use client'

import { Link } from '@/i18n/navigation'

export default function HiddenPrefetchLinks() {
  const routes = [
    '/tentang-kami',
    '/blog',
    '/sertifikasi',
    '/produk',
    '/karir',
    // Product pages
    '/produk/plywood-standar',
    '/produk/plywood-marine',
    '/produk/plywood-film-faced',
    '/produk/plywood-decorative',
    '/produk/plywood-commercial',
    '/produk/plywood-engineered',
  ]

  return (
    <div
      aria-hidden="true"
      style={{
        visibility: 'hidden',
        position: 'absolute',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
    >
      {routes.map(route => (
        <Link
          key={route}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          href={route as any}
          prefetch={true}
        >
          Prefetch {route}
        </Link>
      ))}
    </div>
  )
}
