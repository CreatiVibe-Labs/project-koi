// app/constants/apiConstants.js
export async function getHomePageData({section_name}) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/website-section?section_name=${section_name}`, {
      cache: "no-store", // ensures fresh data
    });
    console.log({res});
    if (!res.ok) {
      throw new Error("Failed to fetch API data");
    }

    const data = await res.json();
    console.log({data})
    return data;
  } catch (error) {
    console.error("Error fetching API:", error);
    return [];
  }
}
