'use client'

import { useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

export function NumberTicker({
  value,
  className,
}: {
  value: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  })

  useEffect(() => {
    motionValue.set(value)
  }, [motionValue, value])

  useEffect(() => {
    springValue.on('change', latest => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(
          Number(latest.toFixed(0))
        )
      }
    })
  }, [springValue])

  return (
    <span
      className={cn('inline-block tabular-nums tracking-wider', className)}
      ref={ref}
    />
  )
}
