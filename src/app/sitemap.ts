import { MetadataRoute } from 'next'

import { products } from '@/data/products'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sahabatplywood.com'
  const currentDate = new Date()

  // Static pages dengan i18n alternates
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
      alternates: {
        languages: {
          id: `${baseUrl}/id`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/tentang-kami`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          id: `${baseUrl}/id/tentang-kami`,
          en: `${baseUrl}/en/about-us`,
        },
      },
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
      alternates: {
        languages: {
          id: `${baseUrl}/id/blog`,
          en: `${baseUrl}/en/blog`,
        },
      },
    },
    {
      url: `${baseUrl}/sertifikasi`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          id: `${baseUrl}/id/sertifikasi`,
          en: `${baseUrl}/en/certifications`,
        },
      },
    },
  ]

  // Dynamic product pages
  const productPages: MetadataRoute.Sitemap = products.map(product => ({
    url: `${baseUrl}/produk/${product.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
    alternates: {
      languages: {
        id: `${baseUrl}/id/produk/${product.slug}`,
        en: `${baseUrl}/en/products/${product.slug}`,
      },
    },
  }))

  // Dynamic blog posts
  const blogPosts = getAllPosts()
  const blogPages: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
    alternates: {
      languages: {
        id: `${baseUrl}/id/blog/${post.slug}`,
        en: `${baseUrl}/en/blog/${post.slug}`,
      },
    },
  }))

  return [...staticPages, ...productPages, ...blogPages]
}
