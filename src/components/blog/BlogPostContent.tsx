'use client'

import { motion } from 'framer-motion'

interface BlogPostContentProps {
  children: React.ReactNode
}

export default function BlogPostContent({ children }: BlogPostContentProps) {
  return (
    <section
      className="py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: 'var(--neutral-white)' }}
    >
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
      >
        <div
          className="prose prose-lg max-w-none"
          style={{
            fontFamily: 'var(--font-secondary)',
            color: 'var(--text-primary)',
          }}
        >
          {children}
        </div>
      </motion.article>

      <style jsx global>{`
        /* Prose Styling for MDX Content */
        .prose {
          line-height: 1.75;
        }

        /* Headings */
        .prose h1,
        .prose h2,
        .prose h3,
        .prose h4,
        .prose h5,
        .prose h6 {
          font-family: var(--font-primary);
          color: var(--text-primary);
          font-weight: 700;
          margin-top: 2em;
          margin-bottom: 1em;
          line-height: 1.3;
        }

        .prose h1 {
          font-size: 2.25rem;
          margin-top: 0;
        }

        .prose h2 {
          font-size: 1.875rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--neutral-medium);
        }

        .prose h3 {
          font-size: 1.5rem;
        }

        .prose h4 {
          font-size: 1.25rem;
        }

        /* Paragraphs */
        .prose p {
          margin-top: 1.5em;
          margin-bottom: 1.5em;
          color: var(--text-secondary);
          text-align: justify;
          text-justify: inter-word;
        }

        /* Links */
        .prose a {
          color: var(--primary-brown);
          text-decoration: underline;
          font-weight: 500;
          transition: opacity 0.2s;
        }

        .prose a:hover {
          opacity: 0.8;
        }

        /* Lists */
        .prose ul,
        .prose ol {
          margin-top: 1.5em;
          margin-bottom: 1.5em;
          padding-left: 1.5em;
        }

        .prose li {
          margin-top: 0.5em;
          margin-bottom: 0.5em;
          color: var(--text-secondary);
          text-align: justify;
          text-justify: inter-word;
        }

        .prose ul > li {
          list-style-type: disc;
        }

        .prose ol > li {
          list-style-type: decimal;
        }

        /* Blockquotes */
        .prose blockquote {
          margin-top: 2em;
          margin-bottom: 2em;
          padding-left: 1.5rem;
          border-left: 4px solid var(--primary-brown);
          background-color: var(--primary-cream);
          padding: 1.5rem;
          border-radius: 0.5rem;
          font-style: italic;
          color: var(--text-secondary);
        }

        .prose blockquote p {
          margin: 0;
        }

        /* Code */
        .prose code {
          background-color: var(--primary-cream);
          color: var(--primary-brown);
          padding: 0.2em 0.4em;
          border-radius: 0.25rem;
          font-size: 0.9em;
          font-family: 'Monaco', 'Courier New', monospace;
        }

        .prose pre {
          background-color: var(--neutral-dark);
          color: var(--neutral-white);
          padding: 1.5rem;
          border-radius: 0.75rem;
          overflow-x: auto;
          margin-top: 2em;
          margin-bottom: 2em;
        }

        .prose pre code {
          background-color: transparent;
          color: inherit;
          padding: 0;
          font-size: 0.875rem;
        }

        /* Images */
        .prose img {
          margin-top: 2em;
          margin-bottom: 2em;
          border-radius: 0.75rem;
          box-shadow: var(--shadow-medium);
        }

        /* Tables */
        .prose table {
          width: 100%;
          margin-top: 2em;
          margin-bottom: 2em;
          border-collapse: collapse;
        }

        .prose thead {
          background-color: var(--primary-cream);
        }

        .prose th {
          padding: 0.75rem 1rem;
          text-align: left;
          font-weight: 600;
          color: var(--text-primary);
          border-bottom: 2px solid var(--neutral-medium);
        }

        .prose td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid var(--neutral-medium);
          color: var(--text-secondary);
        }

        .prose tbody tr:last-child td {
          border-bottom: none;
        }

        /* Horizontal Rule */
        .prose hr {
          margin-top: 3em;
          margin-bottom: 3em;
          border: none;
          border-top: 2px solid var(--neutral-medium);
        }

        /* Strong/Bold */
        .prose strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        /* Emphasis/Italic */
        .prose em {
          font-style: italic;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .prose h1 {
            font-size: 1.875rem;
          }

          .prose h2 {
            font-size: 1.5rem;
          }

          .prose h3 {
            font-size: 1.25rem;
          }

          .prose {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
