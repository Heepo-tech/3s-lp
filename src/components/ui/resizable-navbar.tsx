'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
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
  visible?: boolean
}

interface NavItemsProps {
  items: {
    name: string
    link: string
  }[]
  className?: string
  onItemClick?: () => void
}

interface MobileNavProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface MobileNavHeaderProps {
  children: React.ReactNode
  className?: string
}

interface MobileNavMenuProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const [visible] = useState<boolean>(true) // Always visible
  const isFooterVisible = useFooterVisibility(0.7)

  return (
    <motion.div
      initial={{
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        opacity: 1,
        y: 0,
        pointerEvents: 'auto',
      }}
      animate={{
        paddingLeft: visible ? '0.5rem' : '0.75rem',
        paddingRight: visible ? '0.5rem' : '0.75rem',
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
        'fixed inset-x-0 top-0 z-50 w-full flex justify-center pt-3',
        className
      )}
    >
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          : child
      )}
    </motion.div>
  )
}

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(10px)' : 'none',
        boxShadow: visible
          ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
          : '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08)',
        width: visible ? '60%' : '100%',
        minWidth: visible ? '700px' : 'auto',
      }}
      transition={{
        type: 'tween',
        duration: 0.3,
        ease: 'easeOut',
      }}
      className={cn(
        'relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between rounded-full bg-white/80 border border-neutral-200 px-3 py-2.5 lg:flex dark:bg-neutral-950/80 dark:border-neutral-800',
        visible && 'rounded-full',
        className
      )}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          // Only pass visible prop to custom components (non-HTML elements)
          // Check if the element type is a string (HTML element) or a component
          const isHTMLElement = typeof child.type === 'string'

          if (isHTMLElement) {
            // Don't pass visible to HTML elements
            return child
          } else {
            // Pass visible to custom components
            return React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible }
            )
          }
        }
        return child
      })}
    </motion.div>
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

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(10px)' : 'none',
        boxShadow: visible
          ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
          : '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08)',
        width: visible ? '90%' : '100%',
        minWidth: '90%',
      }}
      transition={{
        type: 'tween',
        duration: 0.3,
        ease: 'easeOut',
      }}
      className={cn(
        'relative z-50 mx-auto flex w-full flex-col items-center justify-between bg-white border border-neutral-200 px-6 py-2 lg:hidden rounded-2xl dark:bg-neutral-950 dark:border-neutral-800',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-row items-center justify-between',
        className
      )}
    >
      {children}
    </div>
  )
}

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            'w-full flex flex-col items-start justify-start gap-4 px-0 py-4',
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: () => void
}) => {
  return isOpen ? (
    <X
      className="h-6 w-6 cursor-pointer"
      onClick={onClick}
      style={{ color: 'var(--text-primary)' }}
    />
  ) : (
    <Menu
      className="h-6 w-6 cursor-pointer"
      onClick={onClick}
      style={{ color: 'var(--text-primary)' }}
    />
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
