'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import type { BlogPost } from '@/types/blog'

interface BlogCardProps {
  post: BlogPost
  index?: number
}

export default function BlogCard({ post, index = 0 }: BlogCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <Link href={`/blog/${post.slug}`} className="block group">
        <div
          className="relative h-full rounded-xl border transition-all duration-300 md:hover:shadow-xl md:hover:-translate-y-2 overflow-hidden"
          style={{
            backgroundColor: 'var(--neutral-white)',
            borderColor: 'var(--neutral-medium)',
          }}
          onMouseEnter={e => {
            if (window.innerWidth >= 768) {
              e.currentTarget.style.borderColor = 'var(--primary-brown)'
            }
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'var(--neutral-medium)'
          }}
        >
          {/* Cover Image */}
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div
              className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-75"
              style={{
                background:
                  'linear-gradient(to top, rgba(82, 36, 5, 0.4), transparent)',
              }}
            />

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: 'var(--primary-brown)',
                  color: 'var(--neutral-white)',
                }}
              >
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Metadata */}
            <div className="flex items-center gap-4 mb-3 text-sm">
              <span
                className="flex items-center gap-1.5"
                style={{ color: 'var(--text-muted)' }}
              >
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
              {post.readingTime && (
                <span
                  className="flex items-center gap-1.5"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <Clock className="h-4 w-4" />
                  {post.readingTime}
                </span>
              )}
            </div>

            {/* Title */}
            <h3
              className="mb-3 text-xl font-bold line-clamp-2 transition-colors duration-300"
              style={{
                fontFamily: 'var(--font-primary)',
                color: 'var(--text-primary)',
              }}
            >
              {post.title}
            </h3>

            {/* Description */}
            <p
              className="text-sm leading-relaxed line-clamp-3 mb-4"
              style={{
                fontFamily: 'var(--font-secondary)',
                color: 'var(--text-secondary)',
              }}
            >
              {post.description}
            </p>

            {/* Read More */}
            <span
              className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
              style={{ color: 'var(--primary-brown)' }}
            >
              Baca Selengkapnya
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>

          {/* Decorative gradient line on hover */}
          <div
            className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-300 group-hover:w-full"
            style={{ background: 'var(--gradient-brown)' }}
          />
        </div>
      </Link>
    </motion.article>
  )
}
