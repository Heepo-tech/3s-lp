import { ArrowRightIcon } from '@radix-ui/react-icons'
import React from 'react'

import { cn } from '@/lib/utils'

type InteractiveHoverButtonProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
      href?: string
    }

export function InteractiveHoverButton({
  children,
  className,
  href,
  ...props
}: InteractiveHoverButtonProps) {
  const Component = href ? 'a' : ('button' as const)

  // Extract icon and text from children
  const childrenArray = React.Children.toArray(children)

  // Find icon element by checking className patterns (h-, w-, icon, mail, lucide)
  const iconElement = childrenArray.find(child => {
    if (!React.isValidElement(child)) return false

    const isComponent = typeof child.type === 'function'
    const className = (child.props as { className?: string })?.className || ''
    const hasIconClass = /icon|mail|lucide/i.test(className)
    const hasIconProps =
      child.props &&
      typeof child.props === 'object' &&
      ('size' in child.props ||
        className.includes('h-') ||
        className.includes('w-'))

    return isComponent && (hasIconClass || hasIconProps)
  }) as React.ReactElement | undefined

  // Get text content (strings and non-icon elements)
  const textContent = childrenArray.filter(child => child !== iconElement)

  return (
    <Component
      {...(href ? { href } : { type: 'button' as const })}
      className={cn(
        // Base styles
        'group relative min-w-[180px] cursor-pointer overflow-hidden rounded-full',
        'border-2 border-solid bg-white py-3 px-8 text-center font-semibold',
        'transition-all duration-300 ease-out',
        className
      )}
      style={{
        borderColor: 'rgba(78, 31, 0, 0.3)', // Semi-transparent brown border
      }}
      {...(props as any)}
    >
      {/* Background Ripple - Expands on Hover */}
      <span
        className="absolute inset-0 z-0 rounded-full transition-all duration-300 group-hover:scale-[100.8]"
        style={{
          background: 'var(--gradient-brown)',
        }}
        aria-hidden="true"
      />

      {/* Initial Content Layer: Icon + Text (visible by default) */}
      <div className="relative z-10 flex items-center justify-center gap-2 transition-all duration-300 group-hover:opacity-0 group-hover:scale-95">
        {/* Mail Icon - Visible in default state, hidden on hover */}
        {iconElement &&
          React.cloneElement(iconElement, {
            className: cn(
              (iconElement.props as { className?: string })?.className
            ),
            style: { color: 'var(--primary-brown)' },
          } as React.HTMLAttributes<HTMLElement>)}

        {/* Text */}
        <span
          style={{
            color: 'var(--primary-brown)',
          }}
        >
          {textContent}
        </span>
      </div>

      {/* Hover Content Layer: Text + Arrow (hidden by default, visible on hover) */}
      <div
        className="absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center gap-2 opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"
        style={{
          color: 'white',
        }}
      >
        <span>{textContent}</span>
        <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
      </div>
    </Component>
  )
}
