// Helper function to create optimized fetch config
export const createCacheConfig = (revalidateSeconds = 3600, tag = 'default') => ({
  next: { 
    revalidate: revalidateSeconds,
    tags: [tag] 
  }
});

// Cache configurations for different content types
export const CACHE_CONFIGS = {
  STATIC: createCacheConfig(86400, 'static'),      // 24 hours (header, footer)
  LONG: createCacheConfig(7200, 'long'),           // 2 hours (services pages)
  MEDIUM: createCacheConfig(3600, 'medium'),       // 1 hour (homepage, about)
  SHORT: createCacheConfig(1800, 'short'),         // 30 minutes (blogs, news)
  DYNAMIC: createCacheConfig(0, 'dynamic'),        // No cache (real-time data)
};
