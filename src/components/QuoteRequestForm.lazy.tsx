'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef } from 'react'

import { useQuoteRequestModal } from '@/contexts/QuoteRequestModalContext'

// Import function for manual preloading
const QuoteRequestFormImport = () =>
  import(/* webpackPrefetch: true */ './QuoteRequestForm')

const QuoteRequestForm = dynamic(QuoteRequestFormImport, {
  ssr: false,
  loading: () => null,
})

// Singleton to prevent duplicate loads
let isPreloaded = false

// Export preload function for manual triggering (hover/touch)
export const preloadQuoteForm = () => {
  if (!isPreloaded) {
    isPreloaded = true
    QuoteRequestFormImport()
  }
}

export default function LazyQuoteRequestForm() {
  const { isOpen } = useQuoteRequestModal()
  const hasTriggeredFallback = useRef(false)

  // Aggressive fallback: prefetch after 2 seconds if not already preloaded
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isPreloaded && !hasTriggeredFallback.current) {
        hasTriggeredFallback.current = true

        // Use requestIdleCallback for optimal performance
        if ('requestIdleCallback' in window) {
          requestIdleCallback(() => {
            preloadQuoteForm()
          })
        } else {
          // Fallback for browsers without requestIdleCallback
          setTimeout(() => {
            preloadQuoteForm()
          }, 100)
        }
      }
    }, 2000) // 2 second delay for guaranteed instant loading

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return <QuoteRequestForm />
}
