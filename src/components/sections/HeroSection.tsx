'use client'

import { motion } from 'framer-motion'
import { Info, Eye } from 'lucide-react'
import Link from 'next/link'

import VerticalCutReveal from '@/components/fancy/text/vertical-cut-reveal'

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--primary-cream)' }}
    >
      {/* Dot Pattern Background with Fade Effect */}
      <div className="absolute inset-0 z-0">
        {/* Dot Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(rgba(82, 36, 5, 0.15) 2px, transparent 0)',
            backgroundSize: '30px 30px',
            backgroundPosition: '-5px -5px',
          }}
        />
        {/* Fade Effect - Top */}
        <div
          className="absolute top-0 left-0 right-0 h-32"
          style={{
            background:
              'linear-gradient(to bottom, var(--primary-cream), transparent)',
          }}
        />
        {/* Fade Effect - Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              'linear-gradient(to top, var(--primary-cream), transparent)',
          }}
        />
        {/* Fade Effect - Left */}
        <div
          className="absolute top-0 bottom-0 left-0 w-32"
          style={{
            background:
              'linear-gradient(to right, var(--primary-cream), transparent)',
          }}
        />
        {/* Fade Effect - Right */}
        <div
          className="absolute top-0 bottom-0 right-0 w-32"
          style={{
            background:
              'linear-gradient(to left, var(--primary-cream), transparent)',
          }}
        />
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
          <div className="mb-6 w-full">
            <div className="w-full flex justify-center">
              <div className="block w-full max-w-5xl text-center">
                <VerticalCutReveal
                  containerClassName="!flex !justify-center !items-center !w-full text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                  wordLevelClassName="!inline"
                  autoStart={true}
                >
                  <h1
                    style={{
                      fontFamily: 'var(--font-primary)',
                      color: 'var(--primary-dark-brown)',
                      textAlign: 'center',
                      width: '100%',
                      display: 'block',
                      margin: '0 auto',
                    }}
                  >
                    Plywood Premium, Dipercaya Pasar Lokal & Internasional
                  </h1>
                </VerticalCutReveal>
              </div>
            </div>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mx-auto max-w-3xl text-lg md:text-xl leading-relaxed"
            style={{
              fontFamily: 'var(--font-secondary)',
              color: 'var(--primary-brown)',
            }}
          >
            Dengan sertifikasi internasional dan pengalaman bertahun-tahun, kami
            menghadirkan plywood kuat, presisi, dan ramah lingkungan untuk
            proyek Anda di mana saja.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link href="/tentang-kami" className="btn-primary btn-icon">
              <Info className="h-5 w-5" />
              Tentang Kami
            </Link>

            <Link href="#produk" className="btn-outline-dark btn-icon">
              <Eye className="h-5 w-5" />
              Lihat Produk
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
