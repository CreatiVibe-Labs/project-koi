let headerData = '',
  footerData = '',
  homeData = '',
  industriesData = '',
  aboutData = '',
  organizationData = '',
  ServicesPageData = '',
  WebDevData = '',
  AppDevData = '',
  cloudMigrationData = '',
  cloudStorageData = '',
  sideBarData = '';

// app/constants/apiConstants.js
export async function getHomePageData() {
  try {

    if (homeData != '') {
      return homeData;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=landing-page`, {
      cache: "no-store", // ensures fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();
    homeData = data;
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getHeaderData() {
  try {

    if (headerData != '') {
      return headerData;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=header`, {
      cache: "no-store", // ensures fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();
    headerData = data;
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getFooterData() {
  try {

    if (footerData != '') {
      return footerData;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=footer`, {
      cache: "no-store", // ensures fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();
    footerData = data;
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getIndustriesData() {
  try {

    if (industriesData != '') {
      return industriesData;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=industries-we-serves`, {
      cache: "no-store", // ensures fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    industriesData = data;
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getAboutPageData() {
  try {

    if (aboutData != '') {
      return aboutData;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=about-us`, {
      cache: "no-store", // ensures fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    aboutData = data;
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getOrganizationData() {
  try {

    if (organizationData != '') {
      return organizationData;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=organization`, {
      cache: "no-store", // ensures fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    organizationData = data;
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getServicesPageData() {
  try {

    if (ServicesPageData != '') {
      return ServicesPageData;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=services`, {
      cache: "no-store", // ensures fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    ServicesPageData = data;
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getSidebarData() {
  try {

    if (sideBarData != '') {
      return sideBarData;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=sidebar`, {
      cache: "no-store", // ensures fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    sideBarData = data;
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getAppDevData() {
  try {

    if (AppDevData != '') {
      return AppDevData;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=custom-app-development`, {
      cache: "no-store", // ensures fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    AppDevData = data;
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getWebDevData() {
  try {

    if (WebDevData != '') {
      return WebDevData;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=custom-website-development`, {
      cache: "no-store", // ensures fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    WebDevData = data;
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getCloudMigrationData() {
  try {

    if (cloudMigrationData != '') {
      return cloudMigrationData;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=cloud-migration`, {
      cache: "no-store", // ensures fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    cloudMigrationData = data;
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}

export async function getCloudStorageData() {
  try {

    if (cloudStorageData != '') {
      return cloudStorageData;
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=cloud-storage`, {
      cache: "no-store", // ensures fresh data
    });
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();

    cloudStorageData = data;
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}