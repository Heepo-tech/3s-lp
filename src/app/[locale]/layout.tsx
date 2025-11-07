import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import { routing } from '@/i18n/routing'

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  // Await params in Next.js 15
  const { locale } = await params

  // Ensure valid locale
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  // Get messages for the current locale
  const messages = await getMessages({ locale })

  // Provide NextIntlClientProvider with messages and locale
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  )
}
