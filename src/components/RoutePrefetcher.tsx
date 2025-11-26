'use client'

import { useEffect } from 'react'

import { useRouter } from '@/i18n/navigation'

export default function RoutePrefetcher() {
  const router = useRouter()

  useEffect(() => {
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

    // Prefetch routes immediately to ensure instant navigation
    routes.forEach(route => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      router.prefetch(route as any)
    })
  }, [router])

  return null
}
