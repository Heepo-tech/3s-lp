// ISR (Incremental Static Regeneration) revalidation intervals
// Centralized configuration for cache revalidation times across the application

export const REVALIDATE_INTERVALS = {
  // Homepage with dynamic company profile content
  HOMEPAGE: 3600, // 1 hour (3600 seconds)

  // Company information pages (relatively static)
  ABOUT_US: 21600, // 6 hours (21600 seconds)

  // Product pages (may have price/stock updates)
  PRODUCT_LIST: 7200, // 2 hours (7200 seconds)
  PRODUCT_DETAIL: 7200, // 2 hours (7200 seconds)

  // Blog content (less frequent updates)
  BLOG_LIST: 10800, // 3 hours (10800 seconds)
  BLOG_POST: 10800, // 3 hours (10800 seconds)

  // Certification page (very static)
  CERTIFICATION: 86400, // 24 hours (86400 seconds)

  // Contact/Quote pages (no caching needed)
  CONTACT: false, // Disable ISR
  QUOTE: false, // Disable ISR
}

export type RevalidateInterval =
  (typeof REVALIDATE_INTERVALS)[keyof typeof REVALIDATE_INTERVALS]
