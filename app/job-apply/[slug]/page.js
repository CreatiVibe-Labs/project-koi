import JobApplyForm from "@/components/JobApplyForm";
import { cookies } from "next/headers";
import { getAboutPageData, getJobsData, getJobsFormData } from "@/constant/ContentApi";

export const metadata = {
    title: "Job Application Form - Aerialink Inc",
    description: "Job Application Form - Aerialink Inc",
};

export default async function JobApply({ params }) {

    const cookieStore = await cookies();
    const lang = cookieStore.get("lang")?.value ?? 'en';
    const ASSETS_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL;
    const apiData = await getAboutPageData();
    const jobsData = await getJobsData();
    const jobFormData = await getJobsFormData();

    const jobs = jobsData?.content?.jobs?.map((t) => {
        const title = t.slug?.en || "";
        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/gi, "") // special characters hatao
            .trim()
            .replace(/\s+/g, "-"); // spaces ko - se replace karo

        return {
            title: t.title?.[lang] || "",
            exp: t.experience?.[lang] || "",
            description: t.description?.[lang] || "",
            link: slug,
            button: t.button_text?.[lang] || "",
        };
    }) || [];

    return (
        <>
            <JobApplyForm params={params} lang={lang} ASSETS_URL={ASSETS_URL} apiData={apiData} jobs={jobs} jobFormData={jobFormData} />
        </>
    );
}