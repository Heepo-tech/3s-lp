// Contact information constants
// Centralized configuration for easier maintenance and localization

export const CONTACT_INFO = {
  email: 'info@3s-plywood.com',
  phone: '+622112345678',
  phoneDisplay: '+62 21 1234 5678',
} as const

export const EMAIL_SUBJECTS = {
  consultation: {
    id: 'Konsultasi Rekomendasi Produk',
    en: 'Product Consultation Request',
  },
  quote: {
    id: 'Permintaan Penawaran',
    en: 'Quotation Request',
  },
  general: {
    id: 'Pertanyaan Umum',
    en: 'General Inquiry',
  },
} as const
