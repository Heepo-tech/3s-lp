'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { X, Send, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { useQuoteRequestModal } from '@/contexts/QuoteRequestModalContext'
import {
  quoteRequestSchema,
  type QuoteRequestFormData,
} from '@/lib/schemas/quoteRequest'

// Move outside component to avoid re-creation on every render
const PRODUCT_OPTIONS = [
  { value: '', label: 'Pilih Jenis Produk' },
  { value: 'Plywood Standar', label: 'Plywood Standar' },
  { value: 'Plywood Marine', label: 'Plywood Marine' },
  { value: 'Plywood Film Faced', label: 'Plywood Film Faced' },
  { value: 'Plywood Decorative', label: 'Plywood Decorative' },
] as const

export default function QuoteRequestForm() {
  const { isOpen, closeModal } = useQuoteRequestModal()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<QuoteRequestFormData>({
    resolver: zodResolver(quoteRequestSchema),
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
      closeModal()
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
    <Dialog.Root open={isOpen} onOpenChange={closeModal}>
      <Dialog.Portal>
        <LazyMotion features={domAnimation}>
          <Dialog.Overlay asChild>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="fixed inset-0 bg-black/60 z-50"
            />
          </Dialog.Overlay>

          <Dialog.Content asChild>
            <m.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.1, ease: 'easeOut' }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl p-6 sm:p-8"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <Dialog.Title
                    className="text-2xl sm:text-3xl font-bold"
                    style={{
                      fontFamily: 'var(--font-primary)',
                      color: 'var(--primary-dark-brown)',
                    }}
                  >
                    Ajukan Permintaan Penawaran
                  </Dialog.Title>
                  <Dialog.Description
                    className="mt-2 text-sm sm:text-base text-justified"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    Isi formulir di bawah ini dan tim kami akan menghubungi Anda
                    dalam waktu 1x24 jam.
                  </Dialog.Description>
                </div>
                <Dialog.Close asChild>
                  <button
                    className="rounded-lg p-2 hover:bg-gray-100 transition-colors"
                    aria-label="Close"
                  >
                    <X
                      className="h-5 w-5"
                      style={{ color: 'var(--text-secondary)' }}
                    />
                  </button>
                </Dialog.Close>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Nama Lengkap */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('fullName')}
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-3 rounded-lg border-[0.5px] focus:outline-none focus:ring-1 focus:ring-primary-brown transition-all"
                    style={{
                      borderColor: errors.fullName
                        ? '#ef4444'
                        : 'var(--neutral-medium)',
                    }}
                    placeholder="Masukkan nama lengkap Anda"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border-[0.5px] focus:outline-none focus:ring-1 transition-all"
                    style={{
                      borderColor: errors.email
                        ? '#ef4444'
                        : 'var(--neutral-medium)',
                    }}
                    placeholder="nama@perusahaan.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone & Company Name - Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nomor Telepon */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Nomor Telepon
                    </label>
                    <input
                      {...register('phone')}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border-[0.5px] focus:outline-none focus:ring-1 transition-all"
                      style={{ borderColor: 'var(--neutral-medium)' }}
                      placeholder="+62 xxx xxxx xxxx"
                    />
                  </div>

                  {/* Nama Perusahaan */}
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium mb-2"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      Nama Perusahaan
                    </label>
                    <input
                      {...register('companyName')}
                      type="text"
                      id="companyName"
                      className="w-full px-4 py-3 rounded-lg border-[0.5px] focus:outline-none focus:ring-1 transition-all"
                      style={{ borderColor: 'var(--neutral-medium)' }}
                      placeholder="PT. Nama Perusahaan"
                    />
                  </div>
                </div>

                {/* Jenis Produk */}
                <div>
                  <label
                    htmlFor="productInterest"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Jenis Produk <span className="text-red-500">*</span>
                  </label>
                  <select
                    {...register('productInterest')}
                    id="productInterest"
                    className="w-full px-4 py-3 rounded-lg border-[0.5px] focus:outline-none focus:ring-1 transition-all"
                    style={{
                      borderColor: errors.productInterest
                        ? '#ef4444'
                        : 'var(--neutral-medium)',
                    }}
                  >
                    {PRODUCT_OPTIONS.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.productInterest && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.productInterest.message}
                    </p>
                  )}
                </div>

                {/* Kuantitas */}
                <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Kuantitas/Volume
                  </label>
                  <input
                    {...register('quantity')}
                    type="text"
                    id="quantity"
                    className="w-full px-4 py-3 rounded-lg border-[0.5px] focus:outline-none focus:ring-1 transition-all"
                    style={{ borderColor: 'var(--neutral-medium)' }}
                    placeholder="Contoh: 100 lembar, 50 m³"
                  />
                </div>

                {/* Pesan */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    Pesan/Kebutuhan Khusus
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-[0.5px] focus:outline-none focus:ring-1 transition-all resize-none"
                    style={{ borderColor: 'var(--neutral-medium)' }}
                    placeholder="Jelaskan kebutuhan spesifik Anda..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="flex-1 px-6 py-3 rounded-full font-medium transition-all border"
                    style={{
                      borderColor: 'var(--neutral-medium)',
                      color: 'var(--text-secondary)',
                    }}
                    disabled={isSubmitting}
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 rounded-full font-medium transition-all border flex items-center justify-center gap-2"
                    style={{
                      borderColor: 'var(--primary-brown)',
                      backgroundColor: 'var(--primary-brown)',
                      color: 'var(--neutral-white)',
                    }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Kirim Permintaan
                      </>
                    )}
                  </button>
                </div>
              </form>
            </m.div>
          </Dialog.Content>
        </LazyMotion>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
