'use client'

import { motion } from 'framer-motion'

import SimpleMarquee from '@/components/fancy/blocks/simple-marquee'

const clients = [
  { name: 'IKEA', logo: '/images/clients/ikea.png' },
  { name: 'Ashley Furniture', logo: '/images/clients/ashley.png' },
  { name: 'Home Depot', logo: '/images/clients/homedepot.png' },
  { name: 'Kingspan', logo: '/images/clients/kingspan.png' },
  { name: 'Waskita Karya', logo: '/images/clients/waskita.png' },
  { name: 'Adhi Karya', logo: '/images/clients/adhikarya.png' },
  { name: 'Wijaya Karya', logo: '/images/clients/wijaya.png' },
  { name: 'Pembangunan Perumahan', logo: '/images/clients/pp.png' },
  { name: 'Agung Podomoro', logo: '/images/clients/agungpodomoro.png' },
  { name: 'Ciputra Group', logo: '/images/clients/ciputra.png' },
]

export default function ClientShowcase() {
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
            Dipercaya oleh{' '}
            <span style={{ color: 'var(--primary-gold)' }}>
              Perusahaan Terkemuka
            </span>
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4 sm:px-0"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-secondary)',
            }}
          >
            Lebih dari 100 perusahaan di seluruh dunia mempercayai kualitas
            produk kami
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <SimpleMarquee
            baseVelocity={-2}
            direction="left"
            slowdownOnHover={true}
          >
            {clientItems}
          </SimpleMarquee>
        </motion.div>
      </div>
    </section>
  )
}
