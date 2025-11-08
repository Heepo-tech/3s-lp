'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Plus, X, Mail, MessageCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function FAQ() {
  const t = useTranslations()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      category: t('faqSection.faqs.customSize.category'),
      question: t('faqSection.faqs.customSize.question'),
      answer: t('faqSection.faqs.customSize.answer'),
    },
    {
      category: t('faqSection.faqs.minimumOrder.category'),
      question: t('faqSection.faqs.minimumOrder.question'),
      answer: t('faqSection.faqs.minimumOrder.answer'),
    },
    {
      category: t('faqSection.faqs.shipping.category'),
      question: t('faqSection.faqs.shipping.question'),
      answer: t('faqSection.faqs.shipping.answer'),
    },
    {
      category: t('faqSection.faqs.payment.category'),
      question: t('faqSection.faqs.payment.question'),
      answer: t('faqSection.faqs.payment.answer'),
    },
  ]

  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: 'var(--primary-cream)' }}
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-primary)',
            }}
          >
            {t('faqSection.title')}
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl px-4 sm:px-0 text-center"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-secondary)',
            }}
          >
            {t('faqSection.subtitle')}
          </p>
        </motion.div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: 'var(--primary-cream)' }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="transition-all duration-300"
              style={{
                borderBottom:
                  index !== faqs.length - 1
                    ? '1px solid rgba(82, 36, 5, 0.1)'
                    : 'none',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between py-4 sm:py-6 px-4 sm:px-6 text-left transition-all duration-300"
                style={{
                  backgroundColor: 'transparent',
                  outline: 'none',
                  border: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor =
                    'rgba(248, 247, 243, 0.5)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                <span
                  className="text-base sm:text-lg font-semibold pr-3 sm:pr-4"
                  style={{
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-primary)',
                  }}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  {openIndex === index ? (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X
                        className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"
                        style={{ color: 'var(--primary-brown)' }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Plus
                        className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0"
                        style={{ color: 'var(--primary-brown)' }}
                      />
                    </motion.div>
                  )}
                </motion.div>
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
                      className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 text-sm sm:text-base leading-relaxed text-justified"
                      style={{
                        color: 'var(--text-secondary)',
                        fontFamily: 'var(--font-secondary)',
                      }}
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
          className="mt-8 sm:mt-12 text-center p-6 sm:p-8 rounded-2xl border-2 relative overflow-hidden"
          style={{
            background: 'var(--gradient-warm)',
            borderColor: 'var(--primary-brown)',
          }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 20% 50%, var(--primary-brown) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
            className="relative mb-4 inline-flex rounded-full p-3"
            style={{ backgroundColor: 'rgba(82, 36, 5, 0.15)' }}
          >
            <MessageCircle
              className="h-6 w-6 sm:h-8 sm:w-8"
              style={{ color: 'var(--primary-brown)' }}
            />
          </motion.div>

          {/* Text */}
          <p
            className="relative text-base sm:text-lg font-semibold mb-2"
            style={{
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-primary)',
            }}
          >
            {t('faqSection.ctaTitle')}
          </p>
          <p
            className="relative text-sm sm:text-base mb-4 px-4 sm:px-0 text-center"
            style={{
              color: 'var(--text-secondary)',
              fontFamily: 'var(--font-secondary)',
            }}
          >
            {t('faqSection.ctaDescription')}
          </p>

          {/* Button */}
          <a
            href="mailto:info@3s-plywood.com?subject=Pertanyaan tentang Produk Plywood"
            className="btn-primary btn-icon relative"
          >
            <Mail className="h-5 w-5" />
            {t('buttons.contactTeam')}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
