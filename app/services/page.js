import MainServicePage from "@/components/services/MainServicePage";
import { getServicesPageData } from "@/constant/ContentApi";
import { cookies } from "next/headers";

export const metadata = {
  title: "Our Services - Web Development, Cloud & AI Solutions",
  description: "Comprehensive IT services including custom web development, mobile apps, cloud migration, AI-powered solutions, digital marketing & managed IT services in Japan.",
  keywords: "IT services Japan, web development, app development, cloud migration, AI solutions, digital marketing, IT consulting",
  openGraph: {
    title: "Our Services - Web Development, Cloud & AI Solutions | Aerialink",
    description: "Comprehensive IT services including custom web & app development, cloud migration, AI solutions & digital marketing in Japan.",
    url: "https://www.aerialink.jp/services",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  alternates: {
    canonical: "https://www.aerialink.jp/services",
  },
};

export default async function Services() {

  const cookieStore = await cookies();
  const lang = cookieStore.get("lang")?.value ?? 'en';
  const ASSETS_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL;
  const apiData = await getServicesPageData();

  console.log({apiData})

  return (
    <MainServicePage lang={lang} ASSETS_URL={ASSETS_URL} apiData={apiData} />
  );
}
