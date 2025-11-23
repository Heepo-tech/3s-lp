'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, User, ChevronRight } from 'lucide-react'
import Image from 'next/image'

import VerticalCutReveal from '@/components/fancy/text/vertical-cut-reveal'
import { BackButton } from '@/components/ui/back-button'
import { Link } from '@/i18n/navigation'
import type { BlogPost } from '@/types/blog'

interface BlogPostHeaderProps {
  post: BlogPost
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <section
      className="relative pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 overflow-hidden"
      style={{ backgroundColor: 'var(--primary-cream)' }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-4">
          <BackButton label="Back" />
        </div>

        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 sm:mb-8"
        >
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
                Home
              </Link>
            </li>
            <ChevronRight
              className="h-4 w-4"
              style={{ color: 'var(--text-muted)' }}
            />
            <li>
              <Link
                href="/blog"
                className="transition-colors"
                style={{ color: 'var(--text-secondary)' }}
              >
                Blog
              </Link>
            </li>
            <ChevronRight
              className="h-4 w-4"
              style={{ color: 'var(--text-muted)' }}
            />
            <li
              style={{ color: 'var(--primary-brown)' }}
              className="font-medium"
            >
              {post.title}
            </li>
          </ol>
        </motion.nav>

        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-4 sm:mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
            style={{
              backgroundColor: 'var(--primary-brown)',
              color: 'var(--neutral-white)',
            }}
          >
            <Tag className="h-4 w-4" />
            {post.category}
          </span>
        </motion.div>

        {/* Title with VerticalCutReveal */}
        <div className="mb-6 sm:mb-8">
          <VerticalCutReveal
            containerClassName="!flex !justify-start !items-start !w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            wordLevelClassName="!inline"
            autoStart={true}
          >
            <h1
              style={{
                fontFamily: 'var(--font-primary)',
                color: 'var(--primary-dark-brown)',
                textAlign: 'left',
                width: '100%',
                display: 'block',
              }}
            >
              {post.title}
            </h1>
          </VerticalCutReveal>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg sm:text-xl leading-relaxed mb-6 sm:mb-8"
          style={{
            fontFamily: 'var(--font-secondary)',
            color: 'var(--text-secondary)',
          }}
        >
          {post.description}
        </motion.p>

        {/* Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap items-center gap-4 sm:gap-6 pb-6 sm:pb-8 border-b"
          style={{ borderColor: 'var(--neutral-medium)' }}
        >
          <span
            className="flex items-center gap-2 text-sm sm:text-base"
            style={{ color: 'var(--text-secondary)' }}
          >
            <User className="h-5 w-5" />
            {post.author}
          </span>
          <span
            className="flex items-center gap-2 text-sm sm:text-base"
            style={{ color: 'var(--text-secondary)' }}
          >
            <Calendar className="h-5 w-5" />
            {new Date(post.date).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          {post.readingTime && (
            <span
              className="flex items-center gap-2 text-sm sm:text-base"
              style={{ color: 'var(--text-secondary)' }}
            >
              <Clock className="h-5 w-5" />
              {post.readingTime}
            </span>
          )}
        </motion.div>

        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mt-8 sm:mt-12"
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 768px, 896px"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(82, 36, 5, 0.2), transparent)',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
