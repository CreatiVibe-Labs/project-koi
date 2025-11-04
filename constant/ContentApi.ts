// app/constants/apiConstants.js
export async function getHomePageData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=landing-page`, {
      next: { 
        revalidate: 3600, // Cache for 1 hour (3600 seconds)
        tags: ['homepage'] // Add tag for on-demand revalidation
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getToolkit() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/toolkits-data`, {
      next: { 
        revalidate: 7200, // Cache for 2 hours
        tags: ['toolkit'] 
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getResourcesPage() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=resources`, {
      next: { 
        revalidate: 3600, // Cache for 1 hour
        tags: ['resources'] 
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getQuizData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/quizzes`, {
      next: { 
        revalidate: 1800, // Cache for 30 minutes
        tags: ['quizzes'] 
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getBlogsData() {
  
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, {
      next: { 
        revalidate: 1800, // Cache for 30 minutes
        tags: ['blogs'] 
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getBlogBySlug(slug: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs/${slug}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch blog by slug");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
}

export async function getFAQsData(search) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/faqs?search=${search}`, {
      next: { 
        revalidate: 3600, // Cache for 1 hour
        tags: ['faqs'] 
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getHeaderData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=header`, {
      next: { 
        revalidate: 86400, // Cache for 24 hours (header rarely changes)
        tags: ['header'] 
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getFooterData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=footer`, {
      next: { 
        revalidate: 86400, // Cache for 24 hours (footer rarely changes)
        tags: ['footer'] 
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getIndustriesData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=industries-we-serves`, {
      next: { 
        revalidate: 7200, // Cache for 2 hours
        tags: ['industries'] 
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getAboutPageData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=about-us`, {
      next: { 
        revalidate: 7200, // Cache for 2 hours
        tags: ['about'] 
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getOrganizationData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=organization`, {
      next: { 
        revalidate: 7200, // Cache for 2 hours
        tags: ['organization'] 
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getServicesPageData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=services`, {
      next: { 
        revalidate: 3600, // Cache for 1 hour
        tags: ['services'] 
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getSidebarData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=sidebar`, {
      next: { 
        revalidate: 7200, // Cache for 2 hours
        tags: ['sidebar'] 
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getAppDevData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=custom-app-development`, {
      next: { 
        revalidate: 3600, // Cache for 1 hour
        tags: ['app-dev'] 
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getWebDevData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=custom-website-development`, {
      next: { 
        revalidate: 3600, // Cache for 1 hour
        tags: ['web-dev'] 
      }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getCloudMigrationData() {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=cloud-migration`, {
      next: { revalidate: 3600, tags: ["api"] }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getCloudStorageData() {
  try {


    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=cloud-storage`, {
      next: { revalidate: 3600, tags: ["api"] }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getAIPoweredData() {
  try {


    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=ai-powered-solutions`, {
      next: { revalidate: 3600, tags: ["api"] }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getItServicesData() {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=managed-it-services`, {
      next: { revalidate: 3600, tags: ["api"] }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getTestimonials() {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=testimonials`, {
      next: { revalidate: 3600, tags: ["api"] }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getDigitalMarketingData() {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=digital-marketing`, {
      next: { revalidate: 3600, tags: ["api"] }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getSideBarData() {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=sidebar`, {
      next: { revalidate: 3600, tags: ["api"] }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getQuotesData() {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=quotes-from-team`, {
      next: { revalidate: 3600, tags: ["api"] }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getJobsData() {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=jobs`, {
      next: { revalidate: 3600, tags: ["api"] }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getJobsFormData() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=job-form`, {
      next: { revalidate: 3600, tags: ["api"] }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getContactData() {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=contact-us`, {
      next: { revalidate: 3600, tags: ["api"] }
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getIP(ip) {
  try {
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/get-ip?ip=${ip}`, {
      next: { revalidate: 3600, tags: ["api"] }
    });

    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    return [];
  }
}