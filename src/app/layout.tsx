import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

import LazyQuoteRequestForm from '@/components/QuoteRequestForm.lazy'
import { QuoteRequestModalProvider } from '@/contexts/QuoteRequestModalContext'

import './globals.css'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default:
      'PT. Sekawan Sahabat Sejati - Plywood Premium Berkualitas Internasional',
    template: '%s | PT. Sekawan Sahabat Sejati',
  },
  description:
    'PT. Sekawan Sahabat Sejati adalah produsen plywood premium dengan sertifikasi internasional. Kami menghadirkan plywood kuat, presisi, dan ramah lingkungan untuk pasar lokal dan internasional dengan pengalaman bertahun-tahun.',
  keywords: [
    'Plywood',
    'Kayu Lapis',
    'Plywood Premium',
    'Plywood Indonesia',
    'Produsen Plywood',
    'Sertifikasi Internasional',
    'Plywood Berkualitas',
    'Export Plywood',
    'PT Sekawan Sahabat Sejati',
    '3S Plywood',
    'Plywood Ramah Lingkungan',
    'Custom Plywood',
    'Supplier Plywood',
    'Distributor Plywood',
    'Plywood Presisi',
  ],
  authors: [
    {
      name: 'PT. Sekawan Sahabat Sejati',
      url: 'https://www.3s-plywood.com',
    },
  ],
  creator: 'PT. Sekawan Sahabat Sejati',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: process.env.NEXT_PUBLIC_APP_URL || 'https://www.3s-plywood.com',
    title:
      'PT. Sekawan Sahabat Sejati - Plywood Premium Bersertifikat Internasional',
    description:
      'Produsen plywood premium dengan sertifikasi internasional. Plywood kuat, presisi, dan ramah lingkungan untuk proyek Anda di pasar lokal dan internasional.',
    siteName: 'PT. Sekawan Sahabat Sejati',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PT. Sekawan Sahabat Sejati - Premium Plywood Manufacturer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT. Sekawan Sahabat Sejati - Plywood Premium',
    description:
      'Produsen plywood premium bersertifikat internasional. Plywood kuat, presisi, dan ramah lingkungan untuk pasar lokal & internasional.',
    images: ['/og-image.jpg'],
    creator: '@3SPlywood',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/Logo.PNG', sizes: '32x32', type: 'image/png' },
      { url: '/Logo.PNG', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/Logo.PNG', sizes: '180x180', type: 'image/png' }],
    other: [
      {
        rel: 'mask-icon',
        url: '/Logo.PNG',
      },
    ],
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${montserrat.variable} ${openSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <QuoteRequestModalProvider>
          {children}
          <LazyQuoteRequestForm />
          <Toaster />
        </QuoteRequestModalProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
