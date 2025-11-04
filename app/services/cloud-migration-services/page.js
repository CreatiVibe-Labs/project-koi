import CloudMainPage from "@/components/services/CloudMainPage";
import { getCloudMigrationData, getCloudStorageData, getSideBarData, getServicesPageData } from "@/constant/ContentApi";

import { cookies } from "next/headers";

export const metadata = {
    title: "Cloud Migration & Storage Services - AWS, Azure, Google Cloud",
    description: "Expert cloud migration and storage services in Japan. Seamlessly migrate to AWS, Azure, or Google Cloud. Secure, scalable, and cost-effective cloud solutions for your business.",
    keywords: "cloud migration, AWS migration, Azure migration, Google Cloud, cloud storage, cloud infrastructure, cloud consulting Japan",
    openGraph: {
        title: "Cloud Migration & Storage Services - AWS, Azure, Google Cloud | Aerialink",
        description: "Expert cloud migration services. Seamlessly migrate to AWS, Azure, or Google Cloud with secure, scalable solutions.",
        url: "https://www.aerialink.jp/services/cloud-migration-services",
        images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
    alternates: {
        canonical: "https://www.aerialink.jp/services/cloud-migration-services",
    },
};

export default async function CloudMigrationServices() {
    const cookieStore = await cookies();
    const lang = cookieStore.get("lang")?.value ?? 'en';
    const ASSETS_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL;
    const apiData = await getCloudMigrationData();
    const apiData2 = await getCloudStorageData();
    const serviceApiData = await getServicesPageData();
    const sideBarData = await getSideBarData();

    return (
        <CloudMainPage sideBarData={sideBarData} lang={lang} ASSETS_URL={ASSETS_URL} apiData={apiData} apiData2={apiData2} serviceApiData={serviceApiData} />
    );
}