'use client'

import { motion } from 'framer-motion'

import type { BlogPost } from '@/types/blog'

import BlogCard from './BlogCard'

interface RelatedPostsProps {
  posts: BlogPost[]
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) {
    return null
  }

  return (
    <section
      className="py-12 sm:py-16 md:py-20"
      style={{ backgroundColor: 'var(--primary-cream)' }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: 'var(--font-primary)',
              color: 'var(--text-primary)',
            }}
          >
            Artikel Terkait
          </h2>
          <p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-secondary)',
              color: 'var(--text-secondary)',
            }}
          >
            Baca artikel lainnya yang mungkin Anda minati
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
