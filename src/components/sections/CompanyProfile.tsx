'use client'

import { motion } from 'framer-motion'
import { Globe, Award, Users, Factory } from 'lucide-react'

import TextHighlighter from '@/components/fancy/text/text-highlighter'

export default function CompanyProfile() {
  const trustElements = [
    {
      icon: Globe,
      title: 'Jangkauan Global',
      description:
        'Produk kami telah dipercaya di lebih dari 50 negara di seluruh dunia',
    },
    {
      icon: Award,
      title: 'Sertifikasi Internasional',
      description:
        'Memiliki sertifikasi ISO 9001, FSC, dan standar internasional lainnya',
    },
    {
      icon: Users,
      title: 'Tim Profesional',
      description:
        'Didukung oleh tim berpengalaman lebih dari 25 tahun di industri plywood',
    },
    {
      icon: Factory,
      title: 'Fasilitas Modern',
      description:
        'Pabrik dengan teknologi terkini untuk hasil presisi dan berkualitas tinggi',
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
            Tentang{' '}
            <span style={{ color: 'var(--primary-brown)' }}>
              PT. Sekawan Sahabat Sejati
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
            className="text-base sm:text-lg md:text-xl leading-relaxed px-4 sm:px-0"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-secondary)',
            }}
          >
            PT. Sekawan Sahabat Sejati adalah produsen{' '}
            <TextHighlighter
              as="span"
              highlightColor="rgba(251, 191, 36, 0.3)"
              triggerType="inView"
            >
              plywood premium
            </TextHighlighter>{' '}
            yang telah berdiri{' '}
            <TextHighlighter
              as="span"
              highlightColor="rgba(251, 191, 36, 0.3)"
              triggerType="inView"
            >
              sejak 1998
            </TextHighlighter>
            . Dengan komitmen terhadap kualitas dan inovasi, kami menghadirkan
            produk plywood{' '}
            <TextHighlighter
              as="span"
              highlightColor="rgba(251, 191, 36, 0.3)"
              triggerType="inView"
            >
              berkelas internasional
            </TextHighlighter>{' '}
            yang{' '}
            <TextHighlighter
              as="span"
              highlightColor="rgba(251, 191, 36, 0.3)"
              triggerType="inView"
            >
              ramah lingkungan
            </TextHighlighter>
            . Pengalaman{' '}
            <TextHighlighter
              as="span"
              highlightColor="rgba(251, 191, 36, 0.3)"
              triggerType="inView"
            >
              lebih dari 25 tahun
            </TextHighlighter>{' '}
            membuat kami menjadi{' '}
            <TextHighlighter
              as="span"
              highlightColor="rgba(251, 191, 36, 0.3)"
              triggerType="inView"
            >
              mitra terpercaya
            </TextHighlighter>{' '}
            untuk proyek konstruksi, furniture, dan kebutuhan industri di pasar
            lokal maupun global.
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
                  className="text-sm leading-relaxed"
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
              Tahun Berdiri
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
              Negara Export
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
              Karyawan Terampil
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
              m³ Kapasitas/Tahun
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
