import { redirect } from '@/i18n/routing'

export default function RootPage() {
  // Redirect to home page with default locale
  // The middleware will handle locale prefix automatically
  redirect({ href: '/', locale: 'id' })
}
