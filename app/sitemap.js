export default function sitemap() {
  const baseUrl = "https://www.aerialink.jp";
  const currentDate = new Date();

  return [
    // Home page - highest priority
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    
    // Main service page
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    
    // Individual service pages
    {
      url: `${baseUrl}/services/ai-powered-solutions`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/cloud-migration-services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/custom-app-development`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/custom-website-development`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/digital-marketing-services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/managed-it-services-consulting`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    
    // About us page
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    
    // Contact page
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    
    // Resources page
    {
      url: `${baseUrl}/resources`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
    
    // Thank you page
    {
      url: `${baseUrl}/thank-you`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    
    // Demo page
    {
      url: `${baseUrl}/demo`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    
    // Scheduler page
    {
      url: `${baseUrl}/scheduler`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    
    // Note: job-apply/[slug] is a dynamic route and would need specific job IDs
    // Add specific job URLs here if you have them, for example:
    // {
    //   url: `${baseUrl}/job-apply/frontend-developer`,
    //   lastModified: currentDate,
    //   changeFrequency: "monthly",
    //   priority: 0.5,
    // },
  ];
}
