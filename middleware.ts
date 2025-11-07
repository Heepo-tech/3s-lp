import createMiddleware from 'next-intl/middleware'

import { routing } from './src/i18n/routing'

export default createMiddleware(routing)

export const config = {
  // Skip middleware for static files and API routes
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
