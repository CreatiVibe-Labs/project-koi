import MainServicePage from "@/components/services/MainServicePage";
import { getServicesPageData } from "@/constant/ContentApi";
import { cookies } from "next/headers";

export const metadata = {
  title: "Services - Aerialink Inc",
  description: "Services - Aerialink Inc",
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
