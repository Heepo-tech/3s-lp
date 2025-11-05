import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import BlogPostContent from '@/components/blog/BlogPostContent'
import BlogPostHeader from '@/components/blog/BlogPostHeader'
import RelatedPosts from '@/components/blog/RelatedPosts'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({
    slug: post.slug,
  }))
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

  // Dynamically import MDX content
  const MDXContent = await import(`../../../../content/blog/${slug}.mdx`).then(
    mod => mod.default
  )

  return (
    <div className="w-full h-screen overflow-auto">
      {/* Main Content with higher z-index for sticky footer */}
      <div
        className="relative z-10 pb-8 sm:pb-12"
        style={{ backgroundColor: 'var(--primary-cream)' }}
      >
        <Header />

        {/* Blog Post Header */}
        <BlogPostHeader post={post} />

        {/* Blog Post Content */}
        <BlogPostContent>
          <MDXContent />
        </BlogPostContent>

        {/* Related Posts */}
        {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}

        {/* CTA Section */}
        <CTASection />
      </div>

      {/* Sticky Footer with lower z-index */}
      <Footer />
    </div>
  )
}
