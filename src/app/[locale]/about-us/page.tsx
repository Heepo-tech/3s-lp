import type { Metadata } from 'next'

import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'
import TentangKamiContent from '@/components/sections/TentangKamiContent'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    title: locale === 'id' ? 'Tentang Kami' : 'About Us',
    description:
      locale === 'id'
        ? 'Mengenal lebih dekat PT. Sekawan Sahabat Sejati, produsen plywood premium dengan pengalaman lebih dari 25 tahun melayani pasar lokal dan internasional.'
        : 'Get to know PT. Sekawan Sahabat Sejati, a premium plywood manufacturer with over 25 years of experience serving local and international markets.',
  }
}

export default function AboutUsPage() {
  return (
    <div className="w-full h-screen overflow-auto">
      {/* Main Content with higher z-index for sticky footer */}
      <div
        className="relative z-10 pb-8 sm:pb-12"
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
