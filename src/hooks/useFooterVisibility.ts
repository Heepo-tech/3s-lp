'use client'
import { useState, useEffect } from 'react'

/**
 * Custom hook to detect when the footer is visible in the viewport
 * Uses scroll position calculation instead of IntersectionObserver to handle sticky positioning
 *
 * @param threshold - The percentage of footer visibility required to trigger (default: 0.7 = 70%)
 * @returns boolean - true when footer is visible, false otherwise
 */
export function useFooterVisibility(threshold: number = 0.7): boolean {
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useEffect(() => {
    const footer = document.getElementById('footer')
    if (!footer) return

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const clientHeight = window.innerHeight

      // Calculate how far user has scrolled (percentage)
      const scrollPercentage = (scrollTop + clientHeight) / scrollHeight

      // Get footer position
      const footerRect = footer.getBoundingClientRect()
      const footerTop = footerRect.top

      // Footer is considered visible when:
      // 1. User has scrolled at least 90% of the page (prevents false positive on page load)
      // 2. Footer top is within viewport (accounting for threshold)
      const isScrolledEnough = scrollPercentage >= 0.9
      const isFooterInView = footerTop < clientHeight * (1 - threshold)

      setIsFooterVisible(isScrolledEnough && isFooterInView)
    }

    // Initial check
    handleScroll()

    // Listen to scroll events with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return isFooterVisible
}
