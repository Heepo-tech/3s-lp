'use client'

import { motion } from 'framer-motion'
import { Mail, FileText } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 px-6 lg:px-8 relative overflow-hidden" style={{ backgroundColor: 'var(--primary-dark-brown)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, var(--primary-gold) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-8 inline-flex rounded-full p-4"
            style={{ backgroundColor: 'rgba(254, 186, 23, 0.1)' }}
          >
            <FileText className="h-12 w-12" style={{ color: 'var(--primary-gold)' }} />
          </motion.div>

          {/* Headline */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
            style={{ fontFamily: 'var(--font-primary)' }}
          >
            Konsultasi Gratis dengan Tim Kami <span style={{ color: 'var(--primary-gold)' }}>Sekarang!</span>
          </h2>

          {/* Description */}
          <p
            className="text-lg md:text-xl mb-10 text-white/80 max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-secondary)' }}
          >
            Dapatkan solusi terbaik untuk kebutuhan plywood Anda. Tim ahli kami siap membantu
            dengan konsultasi gratis dan penawaran harga terbaik.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="mailto:info@3s-plywood.com"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="group flex items-center gap-3 rounded-lg px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:shadow-2xl hover:scale-105"
              style={{ background: 'var(--gradient-gold)' }}
            >
              <Mail className="h-5 w-5" />
              Hubungi Kami Sekarang
            </motion.a>

            <motion.a
              href="/quotation"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="group flex items-center gap-3 rounded-lg border-2 bg-white/10 backdrop-blur-sm px-8 py-4 text-base font-semibold text-white shadow-xl transition-all hover:bg-white/20 hover:shadow-2xl hover:scale-105"
              style={{ borderColor: 'var(--primary-gold)' }}
            >
              <FileText className="h-5 w-5" />
              Request Quotation
            </motion.a>
          </div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-white/70 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="font-semibold" style={{ color: 'var(--primary-gold)' }}>Email:</span>
              <span>info@3s-plywood.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold" style={{ color: 'var(--primary-gold)' }}>Phone:</span>
              <span>+62 21 1234 5678</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold" style={{ color: 'var(--primary-gold)' }}>WhatsApp:</span>
              <span>+62 812 3456 7890</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
