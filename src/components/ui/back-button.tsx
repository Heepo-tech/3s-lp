'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { cn } from '@/lib/utils'

interface BackButtonProps {
  label?: string
  className?: string
}

export function BackButton({ label = 'Back', className }: BackButtonProps) {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      className={cn(
        'inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70',
        className
      )}
      style={{ color: 'var(--text-secondary)' }}
    >
      <ArrowLeft className="h-4 w-4" />
      <span>{label}</span>
    </button>
  )
}
