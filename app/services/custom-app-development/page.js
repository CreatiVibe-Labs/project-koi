import AppFeatureHigh from '@/components/sliders/AppFeatureHigh';
import SideBar from '@/components/Sidebar';
import Link from 'next/link';
import { CalendlyLink } from '@/constant/constants';
import { getAppDevData, getSideBarData } from '@/constant/ContentApi';
import { cookies } from "next/headers";

export const metadata = {
    title: "Custom App Development - Aerialink Inc",
    description: "Custom App Development - Aerialink Inc",
};

export default async function CustomAppDevelopment() {

    const cookieStore = await cookies();
    const lang = cookieStore.get("lang")?.value ?? 'en';
    const ASSETS_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL;
    const apiData = await getAppDevData();
    const sideBarData = await getSideBarData();

    return (
        <div>
            {/* <Breadcrumb /> */}
            <div className='servicePageWrapper singleSerivce customAppDevelopment'>
                <div className='sideBarWrapper'>
                    <SideBar lang={lang} sideBarData={sideBarData} />
                </div>
                <div className='serviceContentWrapper'>
                    <div className="industriesServeMainWrapper md:mt0 !mt-2">
                        <div className="is-heading gradient-background"><h3>{apiData?.content?.tailored_solutions_heading?.[lang] || "Tailored Solutions That Work the Way You Do"}</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <p className='!font-medium'>
                                    {apiData?.content?.tailored_solutions_description?.[lang] || "From ideas to deployment, we design and build high-performance web, mobile, and desktop applications that fit your business—no bloat, no guesswork. Whether you’re automating workflows, launching a customer-facing app, or modernizing legacy systems, we align technology with your vision to deliver real results."}
                                </p>
                                <video className='mt-4' width="100%" height="240" loop muted autoPlay preload="none">
                                    <source src={ASSETS_URL + (apiData?.content?.tailored_solutions_video?.[lang] || "/videos/subpage_app_custom.mp4")} type="video/mp4" />
                                    <track
                                        kind="subtitles"
                                        srcLang="en"
                                        label="English"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper featuresHighlight">
                        <div className="is-heading gradient-background"><h3>{apiData?.content?.featured_highlights_heading?.[lang] || "Feature Highlights"}</h3></div>
                        <div className="mt-5">
                            <AppFeatureHigh lang={lang} ASSETS_URL={ASSETS_URL} apiData={apiData} />
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper letsBuildToghether">
                        <div className="is-heading gradient-background"><h3>{apiData?.content?.lets_build_yours_heading?.[lang] || "Let’s Build Yours"}</h3></div>
                        <div className="isContent">
                            <p className="content !font-medium">
                                {apiData?.content?.lets_build_yours_description?.[lang] || "Whether you need an internal tool, a customer portal, or a full-scale SaaS platform, we’re here to turn your ideas into powerful, working software."}
                            </p>
                            <div className="buttons-wrapper">
                                <Link href="https://calendly.com/dashboard-aerialink/app-design" target='_blank'>{apiData?.content?.lets_build_yours_button?.[lang] || "Book a Free Consultation"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}