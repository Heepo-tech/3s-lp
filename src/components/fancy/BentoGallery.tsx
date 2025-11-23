'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export interface GalleryItem {
  src: string
  alt: string
  size: 'large' | 'standard' | 'wide'
  overlay?: {
    label: string
    value: string
  }
}

export interface GalleryPage {
  id: number
  photos: GalleryItem[]
}

interface BentoGalleryProps {
  pages: GalleryPage[]
  className?: string
}

// Animation variants
const gridVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.08, // 80ms stagger between cards
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.05,
      staggerDirection: -1, // reverse order on exit
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 260,
      damping: 24,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: {
      duration: 0.2,
    },
  },
}

export default function BentoGallery({
  pages,
  className = '',
}: BentoGalleryProps) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const currentPage = pages[currentPageIndex]

  const goToPage = (index: number) => {
    if (index >= 0 && index < pages.length) {
      setCurrentPageIndex(index)
    }
  }

  const nextPage = () => goToPage(currentPageIndex + 1)
  const prevPage = () => goToPage(currentPageIndex - 1)

  const getGridArea = (size: GalleryItem['size']) => {
    if (size === 'large')
      return 'md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2' // 2x2
    if (size === 'wide')
      return 'md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1' // 2x1
    return 'md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1' // 1x1
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Gallery Grid with AnimatePresence */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage.id} // Important: change key to trigger exit/enter
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            style={{
              backgroundColor: 'var(--primary-cream)',
              gridAutoRows: '200px', // Fixed row height for symmetry
            }}
          >
            {currentPage.photos.map((item, index) => (
              <motion.div
                key={`${currentPage.id}-${item.src}-${index}`}
                variants={cardVariants}
                className={`
                  relative overflow-hidden rounded-xl group
                  transition-all duration-300 h-full w-full
                  ${getGridArea(item.size)}
                `}
                style={{
                  border: '1px solid var(--neutral-medium)',
                  backgroundColor: 'var(--neutral-white)',
                }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    quality={85}
                  />

                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Text Overlay (if provided) */}
                  {item.overlay && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-white">
                        <p
                          className="text-xs font-medium opacity-80"
                          style={{ fontFamily: 'var(--font-secondary)' }}
                        >
                          {item.overlay.label}
                        </p>
                        <p
                          className="text-lg font-bold"
                          style={{ fontFamily: 'var(--font-primary)' }}
                        >
                          {item.overlay.value}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtle Border Glow on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 0 1px rgba(82, 36, 5, 0.2)',
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      <div className="mt-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Previous Button */}
          <button
            onClick={prevPage}
            disabled={currentPageIndex === 0}
            className="h-8 w-8 rounded-full border flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:border-brown hover:bg-brown/5"
            style={{
              borderColor: 'var(--neutral-medium)',
              color: 'var(--primary-brown)',
            }}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Page Numbers */}
          {pages.map((page, index) => (
            <button
              key={page.id}
              onClick={() => goToPage(index)}
              className={`
                h-8 min-w-[2rem] px-2 rounded-full border flex items-center justify-center transition-all
                ${
                  index === currentPageIndex
                    ? 'font-bold'
                    : 'hover:border-brown hover:bg-brown/5'
                }
              `}
              style={{
                backgroundColor:
                  index === currentPageIndex
                    ? 'var(--primary-brown)'
                    : 'transparent',
                color:
                  index === currentPageIndex
                    ? 'var(--neutral-white)'
                    : 'var(--primary-brown)',
                borderColor:
                  index === currentPageIndex
                    ? 'var(--primary-brown)'
                    : 'var(--neutral-medium)',
                fontFamily: 'var(--font-primary)',
              }}
              aria-label={`Go to page ${page.id}`}
              aria-current={index === currentPageIndex ? 'page' : undefined}
            >
              {page.id}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={nextPage}
            disabled={currentPageIndex === pages.length - 1}
            className="h-8 w-8 rounded-full border flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:border-brown hover:bg-brown/5"
            style={{
              borderColor: 'var(--neutral-medium)',
              color: 'var(--primary-brown)',
            }}
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Quote Mark Decoration */}
        <div
          className="text-3xl opacity-20"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          &quot;
        </div>
      </div>
    </div>
  )
}
