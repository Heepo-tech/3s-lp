'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import VerticalCutReveal from '@/components/fancy/text/vertical-cut-reveal'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/plywood-manufacturing.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Headline with Vertical Cut Reveal */}
          <div className="mb-6">
            <VerticalCutReveal
              containerClassName="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              autoStart={true}
            >
              <h1 style={{ fontFamily: 'var(--font-primary)' }}>
                Plywood Premium, Dipercaya Pasar Lokal & Internasional
              </h1>
            </VerticalCutReveal>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto max-w-3xl text-lg md:text-xl text-white/90 leading-relaxed"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            Dengan sertifikasi internasional dan pengalaman bertahun-tahun, kami
            menghadirkan plywood kuat, presisi, dan ramah lingkungan untuk proyek
            Anda di mana saja.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link
              href="/tentang-kami"
              className="group relative overflow-hidden rounded-lg px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
              style={{ background: 'var(--gradient-gold)' }}
            >
              Tentang Kami
            </Link>

            <Link
              href="#produk"
              className="group relative overflow-hidden rounded-lg border-2 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-white/20 hover:shadow-xl hover:scale-105"
              style={{ borderColor: 'var(--primary-gold)' }}
            >
              Lihat Produk
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="pt-12 flex flex-wrap justify-center gap-8 md:gap-12 text-white"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--primary-gold)' }}>
                25+
              </div>
              <div className="text-sm md:text-base text-white/80">Tahun Pengalaman</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--primary-gold)' }}>
                100+
              </div>
              <div className="text-sm md:text-base text-white/80">Klien Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: 'var(--primary-gold)' }}>
                50+
              </div>
              <div className="text-sm md:text-base text-white/80">Negara Tujuan Export</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
