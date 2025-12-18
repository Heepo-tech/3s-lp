'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const clients = [
  { name: 'Vita Group Global', logo: '/images/clients/vita-group.png' }, // Placeholder paths
  {
    name: 'Pinnacle Trade and Solution Pte. Ltd',
    logo: '/images/clients/pinnacle.png',
  },
]

export default function ClientShowcase() {
  const t = useTranslations()

  const clientItems = clients.map((client, index) => (
    <div
      key={index}
      className="flex items-center justify-center h-16 sm:h-20 md:h-24 w-32 sm:w-40 md:w-48 mx-3 sm:mx-4 md:mx-6 rounded-lg border transition-all duration-300 hover:shadow-md"
      style={{
        backgroundColor: 'var(--neutral-white)',
        borderColor: 'var(--neutral-medium)',
      }}
    >
      <div
        className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center px-2 sm:px-4"
        style={{ color: 'var(--text-muted)' }}
      >
        {client.name}
      </div>
    </div>
  ))

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: 'var(--primary-cream)' }}
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-primary)',
            }}
          >
            {t('clients.title')}
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0 text-justify"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-secondary)',
              textAlignLast: 'center',
            }}
          >
            Menjalin kerja sama jangka panjang dengan pelaku industri melalui
            kualitas yang konsisten dan spesifikasi yang jelas. Berikut adalah
            beberapa perusahaan besar yang telah bekerja sama dengan kami.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative"
        >
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12">
            {clientItems}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
