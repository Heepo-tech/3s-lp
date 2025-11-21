import dynamic from 'next/dynamic'

import PageReadyWrapper from '@/components/PageReadyWrapper'
import ClientShowcase from '@/components/sections/ClientShowcase'
import CompanyProfile from '@/components/sections/CompanyProfile'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import Keunggulan from '@/components/sections/Keunggulan'
import ProdukSection from '@/components/sections/ProdukSection'
import QuoteRequestSection from '@/components/sections/QuoteRequestSection'

// Lazy load only non-critical below-the-fold components
const Sertifikasi = dynamic(() => import('@/components/sections/Sertifikasi'), {
  loading: () => <div className="min-h-[200px]" />,
  ssr: true,
})

const FAQ = dynamic(() => import('@/components/sections/FAQ'), {
  loading: () => <div className="min-h-[200px]" />,
  ssr: true,
})

// ISR: Revalidate every 1 hour (3600 seconds)
// Company profile content is relatively static but may need occasional updates

// ISR: Revalidate every 1 hour (3600 seconds)
export const revalidate = 3600

export default function Home() {
  return (
    <PageReadyWrapper>
      <div
        className="w-full"
        style={{ backgroundColor: 'var(--primary-dark-brown)' }}
      >
        <Header />
        {/* Main Content with higher z-index for sticky footer */}
        <div
          className="relative z-10 pb-8 sm:pb-12"
          style={{ backgroundColor: 'var(--primary-cream)' }}
        >
          <HeroSection />
          <CompanyProfile />
          <ProdukSection />
          <Keunggulan />
          <ClientShowcase />
          <Sertifikasi />
          <FAQ />
          <QuoteRequestSection />
        </div>

        {/* Sticky Footer with lower z-index */}
        <Footer />
      </div>
    </PageReadyWrapper>
  )
}
