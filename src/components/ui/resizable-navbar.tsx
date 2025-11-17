'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'

import { useFooterVisibility } from '@/hooks/useFooterVisibility'
import { cn } from '@/lib/utils'

interface NavbarProps {
  children: React.ReactNode
  className?: string
}

interface NavBodyProps {
  children: React.ReactNode
  className?: string
}

interface NavItemsProps {
  items: {
    name: string
    link: string
  }[]
  className?: string
  onItemClick?: () => void
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const isFooterVisible = useFooterVisibility(0.7)

  return (
    <motion.div
      initial={{
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
      }}
      animate={{
        opacity: isFooterVisible ? 0 : 1,
        y: isFooterVisible ? -100 : 0,
        pointerEvents: isFooterVisible ? 'none' : 'auto',
      }}
      transition={{
        type: 'tween',
        duration: 0.3,
        ease: 'easeOut',
      }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 w-full flex justify-center pt-3 px-2',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export const NavBody = ({ children, className }: NavBodyProps) => {
  return (
    <div
      className={cn(
        'relative z-50 mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full bg-white/80 border border-neutral-200 px-3 py-2.5 lg:flex dark:bg-neutral-950/80 dark:border-neutral-800',
        'backdrop-blur-md shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset]',
        className
      )}
    >
      {children}
    </div>
  )
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        'flex flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2',
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2"
          key={`link-${idx}`}
          href={item.link}
          style={{ color: 'var(--text-secondary)' }}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-lg"
              style={{ backgroundColor: 'var(--primary-cream)' }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  )
}

export const NavbarLogo = ({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) => {
  return (
    <Link
      href="/"
      className={cn('relative z-20 flex items-center gap-3', className)}
    >
      {children}
    </Link>
  )
}

export const NavbarButton = ({
  href,
  as: Tag = 'a',
  children,
  className,
  variant = 'primary',
  ...props
}: {
  href?: string
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'dark' | 'gradient'
} & (
  | React.ComponentPropsWithoutRef<'a'>
  | React.ComponentPropsWithoutRef<'button'>
)) => {
  const baseStyles =
    'px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer transition duration-200 inline-block text-center'

  const variantStyles = {
    primary:
      'bg-white text-black shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
    secondary: 'bg-transparent text-current shadow-none',
    dark: 'bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]',
    gradient:
      'bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]',
  }

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  )
}

// Mobile Navigation Components have been removed
// Mobile menu is now implemented directly in Header.tsx using Header2 pattern
