'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Send, Loader2, CheckCircle, Mail, Phone } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import toast from 'react-hot-toast'

import { ProductCombobox } from '@/components/ProductCombobox'
import { CONTACT_INFO, EMAIL_SUBJECTS } from '@/config/contact'
import {
  quoteRequestSchema,
  type QuoteRequestFormData,
} from '@/lib/schemas/quoteRequest'

export default function QuoteRequestSection() {
  const t = useTranslations()
  const locale = useLocale()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteRequestFormData>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      productInterest: '',
    },
  })

  const onSubmit = async (data: QuoteRequestFormData) => {
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/quote-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Gagal mengirim permintaan')
      }

      toast.success(
        'Permintaan penawaran berhasil dikirim! Kami akan menghubungi Anda segera.',
        {
          duration: 5000,
          position: 'top-center',
        }
      )

      reset()
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : 'Terjadi kesalahan. Silakan coba lagi.',
        {
          duration: 4000,
          position: 'top-center',
        }
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="quote-request-form"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20"
      style={{ backgroundColor: 'var(--neutral-white)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-primary)',
              color: 'var(--primary-dark-brown)',
            }}
          >
            {t('quoteSection.title')}
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-secondary)',
              color: 'var(--text-secondary)',
            }}
          >
            {t('quoteSection.subtitle')}
          </p>
        </motion.div>

        {/* Side-by-Side Layout (Desktop) / Stacked Layout (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Form Section - Left/Top - 60% */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-3"
          >
            <div
              className="rounded-2xl p-6 sm:p-8 border"
              style={{
                backgroundColor: 'var(--neutral-white)',
                borderColor: 'var(--neutral-medium)',
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {t('quoteSection.form.fullName')}{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('fullName')}
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all"
                    style={{
                      borderColor: errors.fullName
                        ? '#ef4444'
                        : 'var(--neutral-medium)',
                    }}
                    placeholder={t('quoteSection.form.fullNamePlaceholder')}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-sm text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {t('quoteSection.form.email')}{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all"
                    style={{
                      borderColor: errors.email
                        ? '#ef4444'
                        : 'var(--neutral-medium)',
                    }}
                    placeholder={t('quoteSection.form.emailPlaceholder')}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone & Company Name - Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {t('quoteSection.form.phone')}
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all"
                      style={{ borderColor: 'var(--neutral-medium)' }}
                      placeholder={t('quoteSection.form.phonePlaceholder')}
                    />
                  </div>

                  {/* Company Name */}
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-semibold mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {t('quoteSection.form.companyName')}
                    </label>
                    <input
                      {...register('companyName')}
                      type="text"
                      id="companyName"
                      className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all"
                      style={{ borderColor: 'var(--neutral-medium)' }}
                      placeholder={t(
                        'quoteSection.form.companyNamePlaceholder'
                      )}
                    />
                  </div>
                </div>

                {/* Product Type */}
                <div>
                  <label
                    htmlFor="productInterest"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {t('quoteSection.form.productInterest')}{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <Controller
                    name="productInterest"
                    control={control}
                    render={({ field }) => (
                      <ProductCombobox
                        value={field.value}
                        onChange={field.onChange}
                        error={!!errors.productInterest}
                      />
                    )}
                  />
                  {errors.productInterest && (
                    <p className="mt-1.5 text-sm text-red-500">
                      {errors.productInterest.message}
                    </p>
                  )}
                </div>

                {/* Quantity */}
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {t('quoteSection.form.quantity')}
                  </label>
                  <input
                    {...register('quantity')}
                    type="text"
                    id="quantity"
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all"
                    style={{ borderColor: 'var(--neutral-medium)' }}
                    placeholder={t('quoteSection.form.quantityPlaceholder')}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {t('quoteSection.form.message')}
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all resize-none"
                    style={{ borderColor: 'var(--neutral-medium)' }}
                    placeholder={t('quoteSection.form.messagePlaceholder')}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-full font-semibold text-base sm:text-lg transition-all flex items-center justify-center gap-3 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    backgroundColor: 'var(--primary-brown)',
                    color: 'var(--neutral-white)',
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      {t('quoteSection.form.submitting')}
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      {t('quoteSection.form.submitButton')}
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Info Section - Right/Bottom - 40% */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:col-span-2"
          >
            <div
              className="rounded-2xl p-6 sm:p-8 h-full relative overflow-hidden"
              style={{ backgroundColor: 'var(--primary-cream)' }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 30% 50%, var(--primary-gold) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3
                  className="text-xl sm:text-2xl md:text-3xl font-bold mb-6"
                  style={{
                    fontFamily: 'var(--font-primary)',
                    color: 'var(--primary-dark-brown)',
                  }}
                >
                  {t('quoteSection.infoTitle')}
                </h3>

                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                  {[
                    t('quoteSection.benefits.consultation'),
                    t('quoteSection.benefits.response'),
                    t('quoteSection.benefits.pricing'),
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle
                        className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0 mt-0.5"
                        style={{ color: 'var(--primary-gold)' }}
                      />
                      <span
                        className="text-sm sm:text-base leading-relaxed"
                        style={{
                          fontFamily: 'var(--font-secondary)',
                          color: 'var(--primary-brown)',
                        }}
                      >
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div
                  className="h-px my-6"
                  style={{ backgroundColor: 'var(--neutral-medium)' }}
                />

                {/* Contact Info */}
                <div>
                  <p
                    className="text-sm sm:text-base font-semibold mb-4"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {t('quoteSection.contactTitle')}
                  </p>

                  <div className="space-y-3">
                    {/* Email Button */}
                    <a
                      href={`mailto:${CONTACT_INFO.email}?subject=${EMAIL_SUBJECTS.consultation[locale as keyof typeof EMAIL_SUBJECTS.consultation] || EMAIL_SUBJECTS.consultation.id}`}
                      className="flex items-center gap-3 p-3 rounded-lg transition-all hover:opacity-80"
                      style={{
                        backgroundColor: 'rgba(116, 81, 45, 0.05)',
                      }}
                    >
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: 'var(--primary-brown)' }}
                      >
                        <Mail
                          className="h-4 w-4"
                          style={{ color: 'var(--neutral-white)' }}
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <p
                          className="text-xs font-medium mb-0.5"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {t('quoteSection.emailLabel')}
                        </p>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: 'var(--primary-brown)' }}
                        >
                          {CONTACT_INFO.email}
                        </p>
                      </div>
                    </a>

                    {/* Phone Button */}
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="flex items-center gap-3 p-3 rounded-lg transition-all hover:opacity-80"
                      style={{
                        backgroundColor: 'rgba(116, 81, 45, 0.05)',
                      }}
                    >
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: 'var(--primary-brown)' }}
                      >
                        <Phone
                          className="h-4 w-4"
                          style={{ color: 'var(--neutral-white)' }}
                        />
                      </div>
                      <div className="flex-1 text-left">
                        <p
                          className="text-xs font-medium mb-0.5"
                          style={{ color: 'var(--text-muted)' }}
                        >
                          {t('quoteSection.phoneLabel')}
                        </p>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: 'var(--primary-brown)' }}
                        >
                          {CONTACT_INFO.phoneDisplay}
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
