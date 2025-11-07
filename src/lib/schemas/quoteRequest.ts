import { z } from 'zod'

export const quoteRequestSchema = z.object({
  fullName: z
    .string()
    .min(2, 'Nama minimal 2 karakter')
    .max(100, 'Nama maksimal 100 karakter'),
  email: z.string().email('Email tidak valid'),
  phone: z.string().optional(),
  companyName: z
    .string()
    .max(200, 'Nama perusahaan maksimal 200 karakter')
    .optional(),
  productInterest: z.string().min(1, 'Pilih jenis produk'),
  quantity: z.string().max(100, 'Kuantitas maksimal 100 karakter').optional(),
  message: z.string().max(1000, 'Pesan maksimal 1000 karakter').optional(),
})

export type QuoteRequestFormData = z.infer<typeof quoteRequestSchema>
