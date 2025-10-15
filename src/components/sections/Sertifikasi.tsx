'use client'

import { motion } from 'framer-motion'
import { Award, CheckCircle2 } from 'lucide-react'

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    year: '2020',
    category: 'Quality'
  },
  {
    name: 'FSC Certified',
    description: 'Forest Stewardship Council',
    year: '2019',
    category: 'Sustainability'
  },
  {
    name: 'ISO 14001:2015',
    description: 'Environmental Management',
    year: '2021',
    category: 'Environment'
  },
  {
    name: 'CARB P2',
    description: 'California Air Resources Board',
    year: '2020',
    category: 'Safety'
  },
  {
    name: 'CE Marking',
    description: 'European Conformity',
    year: '2021',
    category: 'Standard'
  },
  {
    name: 'JAS Standard',
    description: 'Japanese Agricultural Standard',
    year: '2022',
    category: 'Quality'
  }
]

export default function Sertifikasi() {
  return (
    <section className="py-20 px-6 lg:px-8" style={{ backgroundColor: 'var(--neutral-white)' }}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Award className="h-8 w-8" style={{ color: 'var(--primary-gold)' }} />
          </div>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
          >
            Sertifikasi <span style={{ color: 'var(--primary-gold)' }}>Internasional</span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
          >
            Komitmen kami terhadap kualitas dan keberlanjutan dibuktikan dengan berbagai sertifikasi internasional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-xl border p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--neutral-white)',
                borderColor: 'var(--neutral-medium)',
              }}
            >
              {/* Badge Category */}
              <div className="absolute top-4 right-4">
                <div
                  className="rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ background: 'var(--gradient-gold)' }}
                >
                  {cert.category}
                </div>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div
                  className="inline-flex rounded-lg p-3"
                  style={{ backgroundColor: 'var(--primary-cream)' }}
                >
                  <CheckCircle2 className="h-8 w-8" style={{ color: 'var(--primary-gold)' }} />
                </div>
              </div>

              {/* Content */}
              <h3
                className="mb-2 text-2xl font-bold"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
              >
                {cert.name}
              </h3>

              <p
                className="mb-4 text-base"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
              >
                {cert.description}
              </p>

              <div
                className="text-sm font-semibold"
                style={{ color: 'var(--text-muted)' }}
              >
                Certified since {cert.year}
              </div>

              {/* Hover effect */}
              <div
                className="absolute bottom-0 left-0 h-1.5 w-0 transition-all duration-300 group-hover:w-full"
                style={{ background: 'var(--gradient-gold)' }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center p-8 rounded-2xl"
          style={{ background: 'var(--gradient-warm)' }}
        >
          <h3
            className="text-2xl font-bold mb-3"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
          >
            Ingin Mengetahui Lebih Lanjut?
          </h3>
          <p
            className="mb-6 text-base"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
          >
            Download katalog lengkap sertifikasi dan spesifikasi produk kami
          </p>
          <a
            href="/downloads/certifications.pdf"
            className="inline-block rounded-lg px-8 py-3 text-base font-semibold text-white transition-all hover:scale-105"
            style={{ background: 'var(--gradient-brown)' }}
          >
            Download Katalog Sertifikasi
          </a>
        </motion.div>
      </div>
    </section>
  )
}
