'use client'

import React, { useEffect, useRef, useState } from 'react'

export default function StickyFooterWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [footerHeight, setFooterHeight] = useState(0)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!footerRef.current) return

    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        setFooterHeight(entry.contentRect.height)
      }
    })

    resizeObserver.observe(footerRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <>
      {/* Spacer to push content up and allow scrolling to reveal footer */}
      <div
        style={{ height: footerHeight }}
        className="w-full relative -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Fixed Footer */}
      <div
        ref={footerRef}
        className="fixed bottom-0 left-0 w-full z-0"
        style={{
          visibility: footerHeight === 0 ? 'hidden' : 'visible',
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </>
  )
}
