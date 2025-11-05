export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  coverImage: string
  content: string
  readingTime?: string
}

export interface BlogMetadata {
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  coverImage: string
  readingTime?: string
}

export interface BlogFrontmatter extends BlogMetadata {
  [key: string]: unknown
}
