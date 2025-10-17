'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Info, Eye } from 'lucide-react'
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
              className="btn-primary btn-icon"
            >
              <Info className="h-5 w-5" />
              Tentang Kami
            </Link>

            <Link
              href="#produk"
              className="btn-outline-light btn-icon"
            >
              <Eye className="h-5 w-5" />
              Lihat Produk
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
