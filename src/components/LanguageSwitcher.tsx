'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Globe, ChevronDown } from 'lucide-react'
import { useLocale } from 'next-intl'
import { useState, useEffect, useRef, startTransition } from 'react'

import { useRouter } from '@/i18n/navigation'

interface LanguageSwitcherProps {
  mobile?: boolean
}

export default function LanguageSwitcher({
  mobile = false,
}: LanguageSwitcherProps) {
  const [mounted, setMounted] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Get current locale from next-intl
  const currentLocale = useLocale()
  const router = useRouter()

  // Client-side only rendering
  useEffect(() => {
    setMounted(true)
  }, [])

  // Close dropdown when clicking outside
  // MOVED BEFORE EARLY RETURN - All hooks must be called unconditionally
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownOpen])

  // Don't render on server - MOVED AFTER ALL HOOKS
  if (!mounted) {
    return null
  }

  const languages = [
    { code: 'id' as const, label: 'Indonesia', flag: '🇮🇩' },
    { code: 'en' as const, label: 'English', flag: '🇬🇧' },
  ]

  const currentLanguage = languages.find(lang => lang.code === currentLocale)

  // FUNCTIONAL locale switching with next-intl navigation
  const switchLocale = (newLocale: 'id' | 'en') => {
    // Prevent switching to the same locale
    if (newLocale === currentLocale) {
      setDropdownOpen(false)
      return
    }

    // Prevent multiple rapid switches
    if (isTransitioning) {
      return
    }

    setDropdownOpen(false)
    setIsTransitioning(true)

    // Use startTransition for proper React state handling
    startTransition(() => {
      // Always use root path for locale switching to avoid pathname confusion
      router.replace('/', { locale: newLocale })

      // Reset transition state after navigation
      setTimeout(() => {
        setIsTransitioning(false)
      }, 500)
    })
  }

  // Mobile version
  if (mobile) {
    return (
      <div ref={dropdownRef} className="w-full relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex w-full items-center justify-between rounded-md px-3 py-3 text-base font-medium min-h-11 transition-colors"
          style={{
            color: 'var(--text-primary)',
            backgroundColor: dropdownOpen
              ? 'var(--primary-brown)'
              : 'transparent',
          }}
          onMouseEnter={e => {
            if (!dropdownOpen) {
              e.currentTarget.style.backgroundColor = 'rgba(116, 81, 45, 0.1)'
            }
          }}
          onMouseLeave={e => {
            if (!dropdownOpen) {
              e.currentTarget.style.backgroundColor = 'transparent'
            }
          }}
        >
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span>{currentLanguage?.label || 'Language'}</span>
          </div>
          <ChevronDown
            className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
          />
        </button>

        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.15 }}
              className="space-y-1 mt-1 relative z-50"
            >
              {languages.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => switchLocale(lang.code)}
                  disabled={isTransitioning}
                  className="flex w-full items-center gap-2 rounded-md pl-4 pr-3 py-2.5 text-sm font-medium min-h-11 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    color:
                      currentLocale === lang.code
                        ? 'var(--primary-brown)'
                        : 'var(--text-secondary)',
                    backgroundColor:
                      currentLocale === lang.code
                        ? 'var(--primary-cream)'
                        : 'transparent',
                  }}
                  onMouseEnter={e => {
                    if (currentLocale !== lang.code && !isTransitioning) {
                      e.currentTarget.style.backgroundColor =
                        'var(--primary-cream)'
                    }
                  }}
                  onMouseLeave={e => {
                    if (currentLocale !== lang.code && !isTransitioning) {
                      e.currentTarget.style.backgroundColor = 'transparent'
                    }
                  }}
                >
                  <span className="text-base">{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  // Desktop version - Ghost Mode
  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-1.5 px-2 py-1.5 text-sm font-medium rounded-lg transition-all duration-200"
        style={{
          color: 'var(--primary-brown)',
          backgroundColor: dropdownOpen
            ? 'rgba(116, 81, 45, 0.15)'
            : 'transparent',
        }}
        onMouseEnter={e => {
          if (!dropdownOpen) {
            e.currentTarget.style.backgroundColor = 'rgba(116, 81, 45, 0.1)'
          }
        }}
        onMouseLeave={e => {
          if (!dropdownOpen) {
            e.currentTarget.style.backgroundColor = 'transparent'
          }
        }}
      >
        <Globe className="h-4 w-4" />
        <span className="font-medium">{currentLocale.toUpperCase()}</span>
        <ChevronDown className="h-3 w-3" />
      </button>

      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-36 rounded-lg border bg-white p-1.5 shadow-lg z-100"
            style={{ borderColor: 'var(--neutral-medium)' }}
          >
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => switchLocale(lang.code)}
                disabled={isTransitioning}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  color:
                    currentLocale === lang.code
                      ? 'var(--primary-brown)'
                      : 'var(--text-secondary)',
                  backgroundColor:
                    currentLocale === lang.code
                      ? 'var(--primary-cream)'
                      : 'transparent',
                  fontWeight: currentLocale === lang.code ? '600' : '500',
                }}
                onMouseEnter={e => {
                  if (currentLocale !== lang.code && !isTransitioning) {
                    e.currentTarget.style.backgroundColor =
                      'var(--primary-cream)'
                    e.currentTarget.style.color = 'var(--text-primary)'
                  }
                }}
                onMouseLeave={e => {
                  if (currentLocale !== lang.code && !isTransitioning) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--text-secondary)'
                  }
                }}
              >
                <span className="text-base">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
