'use client'

import { useEffect, useRef, useState } from 'react'

interface PageReadyWrapperProps {
  children: React.ReactNode
}

export default function PageReadyWrapper({ children }: PageReadyWrapperProps) {
  const [mounted, setMounted] = useState(false)
  const hasDispatchedRef = useRef(false)

  useEffect(() => {
    // Mark as mounted
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || hasDispatchedRef.current) return

    // Wait for critical components to be in DOM
    const checkCriticalComponents = () => {
      // Check if critical sections are mounted
      const header =
        document.querySelector('header') ||
        document.querySelector('[role="banner"]')
      const hero = document.querySelector('section') // First section is usually hero
      const mainContent =
        document.querySelector('main') ||
        document.querySelector('[role="main"]')

      // All critical elements present
      const criticalReady = header && hero

      if (criticalReady || mainContent) {
        // Wait for images in critical sections to load
        const images = Array.from(
          document.querySelectorAll('img[loading="eager"], img[priority]')
        )
        const imagePromises = images.map(img => {
          const image = img as HTMLImageElement
          if (image.complete) return Promise.resolve()
          return new Promise(resolve => {
            image.onload = () => resolve(true)
            image.onerror = () => resolve(true) // Resolve even on error
            // Timeout fallback
            setTimeout(() => resolve(true), 1000)
          })
        })

        // Wait for all critical images
        Promise.all(imagePromises).then(() => {
          // Extra delay to ensure paint is complete
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (!hasDispatchedRef.current) {
                hasDispatchedRef.current = true
                window.dispatchEvent(new CustomEvent('page-content-ready'))
              }
            })
          })
        })
      }
    }

    // Check immediately
    checkCriticalComponents()

    // Fallback: Force dispatch after timeout
    const fallbackTimer = setTimeout(() => {
      if (!hasDispatchedRef.current) {
        hasDispatchedRef.current = true
        window.dispatchEvent(new CustomEvent('page-content-ready'))
      }
    }, 3000) // 3 seconds max wait

    return () => clearTimeout(fallbackTimer)
  }, [mounted])

  return <>{children}</>
}
