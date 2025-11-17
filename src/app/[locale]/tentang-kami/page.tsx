import type { Metadata } from 'next'

import Footer from '@/components/sections/Footer'
import TentangKamiContent from '@/components/sections/TentangKamiContent'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description:
    'Mengenal lebih dekat PT. Sekawan Sahabat Sejati, produsen plywood premium dengan pengalaman lebih dari 25 tahun melayani pasar lokal dan internasional.',
}

// ISR: Revalidate every 6 hours (21600 seconds)
// Company information is very static
export const revalidate = 21600

export default function TentangKamiPage() {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      {/* Main Content with higher z-index for sticky footer */}
      <div
        className="relative z-10 flex-1 pb-0"
        style={{ backgroundColor: 'var(--primary-cream)' }}
      >
        <TentangKamiContent />
      </div>

      {/* Sticky Footer with lower z-index */}
      <Footer />
    </div>
  )
}
