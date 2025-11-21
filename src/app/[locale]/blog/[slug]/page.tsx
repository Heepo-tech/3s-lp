import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { ReactNode } from 'react'

import BlogPostContent from '@/components/blog/BlogPostContent'
import BlogPostHeader from '@/components/blog/BlogPostHeader'
import RelatedPosts from '@/components/blog/RelatedPosts'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'
import StickyFooterWrapper from '@/components/StickyFooterWrapper'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog'

// MDX components for custom styling
const mdxComponents = {
  h1: ({ children }: { children: ReactNode }) => (
    <h1
      style={{
        fontFamily: 'var(--font-primary)',
        color: 'var(--text-primary)',
      }}
    >
      {children}
    </h1>
  ),
  h2: ({ children }: { children: ReactNode }) => (
    <h2
      style={{
        fontFamily: 'var(--font-primary)',
        color: 'var(--text-primary)',
      }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }: { children: ReactNode }) => (
    <h3
      style={{
        fontFamily: 'var(--font-primary)',
        color: 'var(--text-primary)',
      }}
    >
      {children}
    </h3>
  ),
  h4: ({ children }: { children: ReactNode }) => (
    <h4
      style={{
        fontFamily: 'var(--font-primary)',
        color: 'var(--text-primary)',
      }}
    >
      {children}
    </h4>
  ),
  p: ({ children }: { children: ReactNode }) => (
    <p
      style={{
        fontFamily: 'var(--font-secondary)',
        color: 'var(--text-secondary)',
      }}
    >
      {children}
    </p>
  ),
  a: ({ href, children }: { href?: string; children: ReactNode }) => (
    <Link
      href={href || '#'}
      style={{ color: 'var(--primary-brown)' }}
      className="hover:opacity-80 transition-opacity"
    >
      {children}
    </Link>
  ),
  img: (props: { src?: string; alt?: string }) => (
    <Image
      src={props.src || ''}
      alt={props.alt || ''}
      width={800}
      height={600}
      className="rounded-lg shadow-md"
    />
  ),
}

interface BlogPostPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

// ISR: Revalidate every 1 hour (3600 seconds)
// Published blog posts are static but may have comment updates
export const revalidate = 3600

export async function generateStaticParams() {
  const posts = getAllPosts()
  const locales = ['id', 'en']

  return locales.flatMap(locale =>
    posts.map(post => ({
      locale,
      slug: post.slug,
    }))
  )
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} - PT. Sekawan Sahabat Sejati`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, post.category, 3)

  return (
    <div
      className="w-full"
      style={{ backgroundColor: 'var(--primary-dark-brown)' }}
    >
      {/* Main Content */}
      <div
        className="relative z-10"
        style={{ backgroundColor: 'var(--primary-cream)' }}
      >
        {/* Blog Post Header */}
        <BlogPostHeader post={post} />

        {/* Blog Post Content */}
        <BlogPostContent>
          <MDXRemote source={post.content} components={mdxComponents} />
        </BlogPostContent>

        {/* Related Posts */}
        {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}

        {/* CTA Section */}
        <CTASection />
      </div>

      {/* Sticky Footer */}
      <StickyFooterWrapper>
        <Footer />
      </StickyFooterWrapper>
    </div>
  )
}
