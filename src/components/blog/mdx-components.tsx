import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1
        style={{
          fontFamily: 'var(--font-primary)',
          color: 'var(--text-primary)',
        }}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        style={{
          fontFamily: 'var(--font-primary)',
          color: 'var(--text-primary)',
        }}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        style={{
          fontFamily: 'var(--font-primary)',
          color: 'var(--text-primary)',
        }}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        style={{
          fontFamily: 'var(--font-primary)',
          color: 'var(--text-primary)',
        }}
      >
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p
        style={{
          fontFamily: 'var(--font-secondary)',
          color: 'var(--text-secondary)',
        }}
      >
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <Link
        href={href as string}
        style={{ color: 'var(--primary-brown)' }}
        className="hover:opacity-80 transition-opacity"
      >
        {children}
      </Link>
    ),
    img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
      const src = typeof props.src === 'string' ? props.src : ''
      return (
        <Image
          src={src || '/images/blog/default.jpg'}
          width={800}
          height={600}
          className="rounded-lg shadow-md"
          alt={props.alt || ''}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 800px"
        />
      )
    },
    ...components,
  }
}
