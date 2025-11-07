import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import BlogCard from '@/components/blog/BlogCard'
import VerticalCutReveal from '@/components/fancy/text/vertical-cut-reveal'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'
import Header from '@/components/sections/Header'
import { getAllPosts } from '@/lib/blog'

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
  const posts = getAllPosts()

  return (
    <div className="w-full h-screen overflow-auto">
      {/* Main Content with higher z-index for sticky footer */}
      <div
        className="relative z-10 pb-8 sm:pb-12"
        style={{ backgroundColor: 'var(--primary-cream)' }}
      >
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[50vh] pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 md:pb-20 flex items-center justify-center overflow-hidden">
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-6 w-full">
              <div className="w-full flex justify-center">
                <div className="block w-full max-w-4xl text-center">
                  <VerticalCutReveal
                    containerClassName="!flex !justify-center !items-center !w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                    wordLevelClassName="!inline"
                    autoStart={true}
                  >
                    <h1
                      style={{
                        fontFamily: 'var(--font-primary)',
                        color: 'var(--primary-dark-brown)',
                        textAlign: 'center',
                        width: '100%',
                        display: 'block',
                        margin: '0 auto',
                      }}
                    >
                      {t('blog.hero.title')}
                    </h1>
                  </VerticalCutReveal>
                </div>
              </div>
            </div>

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
      </div>

      {/* Sticky Footer with lower z-index */}
      <Footer />
    </div>
  )
}
