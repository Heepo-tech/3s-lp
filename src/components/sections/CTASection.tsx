'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function CTASection() {
  const t = useTranslations()
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: 'var(--primary-cream)' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, var(--primary-gold) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Headline */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 px-4 sm:px-0"
            style={{
              fontFamily: 'var(--font-primary)',
              color: 'var(--primary-dark-brown)',
            }}
          >
            {t('cta.title')}
          </h2>

          {/* Benefits List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-8 sm:mb-10 max-w-2xl mx-auto"
          >
            <div className="flex flex-col gap-3 sm:gap-4 items-start text-left px-4 sm:px-0">
              {[
                t('cta.benefits.consultation'),
                t('cta.benefits.response'),
                t('cta.benefits.pricing'),
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 w-full"
                >
                  <CheckCircle
                    className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
                    style={{ color: 'var(--primary-gold)' }}
                  />
                  <span
                    className="text-sm sm:text-base md:text-lg text-justified"
                    style={{
                      fontFamily: 'var(--font-secondary)',
                      color: 'var(--primary-brown)',
                    }}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full max-w-2xl mx-auto px-4 sm:px-0">
            <motion.a
              href="mailto:info@3s-plywood.com?subject=Konsultasi Rekomendasi Produk"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="btn-primary btn-icon w-full sm:w-auto sm:flex-1"
            >
              <Mail className="h-5 w-5" />
              {t('buttons.sendEmail')}
            </motion.a>

            <motion.a
              href="tel:+622112345678"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="btn-outline-dark btn-icon w-full sm:w-auto sm:flex-1"
            >
              <Phone className="h-5 w-5" />
              {t('buttons.callNow')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
