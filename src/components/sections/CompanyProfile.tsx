'use client'

import { motion } from 'framer-motion'
import { Globe, Award, Users, Factory } from 'lucide-react'
import { useTranslations } from 'next-intl'

import TextHighlighter from '@/components/fancy/text/text-highlighter'

export default function CompanyProfile() {
  const t = useTranslations()

  const trustElements = [
    {
      icon: Globe,
      title: t('companyProfile.trustElements.globalReach.title'),
      description: t('companyProfile.trustElements.globalReach.description'),
    },
    {
      icon: Award,
      title: t('companyProfile.trustElements.certification.title'),
      description: t('companyProfile.trustElements.certification.description'),
    },
    {
      icon: Users,
      title: t('companyProfile.trustElements.professional.title'),
      description: t('companyProfile.trustElements.professional.description'),
    },
    {
      icon: Factory,
      title: t('companyProfile.trustElements.modern.title'),
      description: t('companyProfile.trustElements.modern.description'),
    },
  ]

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--primary-cream)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-primary)',
            }}
          >
            {t('companyProfile.titlePrefix')}{' '}
            <span style={{ color: 'var(--primary-brown)' }}>
              {t('companyProfile.companyName')}
            </span>
          </h2>
        </motion.div>

        {/* Company Description with Text Highlighter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16 max-w-4xl mx-auto"
        >
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-0 text-justified"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-secondary)',
            }}
          >
            {t('companyProfile.description.intro')}{' '}
            <TextHighlighter
              as="span"
              highlightColor="rgba(251, 191, 36, 0.3)"
              triggerType="inView"
            >
              {t('companyProfile.description.highlight1')}
            </TextHighlighter>{' '}
            {t('companyProfile.description.text1')}{' '}
            <TextHighlighter
              as="span"
              highlightColor="rgba(251, 191, 36, 0.3)"
              triggerType="inView"
            >
              {t('companyProfile.description.highlight2')}
            </TextHighlighter>
            {t('companyProfile.description.text2')}{' '}
            <TextHighlighter
              as="span"
              highlightColor="rgba(251, 191, 36, 0.3)"
              triggerType="inView"
            >
              {t('companyProfile.description.highlight3')}
            </TextHighlighter>{' '}
            {t('companyProfile.description.text3')}{' '}
            <TextHighlighter
              as="span"
              highlightColor="rgba(251, 191, 36, 0.3)"
              triggerType="inView"
            >
              {t('companyProfile.description.highlight4')}
            </TextHighlighter>
            {t('companyProfile.description.text4')}{' '}
            <TextHighlighter
              as="span"
              highlightColor="rgba(251, 191, 36, 0.3)"
              triggerType="inView"
            >
              {t('companyProfile.description.highlight5')}
            </TextHighlighter>{' '}
            {t('companyProfile.description.text5')}{' '}
            <TextHighlighter
              as="span"
              highlightColor="rgba(251, 191, 36, 0.3)"
              triggerType="inView"
            >
              {t('companyProfile.description.highlight6')}
            </TextHighlighter>{' '}
            {t('companyProfile.description.text6')}
          </p>
        </motion.div>

        {/* Trust Elements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustElements.map((element, index) => {
            const Icon = element.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative p-4 sm:p-6 rounded-xl border transition-all duration-300 md:hover:shadow-lg md:hover:-translate-y-2 overflow-hidden"
                style={{
                  backgroundColor: 'var(--neutral-white)',
                  borderColor: 'var(--neutral-medium)',
                }}
                onMouseEnter={e => {
                  if (window.innerWidth >= 768) {
                    e.currentTarget.style.borderColor = 'var(--primary-brown)'
                  }
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--neutral-medium)'
                }}
              >
                {/* Icon */}
                <div
                  className="mb-4 inline-flex rounded-lg p-3 transition-all duration-300"
                  style={{ backgroundColor: 'var(--primary-cream)' }}
                >
                  <Icon
                    className="h-6 w-6 sm:h-7 sm:w-7"
                    style={{ color: 'var(--primary-brown)' }}
                  />
                </div>

                {/* Title */}
                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-primary)',
                  }}
                >
                  {element.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed text-justified"
                  style={{
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-secondary)',
                  }}
                >
                  {element.description}
                </p>

                {/* Decorative gradient line on hover */}
                <div
                  className="absolute bottom-0 left-0 h-1 w-0 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ background: 'var(--gradient-brown)' }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-6 sm:p-8 rounded-2xl"
          style={{ background: 'var(--gradient-warm)' }}
        >
          <div className="text-center">
            <div
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
              style={{
                color: 'var(--primary-dark-brown)',
                fontFamily: 'var(--font-primary)',
              }}
            >
              1998
            </div>
            <div
              className="text-xs sm:text-sm md:text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('companyProfile.stats.foundedLabel')}
            </div>
          </div>

          <div className="text-center">
            <div
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
              style={{
                color: 'var(--primary-dark-brown)',
                fontFamily: 'var(--font-primary)',
              }}
            >
              50+
            </div>
            <div
              className="text-xs sm:text-sm md:text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('companyProfile.stats.countriesLabel')}
            </div>
          </div>

          <div className="text-center">
            <div
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
              style={{
                color: 'var(--primary-dark-brown)',
                fontFamily: 'var(--font-primary)',
              }}
            >
              500+
            </div>
            <div
              className="text-xs sm:text-sm md:text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('companyProfile.stats.employeesLabel')}
            </div>
          </div>

          <div className="text-center">
            <div
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2"
              style={{
                color: 'var(--primary-dark-brown)',
                fontFamily: 'var(--font-primary)',
              }}
            >
              100K+
            </div>
            <div
              className="text-xs sm:text-sm md:text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t('companyProfile.stats.capacityLabel')}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
