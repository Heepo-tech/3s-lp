import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import readingTime from 'reading-time'

import type { BlogPost, BlogMetadata } from '@/types/blog'

const contentDirectory = path.join(process.cwd(), 'content/blog')

/**
 * Get all blog posts from the content directory
 */
export function getAllPosts(locale: string = 'id'): BlogPost[] {
  const localeDirectory = path.join(contentDirectory, locale)

  // Check if directory exists
  if (!fs.existsSync(localeDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(localeDirectory)

  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(fileName => {
      const slug = fileName.replace('.mdx', '')
      return getPostBySlug(slug, locale)
    })
    .filter((post): post is BlogPost => post !== null)

  return sortPostsByDate(posts)
}

/**
 * Get a single blog post by slug
 */
export function getPostBySlug(
  slug: string,
  locale: string = 'id'
): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, locale, `${slug}.mdx`)

    if (!fs.existsSync(fullPath)) {
      return null
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    // Calculate reading time
    const stats = readingTime(content)

    return {
      slug,
      title: data.title || '',
      description: data.description || '',
      date: data.date || '',
      author: data.author || 'Admin',
      category: data.category || 'Uncategorized',
      tags: data.tags || [],
      coverImage: data.coverImage || '/images/blog/default.jpg',
      content,
      readingTime: stats.text,
    } as BlogPost
  } catch (error) {
    // Silently handle errors - post will be excluded from the list
    // In development, you can uncomment the line below for debugging
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error(`Error reading post ${slug}:`, error)
    }
    return null
  }
}

/**
 * Sort blog posts by date (newest first)
 */
export function sortPostsByDate(posts: BlogPost[]): BlogPost[] {
  return posts.sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return dateB - dateA
  })
}

/**
 * Get related posts by category
 */
export function getRelatedPosts(
  currentSlug: string,
  category: string,
  limit = 3,
  locale: string = 'id'
): BlogPost[] {
  const allPosts = getAllPosts(locale)

  return allPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit)
}

/**
 * Get posts by category
 */
export function getPostsByCategory(
  category: string,
  locale: string = 'id'
): BlogPost[] {
  const allPosts = getAllPosts(locale)
  return allPosts.filter(post => post.category === category)
}

/**
 * Get all unique categories
 */
export function getAllCategories(locale: string = 'id'): string[] {
  const allPosts = getAllPosts(locale)
  const categories = allPosts.map(post => post.category)
  return Array.from(new Set(categories))
}

/**
 * Get blog post metadata for SEO
 */
export function getPostMetadata(
  slug: string,
  locale: string = 'id'
): BlogMetadata | null {
  const post = getPostBySlug(slug, locale)

  if (!post) {
    return null
  }

  return {
    title: post.title,
    description: post.description,
    date: post.date,
    author: post.author,
    category: post.category,
    tags: post.tags,
    coverImage: post.coverImage,
    readingTime: post.readingTime,
  }
}
