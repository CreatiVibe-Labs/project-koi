import CloudMainPage from "@/components/services/CloudMainPage";
import { getCloudMigrationData, getCloudStorageData, getSideBarData } from "@/constant/ContentApi";

import { cookies } from "next/headers";

export const metadata = {
    title: "Cloud Migration & Storage Services - Aerialink Inc",
    description: "Cloud Migration & Storage Services - Aerialink Inc",
};

export default async function CloudMigrationServices() {
    const cookieStore = await cookies();
    const lang = cookieStore.get("lang")?.value ?? 'en';
    const ASSETS_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL;
    const apiData = await getCloudMigrationData();
    const apiData2 = await getCloudStorageData();

    const sideBarData = await getSideBarData();

    return (
        <CloudMainPage sideBarData={sideBarData} lang={lang} ASSETS_URL={ASSETS_URL} apiData={apiData} apiData2={apiData2} />
    );
}