import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import CompanyProfile from '@/components/sections/CompanyProfile'
import ProdukSection from '@/components/sections/ProdukSection'
import Keunggulan from '@/components/sections/Keunggulan'
import ClientShowcase from '@/components/sections/ClientShowcase'
import Sertifikasi from '@/components/sections/Sertifikasi'
import FAQ from '@/components/sections/FAQ'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="w-full overflow-auto">
      {/* Main Content with higher z-index for sticky footer */}
      <div className="relative z-10 min-h-screen" style={{ backgroundColor: 'var(--primary-cream)' }}>
        <Header />
        <HeroSection />
        <CompanyProfile />
        <ProdukSection />
        <Keunggulan />
        <ClientShowcase />
        <Sertifikasi />
        <FAQ />
        <CTASection />
      </div>

      {/* Sticky Footer with lower z-index */}
      <Footer />
    </div>
  )
}
