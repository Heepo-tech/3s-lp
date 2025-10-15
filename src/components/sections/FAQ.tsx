'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Apakah plywood bisa custom ukuran?',
    answer: 'Ya, kami melayani pemesanan custom ukuran sesuai kebutuhan proyek Anda. Ukuran standar kami adalah 1220 x 2440 mm dan 1250 x 2500 mm, namun kami dapat memproduksi ukuran khusus dengan minimum order quantity (MOQ) tertentu. Silakan hubungi tim sales kami untuk diskusi lebih lanjut mengenai spesifikasi custom Anda.'
  },
  {
    question: 'Minimum order berapa?',
    answer: 'Minimum order quantity (MOQ) bervariasi tergantung jenis produk dan spesifikasi. Untuk produk standar, MOQ dimulai dari 1 kontainer 20 feet (sekitar 22-25m³). Untuk produk custom atau special order, MOQ mungkin lebih tinggi. Kami juga melayani pemesanan retail dalam jumlah lebih kecil dengan harga yang berbeda. Hubungi sales team kami untuk informasi MOQ spesifik produk yang Anda butuhkan.'
  },
  {
    question: 'Pengiriman ke luar kota/provinsi tersedia?',
    answer: 'Ya, kami melayani pengiriman ke seluruh Indonesia maupun export ke berbagai negara. Kami memiliki sistem logistik terintegrasi yang bekerjasama dengan berbagai perusahaan ekspedisi terpercaya untuk memastikan produk sampai dengan aman dan tepat waktu. Biaya pengiriman akan dihitung berdasarkan lokasi tujuan dan volume pemesanan. Kami juga menyediakan opsi FOB (Free on Board) untuk pemesanan export.'
  },
  {
    question: 'Apa saja metode pembayaran yang diterima?',
    answer: 'Kami menerima berbagai metode pembayaran untuk kemudahan transaksi Anda: Transfer Bank (BCA, Mandiri, BNI), Letter of Credit (L/C) untuk transaksi export, dan Cash/Tunai untuk pembelian langsung di lokasi. Untuk pelanggan regular, kami juga menyediakan opsi payment term dengan syarat dan ketentuan yang berlaku. Payment term biasanya berupa DP 30-50% dan pelunasan sebelum atau saat pengiriman, tergantung kesepakatan.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 px-6 lg:px-8" style={{ backgroundColor: 'var(--primary-cream)' }}>
      <div className="mx-auto max-w-4xl">
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
            Pertanyaan <span style={{ color: 'var(--primary-gold)' }}>yang Sering Diajukan</span>
          </h2>
          <p
            className="text-lg md:text-xl"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
          >
            Temukan jawaban untuk pertanyaan umum tentang produk dan layanan kami
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="overflow-hidden rounded-xl border bg-white transition-all duration-300"
              style={{
                borderColor: openIndex === index ? 'var(--primary-gold)' : 'var(--neutral-medium)',
                boxShadow: openIndex === index ? 'var(--shadow-gold)' : 'var(--shadow-soft)',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-opacity-50"
                style={{
                  backgroundColor: openIndex === index ? 'var(--primary-cream)' : 'transparent',
                }}
              >
                <span
                  className="text-lg font-semibold pr-4"
                  style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-primary)' }}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: 'var(--primary-gold)' }}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 pb-6 pt-2 text-base leading-relaxed"
                      style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
                    >
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center p-6 rounded-xl border"
          style={{
            backgroundColor: 'var(--neutral-white)',
            borderColor: 'var(--neutral-medium)',
          }}
        >
          <p
            className="text-base mb-2"
            style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-secondary)' }}
          >
            Masih ada pertanyaan?
          </p>
          <a
            href="mailto:info@3s-plywood.com"
            className="font-semibold hover:opacity-80 transition-opacity"
            style={{ color: 'var(--primary-gold)' }}
          >
            Hubungi tim kami →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
