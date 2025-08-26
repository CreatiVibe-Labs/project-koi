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
