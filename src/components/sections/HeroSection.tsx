'use client'

import { motion } from 'framer-motion'
import { Send, Eye } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { WorldMap } from '@/components/fancy/blocks/world-map'
import VerticalCutReveal from '@/components/fancy/text/vertical-cut-reveal'
import { preloadQuoteForm } from '@/components/QuoteRequestForm.lazy'
import { useQuoteRequestModal } from '@/contexts/QuoteRequestModalContext'

export default function HeroSection() {
  const t = useTranslations()
  const { openModal } = useQuoteRequestModal()

  // Preload handler for hover/touch events
  const handlePreload = () => {
    preloadQuoteForm()
  }

  const heroMapDots = [
    {
      start: { lat: -6.2088, lng: 106.8456 },
      end: { lat: 35.6762, lng: 139.6503 },
    }, // Tokyo
    {
      start: { lat: -6.2088, lng: 106.8456 },
      end: { lat: 31.2304, lng: 121.4737 },
    }, // Shanghai
    {
      start: { lat: -6.2088, lng: 106.8456 },
      end: { lat: 1.3521, lng: 103.8198 },
    }, // Singapore
    {
      start: { lat: -6.2088, lng: 106.8456 },
      end: { lat: 51.5074, lng: -0.1278 },
    }, // London
    {
      start: { lat: -6.2088, lng: 106.8456 },
      end: { lat: 40.7128, lng: -74.006 },
    }, // New York
    {
      start: { lat: -6.2088, lng: 106.8456 },
      end: { lat: 37.7749, lng: -122.4194 },
    }, // San Francisco
    {
      start: { lat: -6.2088, lng: 106.8456 },
      end: { lat: 25.2048, lng: 55.2708 },
    }, // Dubai
    {
      start: { lat: -6.2088, lng: 106.8456 },
      end: { lat: -33.8688, lng: 151.2093 },
    }, // Sydney
    {
      start: { lat: -6.2088, lng: 106.8456 },
      end: { lat: 13.7563, lng: 100.5018 },
    }, // Bangkok
  ]

  return (
    <section
      className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] pt-20 sm:pt-24 md:pt-0 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--primary-cream)' }}
    >
      {/* World Map Background */}
      <div className="absolute inset-0 mt-12 sm:mt-0 z-0 pointer-events-none scale-110 sm:scale-105 md:scale-100 lg:scale-100">
        <WorldMap
          dots={heroMapDots}
          lineColor="rgba(82, 36, 5, 0.35)"
          mapDotsColor="rgba(82, 36, 5, 0.15)"
        />
      </div>

      {/* Fade Effects for World Map */}
      <div className="absolute inset-0 z-[2] pointer-events-none">
        {/* Fade Effect - Top (Extended and stronger) */}
        <div
          className="absolute top-0 left-0 right-0 h-40 sm:h-48 md:h-64 lg:h-72"
          style={{
            background:
              'linear-gradient(to bottom, var(--primary-cream) 0%, var(--primary-cream) 40%, transparent 100%)',
          }}
        />
        {/* Fade Effect - Bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32"
          style={{
            background:
              'linear-gradient(to top, var(--primary-cream), transparent)',
          }}
        />
        {/* Fade Effect - Left */}
        <div
          className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 md:w-32"
          style={{
            background:
              'linear-gradient(to right, var(--primary-cream), transparent)',
          }}
        />
        {/* Fade Effect - Right */}
        <div
          className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 md:w-32"
          style={{
            background:
              'linear-gradient(to left, var(--primary-cream), transparent)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 text-center lg:px-8">
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
                  containerClassName="!flex !justify-center !items-center !w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
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
                    {t('hero.title')}
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
            className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed px-4 text-justified"
            style={{
              fontFamily: 'var(--font-secondary)',
              color: 'var(--primary-brown)',
            }}
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 w-full sm:w-auto"
          >
            <button
              onClick={openModal}
              onMouseEnter={handlePreload}
              onTouchStart={handlePreload}
              className="btn-primary btn-icon"
            >
              <Send className="h-5 w-5" />
              {t('buttons.requestQuote')}
            </button>

            <Link href="#produk" className="btn-outline-dark btn-icon">
              <Eye className="h-5 w-5" />
              {t('buttons.viewProductSpecs')}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
