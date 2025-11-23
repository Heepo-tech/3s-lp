import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import BlogCard from '@/components/blog/BlogCard'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'
import StickyFooterWrapper from '@/components/StickyFooterWrapper'
import { LineShadowText } from '@/components/ui/line-shadow-text'
import { getAllPosts } from '@/lib/blog'

// ISR: Revalidate every 15 minutes (900 seconds)
// New blog posts need to be visible quickly
export const revalidate = 900

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
    },
  }
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale })
  const posts = getAllPosts(locale)

  return (
    <div
      className="w-full"
      style={{ backgroundColor: 'var(--primary-dark-brown)' }}
    >
      {/* Main Content */}
      <main
        className="relative z-10"
        style={{ backgroundColor: 'var(--primary-cream)' }}
      >
        {/* Hero Section */}
        <section className="relative w-full pt-32 pb-12 md:pt-40 md:pb-20 flex items-center justify-center overflow-hidden">
          {/* Dotted Background */}
          <div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(var(--primary-brown) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-balance text-5xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl mb-6 flex flex-col items-center"
              style={{ color: 'var(--primary-dark-brown)' }}
            >
              <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
                <LineShadowText
                  className="italic"
                  shadowColor="var(--primary-dark-brown)"
                >
                  Blog
                </LineShadowText>
                <span>&</span>
                <LineShadowText
                  className="italic"
                  shadowColor="var(--primary-dark-brown)"
                >
                  Artikel
                </LineShadowText>
              </div>
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-4">
                Industri Plywood
              </span>
            </h1>

            <p
              className="mx-auto max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed px-4 text-center"
              style={{
                fontFamily: 'var(--font-secondary)',
                color: 'var(--primary-brown)',
              }}
            >
              {t('blog.hero.description')}
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section
          className="py-12 sm:py-16 md:py-20"
          style={{ backgroundColor: 'var(--neutral-white)' }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <p
                  className="text-lg"
                  style={{
                    fontFamily: 'var(--font-secondary)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {t('blog.empty')}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {posts.map((post, index) => (
                  <BlogCard
                    key={post.slug}
                    post={post}
                    index={index}
                    locale={locale}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Sticky Footer */}
      <StickyFooterWrapper>
        <Footer />
      </StickyFooterWrapper>
    </div>
  )
}
