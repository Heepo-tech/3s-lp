import type { Metadata } from 'next'

import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'
import TentangKamiContent from '@/components/sections/TentangKamiContent'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description:
    'Mengenal lebih dekat PT. Sekawan Sahabat Sejati, produsen plywood premium dengan pengalaman lebih dari 25 tahun melayani pasar lokal dan internasional.',
}

export default function TentangKamiPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Main Content with higher z-index for sticky footer */}
      <div
        className="relative z-10 flex-1 pb-8 sm:pb-12"
        style={{ backgroundColor: 'var(--primary-cream)' }}
      >
        <Header />
        <TentangKamiContent />
      </div>

      {/* Sticky Footer with lower z-index */}
      <Footer />
    </div>
  )
}
