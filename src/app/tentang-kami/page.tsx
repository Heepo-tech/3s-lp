import type { Metadata } from 'next'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import TentangKamiContent from '@/components/sections/TentangKamiContent'

export const metadata: Metadata = {
  title: 'Tentang Kami',
  description: 'Mengenal lebih dekat PT. Sekawan Sahabat Sejati, produsen plywood premium dengan pengalaman lebih dari 25 tahun melayani pasar lokal dan internasional.',
}

export default function TentangKamiPage() {
  return (
    <div className="w-full overflow-auto">
      {/* Main Content with higher z-index for sticky footer */}
      <div className="relative z-10 min-h-screen" style={{ backgroundColor: 'var(--primary-cream)' }}>
        <Header />
        <TentangKamiContent />
      </div>

      {/* Sticky Footer with lower z-index */}
      <Footer />
    </div>
  )
}
