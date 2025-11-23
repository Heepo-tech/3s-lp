'use client'

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
  AnimationPlaybackControls,
} from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [contentReady, setContentReady] = useState(false)
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.round(latest))
  const [displayNumber, setDisplayNumber] = useState(0)
  const animationRef = useRef<AnimationPlaybackControls | null>(null)
  const hasLoadedRef = useRef(false)

  useEffect(() => {
    // Sync motion value to state for rendering
    const unsubscribe = rounded.on('change', v => {
      setDisplayNumber(v)
    })

    // Prevent scrolling during loading
    document.body.style.overflow = 'hidden'

    // Multi-stage progressive loading animation
    const runProgressiveAnimation = () => {
      // Stage 1: 0 -> 60 (Slow - simulating resource download)
      animationRef.current = animate(count, 60, {
        duration: 5,
        ease: 'easeOut',
        onComplete: () => {
          if (hasLoadedRef.current) {
            // If already loaded, skip to finalization
            finalizeLoading()
            return
          }

          // Stage 2: 60 -> 85 (Medium - simulating parsing)
          animationRef.current = animate(count, 85, {
            duration: 3,
            ease: 'easeInOut',
            onComplete: () => {
              if (hasLoadedRef.current) {
                finalizeLoading()
                return
              }

              // Stage 3: 85 -> 95 (Fast - simulating hydration)
              animationRef.current = animate(count, 95, {
                duration: 2,
                ease: 'easeIn',
                onComplete: () => {
                  // Hold at 95% waiting for actual load
                  if (!hasLoadedRef.current) {
                    // Safety: Force complete after timeout
                    setTimeout(() => {
                      if (!hasLoadedRef.current) {
                        finalizeLoading()
                      }
                    }, 5000)
                  }
                },
              })
            },
          })
        },
      })
    }

    const finalizeLoading = () => {
      const currentValue = count.get()

      // Smart completion based on current progress
      if (currentValue < 60) {
        // Fast forward to 95, then smooth to 100
        animationRef.current = animate(count, 95, {
          duration: 1.2,
          ease: 'easeOut',
          onComplete: () => {
            animate(count, 100, {
              duration: 0.5,
              ease: 'easeInOut',
              onComplete: completeLoading,
            })
          },
        })
      } else if (currentValue < 95) {
        // Smooth progression to 100
        const duration = (100 - currentValue) * 0.03
        animate(count, 100, {
          duration: Math.max(0.5, duration),
          ease: 'easeInOut',
          onComplete: completeLoading,
        })
      } else {
        // Already near completion
        animate(count, 100, {
          duration: 0.4,
          ease: 'easeOut',
          onComplete: completeLoading,
        })
      }
    }

    const completeLoading = () => {
      // Mark content as ready
      setContentReady(true)

      // Wait a moment at 100% for user to register completion
      // Then ensure content is visible before starting exit animation
      setTimeout(() => {
        // Use requestIdleCallback if available, otherwise requestAnimationFrame
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(
            () => {
              requestAnimationFrame(() => {
                setIsLoading(false)
              })
            },
            { timeout: 500 }
          )
        } else {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              setIsLoading(false)
            })
          })
        }
      }, 600) // Increased from 400ms to 600ms for better visibility
    }

    const handleLoad = () => {
      hasLoadedRef.current = true

      // Stop current animation and finalize
      if (animationRef.current) {
        animationRef.current.stop()
      }

      finalizeLoading()
    }

    const handleContentReady = () => {
      // Additional signal that React content is mounted
      if (hasLoadedRef.current) {
        // Both window loaded AND content ready - safe to complete
        setContentReady(true)
      }
    }

    // Start progressive animation
    runProgressiveAnimation()

    // Listen for load event
    if (document.readyState === 'complete') {
      // Already loaded
      setTimeout(() => handleLoad(), 100)
    } else {
      window.addEventListener('load', handleLoad)
    }

    // Listen for custom page-content-ready event
    window.addEventListener('page-content-ready', handleContentReady)

    // Fallback: Force complete after 15 seconds
    const fallbackTimeout = setTimeout(() => {
      if (!hasLoadedRef.current) {
        // eslint-disable-next-line no-console
        console.warn('[PageLoader] Fallback timeout triggered')
        handleLoad()
      }
    }, 15000)

    return () => {
      unsubscribe()
      if (animationRef.current) {
        animationRef.current.stop()
      }
      window.removeEventListener('load', handleLoad)
      window.removeEventListener('page-content-ready', handleContentReady)
      clearTimeout(fallbackTimeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        document.body.style.overflow = ''
      }}
    >
      {isLoading && (
        <motion.div
          key="page-loader"
          className="fixed inset-0 z-9999 flex items-center justify-center bg-[#F9F7F2]"
          style={{
            willChange: 'transform',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translateZ(0)', // Force GPU acceleration
            WebkitTransform: 'translateZ(0)',
          }}
          initial={{ x: 0 }}
          exit={{
            x: '-100%',
            transition: {
              duration: 1.0, // Increased from 0.9 to 1.0 for smoother visibility
              ease: [0.76, 0, 0.24, 1],
              delay: 0, // No delay, start immediately
            },
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <motion.div
              className="text-8xl sm:text-9xl font-medium tracking-tighter tabular-nums text-[#4A3427]"
              animate={contentReady ? { scale: [1, 1.05, 1] } : {}}
              transition={{ duration: 0.3 }}
            >
              {displayNumber}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
