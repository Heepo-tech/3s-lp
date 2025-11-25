'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

type Consent = {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<Consent | null>(null)

  useEffect(() => {
    // Check initial consent
    const checkConsent = () => {
      const savedConsent = localStorage.getItem('cookie_consent')
      if (savedConsent) {
        try {
          setConsent(JSON.parse(savedConsent))
        } catch {
          // console.error('Error parsing cookie consent:', e)
        }
      }
    }

    checkConsent()

    // Listen for updates
    window.addEventListener('cookie_consent_updated', checkConsent)

    return () => {
      window.removeEventListener('cookie_consent_updated', checkConsent)
    }
  }, [])

  if (!consent?.analytics) return null

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-7Q8K4P8CBK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-7Q8K4P8CBK');
        `}
      </Script>
    </>
  )
}
