'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Shield, Leaf, Truck, Award, HeadphonesIcon } from 'lucide-react'

const keunggulanList = [
  {
    icon: Shield,
    title: 'Kualitas Terjamin',
    description: 'Setiap produk melalui kontrol kualitas ketat dengan standar internasional untuk memastikan hasil terbaik.'
  },
  {
    icon: Leaf,
    title: 'Ramah Lingkungan',
    description: 'Menggunakan kayu dari hutan berkelanjutan dengan sertifikasi FSC dan proses produksi eco-friendly.'
  },
  {
    icon: Award,
    title: 'Sertifikasi Internasional',
    description: 'Memiliki ISO 9001, FSC, dan sertifikasi standar internasional lainnya yang diakui global.'
  },
  {
    icon: Truck,
    title: 'Pengiriman Tepat Waktu',
    description: 'Sistem logistik terintegrasi untuk memastikan produk sampai tepat waktu ke seluruh Indonesia dan dunia.'
  },
  {
    icon: CheckCircle,
    title: 'Custom Order',
    description: 'Melayani pemesanan khusus sesuai spesifikasi dan kebutuhan proyek Anda dengan MOQ fleksibel.'
  },
  {
    icon: HeadphonesIcon,
    title: 'Layanan Konsultasi',
    description: 'Tim ahli kami siap membantu konsultasi produk dan solusi terbaik untuk proyek Anda.'
  }
]

export default function Keunggulan() {
  return (
    <section className="py-20 px-6 lg:px-8" style={{ background: 'var(--gradient-warm)' }}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
          >
            Mengapa Memilih <span style={{ color: 'var(--primary-gold)' }}>Kami?</span>
          </h2>
          <p
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
          >
            Keunggulan yang membuat kami menjadi pilihan utama para profesional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keunggulanList.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative p-8 rounded-2xl border bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                style={{ borderColor: 'var(--neutral-medium)' }}
              >
                <div className="mb-6 inline-flex rounded-xl p-4 transition-all duration-300"
                  style={{ backgroundColor: 'var(--primary-cream)' }}
                >
                  <Icon className="h-8 w-8" style={{ color: 'var(--primary-gold)' }} />
                </div>

                <h3
                  className="mb-3 text-xl font-bold"
                  style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
                >
                  {item.description}
                </p>

                <div
                  className="absolute bottom-0 left-0 h-1.5 w-0 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ background: 'var(--gradient-gold)' }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
