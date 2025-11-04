import Breadcrumb from '@/components/Breadcrumb';
import WebCms from '@/components/sliders/WebCms';
import SideBar from '@/components/Sidebar';
import WebTypesWebsite from '@/components/sliders/WebTypesWebsite';
import WebWebsite from '@/components/sliders/WebWebsite';
import Image from 'next/image';
import Link from 'next/link';
import { getWebDevData, getSideBarData, getServicesPageData } from '@/constant/ContentApi';
import { cookies } from "next/headers";
import { CalendlyLink } from '@/constant/constants';

export const metadata = {
    title: "Custom Website Development - Responsive, SEO-Friendly Websites",
    description: "Professional custom website development in Japan. Build responsive, SEO-optimized websites - from corporate portals to e-commerce stores. Transform your online presence with Aerialink.",
    keywords: "custom website development, responsive web design, SEO website, e-commerce development, corporate website, CMS development, WordPress development",
    openGraph: {
        title: "Custom Website Development - Responsive, SEO-Friendly | Aerialink",
        description: "Professional custom website development. Build responsive, SEO-optimized websites - from corporate portals to e-commerce stores.",
        url: "https://www.aerialink.jp/services/custom-website-development",
        images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
    alternates: {
        canonical: "https://www.aerialink.jp/services/custom-website-development",
    },
};

export default async function CustomWebsiteDevelopment() {

    const cookieStore = await cookies();
    const lang = cookieStore.get("lang")?.value ?? 'en';
    const ASSETS_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL;
    const apiData = await getWebDevData();

    const serviceApiData = await getServicesPageData();
    const sideBarData = await getSideBarData();
    console.log({apiData})
    return (
        <div>
            {/* <Breadcrumb /> */}
            <div className='servicePageWrapper'>
                <div className='sideBarWrapper'>
                    <SideBar lang={lang} sideBarData={sideBarData} />
                </div>
                <div className='serviceContentWrapper singleSerivce customWebsiteDevelopment'>
                    <div className="industriesServeMainWrapper webDev">
                        <div className="is-heading gradient-background"><h3>{apiData?.content?.custom_websites_heading?.[lang] || "Custom Websites That Do More Than Look Good"}</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <p className='!font-medium'>
                                    {apiData?.content?.custom_websites_description_1?.[lang] || "Your website is more than a digital brochure – it’s your band’s first impression, your 24/7 sales team, and a key driver of trust. We build responsive high-performance websites that are optimized for search engines and crafted to convert visitors into customers."}
                                </p>
                                <p className='!font-medium mt-2'>
                                    {apiData?.content?.custom_websites_description_2?.[lang] || "Whether you're launching a product, building a brand presence, or scaling your business online, we deliver web experiences that blend design excellence with technical precision."}
                                </p>
                                {/* <Image src="/images/web-dev-image1.png" width={6000} height={6000} alt="banner image" /> */}
                                <video className='mt-4' width="100%" height="240" loop autoPlay muted preload="none">
                                    <source src={ASSETS_URL + (apiData?.content?.custom_websites_video?.[lang] || "/videos/subpage_web_custom.mp4")} type="video/mp4" />
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
                        <div className="is-heading gradient-background"><h3>{apiData?.content?.what_sets_our_website_heading?.[lang] || "What Sets Our Websites Apart"}</h3></div>
                        <div className="mt-5">
                            <WebWebsite apiData={apiData} lang={lang} ASSETS_URL={ASSETS_URL} />
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper industriesServeMainWrapper2 featuresHighlight">
                        <div className="is-heading gradient-background"><h3>{apiData?.content?.types_of_websites_heading?.[lang] || "Types of Websites We Build"}</h3></div>
                        <div className="mt-5">
                            <WebTypesWebsite apiData={apiData} lang={lang} ASSETS_URL={ASSETS_URL} />

                        </div>
                    </div>
                    <div className="industriesServeMainWrapper featuresHighlight cmsWork">
                        <div className="is-heading gradient-background md:p-3 pt-[5px] pb-2.5 px-[18px] md:mb-0 mb-2.5"><h3>{apiData?.content?.cms_and_technology_options_heading?.[lang] || "CMS & Technology Options"}</h3></div>
                        <div className="techIcon">
                            <WebCms />
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper letsBuildToghether">
                        <div className="is-heading gradient-background"><h3>{apiData?.content?.your_project_start_here_heading?.[lang] || "Your Project Start Here"}</h3></div>
                        <div className="isContent">
                            <p className="content !font-medium lg:text-start text-center">
                                {apiData?.content?.your_project_start_here_description?.[lang] || "Whether you're starting from scratch or rebuilding with purpose, we’ll help you create a site that not only looks great — it performs where it counts."}
                            </p>
                            <div className="buttons-wrapper">
                                <Link href={serviceApiData?.content?.web_dev_cta?.en || "#"}>{apiData?.content?.your_project_start_here_button?.[lang] || "Get a Free Website Audit"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}