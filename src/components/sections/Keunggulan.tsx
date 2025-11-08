'use client'

import { motion } from 'framer-motion'
import {
  CheckCircle,
  Shield,
  Leaf,
  Truck,
  Award,
  HeadphonesIcon,
} from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Keunggulan() {
  const t = useTranslations()

  const keunggulanList = [
    {
      icon: Shield,
      title: t('advantagesSection.features.quality.title'),
      description: t('advantagesSection.features.quality.description'),
    },
    {
      icon: Award,
      title: t('advantagesSection.features.certification.title'),
      description: t('advantagesSection.features.certification.description'),
    },
    {
      icon: CheckCircle,
      title: t('advantagesSection.features.customization.title'),
      description: t('advantagesSection.features.customization.description'),
    },
    {
      icon: Truck,
      title: t('advantagesSection.features.delivery.title'),
      description: t('advantagesSection.features.delivery.description'),
    },
    {
      icon: HeadphonesIcon,
      title: t('advantagesSection.features.support.title'),
      description: t('advantagesSection.features.support.description'),
    },
    {
      icon: Leaf,
      title: t('advantagesSection.features.price.title'),
      description: t('advantagesSection.features.price.description'),
    },
  ]

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ background: 'var(--gradient-warm)' }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-primary)',
            }}
          >
            {t('advantages.title')}
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0 text-center"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-secondary)',
            }}
          >
            {t('advantagesSection.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {keunggulanList.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative p-6 sm:p-8 rounded-2xl border bg-white transition-all duration-300 md:hover:shadow-xl md:hover:-translate-y-2 overflow-hidden"
                style={{ borderColor: 'var(--neutral-medium)' }}
              >
                <div
                  className="mb-4 sm:mb-6 inline-flex rounded-xl p-3 sm:p-4 transition-all duration-300"
                  style={{ backgroundColor: 'var(--primary-cream)' }}
                >
                  <Icon
                    className="h-6 w-6 sm:h-8 sm:w-8"
                    style={{ color: 'var(--primary-gold)' }}
                  />
                </div>

                <h3
                  className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold"
                  style={{
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-primary)',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-sm sm:text-base leading-relaxed text-justified"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-secondary)',
                  }}
                >
                  {item.description}
                </p>

                <div
                  className="absolute bottom-0 left-0 h-1.5 w-0 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: 'var(--primary-brown)' }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
