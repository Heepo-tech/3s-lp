import ClientShowcase from '@/components/sections/ClientShowcase'
import CompanyProfile from '@/components/sections/CompanyProfile'
import CTASection from '@/components/sections/CTASection'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'
import HeroSection from '@/components/sections/HeroSection'
import Keunggulan from '@/components/sections/Keunggulan'
import ProdukSection from '@/components/sections/ProdukSection'
import Sertifikasi from '@/components/sections/Sertifikasi'

export default function Home() {
  return (
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
        <CTASection />
      </div>

      {/* Sticky Footer with lower z-index */}
      <Footer />
    </div>
  )
}
