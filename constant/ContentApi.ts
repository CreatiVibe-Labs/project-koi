// app/constants/apiConstants.js
export async function getHomePageData() {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=landing-page`, {
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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
      cache: "no-store", // ensures fresh data
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