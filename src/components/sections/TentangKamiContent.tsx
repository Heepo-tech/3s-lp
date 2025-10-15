'use client'

import { motion } from 'framer-motion'
import SimpleMarquee from '@/components/fancy/blocks/simple-marquee'
import { Users, Award, Target, Heart } from 'lucide-react'
import Image from 'next/image'

const achievements = [
  { year: '1998', title: 'Berdiri sebagai produsen plywood' },
  { year: '2005', title: 'Ekspansi pabrik dan sertifikasi ISO 9001' },
  { year: '2010', title: 'Menembus pasar export ke 20 negara' },
  { year: '2015', title: 'Sertifikasi FSC dan CARB P2' },
  { year: '2020', title: 'Kapasitas produksi mencapai 100K m³/tahun' },
  { year: '2023', title: 'Melayani lebih dari 50 negara di seluruh dunia' },
]

const values = [
  {
    icon: Users,
    title: 'Integritas',
    description: 'Menjalankan bisnis dengan transparansi dan kejujuran dalam setiap aspek operasional kami.'
  },
  {
    icon: Award,
    title: 'Kualitas',
    description: 'Komitmen terhadap standar kualitas tertinggi dalam setiap produk yang kami hasilkan.'
  },
  {
    icon: Target,
    title: 'Inovasi',
    description: 'Terus berinovasi untuk menghadirkan solusi terbaik dan teknologi terkini di industri plywood.'
  },
  {
    icon: Heart,
    title: 'Keberlanjutan',
    description: 'Peduli terhadap lingkungan dengan praktik bisnis berkelanjutan dan ramah lingkungan.'
  }
]

export default function TentangKamiContent() {
  const marqueeItems = achievements.map((achievement, index) => (
    <div
      key={index}
      className="mx-8 flex flex-col items-center justify-center rounded-xl border p-8 min-w-[300px]"
      style={{
        backgroundColor: 'var(--neutral-white)',
        borderColor: 'var(--neutral-medium)',
      }}
    >
      <div
        className="mb-3 text-4xl font-bold"
        style={{ color: 'var(--primary-gold)', fontFamily: 'var(--font-primary)' }}
      >
        {achievement.year}
      </div>
      <div
        className="text-center text-sm font-medium"
        style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
      >
        {achievement.title}
      </div>
    </div>
  ))

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-6 lg:px-8 overflow-hidden" style={{ backgroundColor: 'var(--primary-dark-brown)' }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, var(--primary-gold) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              style={{ fontFamily: 'var(--font-primary)' }}
            >
              Tentang <span style={{ color: 'var(--primary-gold)' }}>PT. Sekawan Sahabat Sejati</span>
            </h1>
            <p
              className="text-lg md:text-xl text-white/80 leading-relaxed"
              style={{ fontFamily: 'var(--font-secondary)' }}
            >
              Lebih dari 25 tahun menjadi mitra terpercaya dalam industri plywood premium
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perjalanan Kami - Marquee Section */}
      <section className="py-20 px-6 lg:px-8" style={{ backgroundColor: 'var(--primary-cream)' }}>
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
            >
              Perjalanan <span style={{ color: 'var(--primary-gold)' }}>Kami</span>
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
            >
              Milestone penting dalam sejarah perusahaan kami
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <SimpleMarquee
              baseVelocity={-1.5}
              direction="left"
              slowdownOnHover={true}
            >
              {marqueeItems}
            </SimpleMarquee>
          </motion.div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="py-20 px-6 lg:px-8" style={{ backgroundColor: 'var(--neutral-white)' }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 border"
              style={{
                backgroundColor: 'var(--primary-cream)',
                borderColor: 'var(--neutral-medium)',
              }}
            >
              <h3
                className="text-3xl font-bold mb-6"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
              >
                Visi <span style={{ color: 'var(--primary-gold)' }}>Kami</span>
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
              >
                Menjadi produsen plywood terdepan di Asia Tenggara yang diakui secara internasional atas komitmen terhadap kualitas, inovasi, dan keberlanjutan lingkungan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 border"
              style={{
                backgroundColor: 'var(--primary-cream)',
                borderColor: 'var(--neutral-medium)',
              }}
            >
              <h3
                className="text-3xl font-bold mb-6"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
              >
                Misi <span style={{ color: 'var(--primary-gold)' }}>Kami</span>
              </h3>
              <ul className="space-y-3 text-base leading-relaxed" style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--primary-gold)' }}>•</span>
                  <span>Menghasilkan produk plywood berkualitas tinggi dengan standar internasional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--primary-gold)' }}>•</span>
                  <span>Memberikan solusi terbaik untuk kebutuhan industri dan konstruksi</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--primary-gold)' }}>•</span>
                  <span>Menjalankan praktik bisnis berkelanjutan yang ramah lingkungan</span>
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: 'var(--primary-gold)' }}>•</span>
                  <span>Memberdayakan karyawan dan masyarakat sekitar</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nilai-nilai Kami */}
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
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
            >
              Nilai-nilai <span style={{ color: 'var(--primary-gold)' }}>Kami</span>
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
            >
              Prinsip-prinsip yang menjadi fondasi kesuksesan kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center p-6 rounded-xl border bg-white"
                  style={{ borderColor: 'var(--neutral-medium)' }}
                >
                  <div
                    className="mb-4 inline-flex rounded-xl p-4"
                    style={{ backgroundColor: 'var(--primary-cream)' }}
                  >
                    <Icon className="h-8 w-8" style={{ color: 'var(--primary-gold)' }} />
                  </div>
                  <h3
                    className="mb-3 text-xl font-bold"
                    style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
                  >
                    {value.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
                  >
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tim & Fasilitas */}
      <section className="py-20 px-6 lg:px-8" style={{ backgroundColor: 'var(--primary-cream)' }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
              >
                Tim Profesional & Fasilitas <span style={{ color: 'var(--primary-gold)' }}>Modern</span>
              </h2>
              <p
                className="text-lg leading-relaxed mb-6"
                style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
              >
                Didukung oleh lebih dari 500 karyawan terampil dan fasilitas produksi berteknologi tinggi seluas 10 hektar. Kami memiliki mesin-mesin modern dari Jerman dan Jepang untuk menghasilkan plywood dengan presisi tinggi.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--primary-dark-brown)', fontFamily: 'var(--font-primary)' }}>500+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Karyawan Terampil</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--primary-dark-brown)', fontFamily: 'var(--font-primary)' }}>10Ha</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Luas Pabrik</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
            >
              <div className="aspect-video rounded-2xl flex items-center justify-center text-white text-2xl font-bold"
                style={{ background: 'var(--gradient-brown)' }}
              >
                [Factory Image/Video Placeholder]
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
