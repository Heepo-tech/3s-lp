'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { BarChart3, Cookie, Megaphone, Shield, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Consent = {
  essential: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [consent, setConsent] = useState<Consent>({
    essential: true,
    analytics: true,
    marketing: false,
  })

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookie_consent')
    if (!savedConsent) {
      // Delay showing banner slightly for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const saveConsent = (newConsent: Consent) => {
    localStorage.setItem('cookie_consent', JSON.stringify(newConsent))

    // Set cookie for server-side reading if needed
    document.cookie = `cookie_consent=${JSON.stringify(newConsent)}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`

    setIsVisible(false)

    // Reload to apply changes if needed, or just trigger an event
    window.dispatchEvent(new Event('cookie_consent_updated'))
  }

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
    })
  }

  const handleRejectNonEssential = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
    })
  }

  const handleSavePreferences = () => {
    saveConsent(consent)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 dark:bg-zinc-900 dark:ring-white/10">
            <div className="p-6">
              {!showDetails ? (
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-4 md:items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Cookie className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        We value your privacy
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                        We use cookies to enhance your browsing experience,
                        serve personalized ads or content, and analyze our
                        traffic. By clicking &quot;Accept All&quot;, you consent
                        to our use of cookies.{' '}
                        <Link
                          href="/privacy-policy"
                          className="font-medium text-primary hover:underline"
                        >
                          Read our Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                    <button
                      onClick={() => setShowDetails(true)}
                      className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-zinc-800"
                    >
                      Customize
                    </button>
                    <button
                      onClick={handleRejectNonEssential}
                      className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-zinc-700 dark:text-gray-200 dark:hover:bg-zinc-800"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                      style={{ backgroundColor: '#2D1404' }}
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-4 dark:border-zinc-800">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Cookie Preferences
                    </h3>
                    <button
                      onClick={() => setShowDetails(false)}
                      className="rounded-full p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-zinc-800"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {/* Essential */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-3">
                        <Shield className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Essential
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Required for the website to function properly.
                            Cannot be disabled.
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked
                        disabled
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                    </div>

                    {/* Analytics */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-3">
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Analytics
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Helps us understand how visitors interact with our
                            website.
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={consent.analytics}
                        onChange={e =>
                          setConsent({
                            ...consent,
                            analytics: e.target.checked,
                          })
                        }
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                    </div>

                    {/* Marketing */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-3">
                        <Megaphone className="h-5 w-5 text-purple-600" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Marketing
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Used to deliver relevant ads and measure ad
                            performance.
                          </p>
                        </div>
                      </div>
                      <input
                        type="checkbox"
                        checked={consent.marketing}
                        onChange={e =>
                          setConsent({
                            ...consent,
                            marketing: e.target.checked,
                          })
                        }
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 border-t border-gray-200 pt-4 dark:border-zinc-800">
                    <button
                      onClick={() => setShowDetails(false)}
                      className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-zinc-800"
                    >
                      Back
                    </button>
                    <button
                      onClick={handleSavePreferences}
                      className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                      style={{ backgroundColor: '#2D1404' }}
                    >
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
