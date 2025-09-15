import Breadcrumb from '@/components/Breadcrumb';
import FeatureHighlights from '@/components/FeatureHighlights';
import FeatureHighlights2 from '@/components/FeatureHighlights2';
import SideBar from '@/components/Sidebar';
import Image from 'next/image';
import Link from 'next/link';
import animationData from "../../../public/lottie/rising-chart.json";
import WhyChooseUs2 from '@/components/WhyChooseUs2';
import Circle from '@/components/Circle';
import Platforms from '@/components/sliders/Platforms';
import SliderCards from '@/components/sliders/SliderCards';
import { CalendlyLink } from '@/constant/constants';

import { getDigitalMarketingData, getSideBarData, getServicesPageData } from "@/constant/ContentApi";

import { cookies } from "next/headers";

export const metadata = {
    title: "Digital Marketing - Aerialink Inc",
    description: "Digital Marketing - Aerialink Inc",
};

export default async function DigitalMarketingServices() {

    const cookieStore = await cookies();
    const lang = cookieStore.get("lang")?.value ?? 'en';
    const ASSETS_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL;
    const apiData = await getDigitalMarketingData();
    const sideBarData = await getSideBarData();

    const serviceApiData = await getServicesPageData();
    const services = [
        {
            imageUrl: "/icons/adwords.png",
            title: "Google Ads",
            description: "",
        },
        {
            imageUrl: "/icons/meta.png",
            title: "Meta Ads",
            description: "",
        },
        {
            imageUrl: "/icons/hubspot.png",
            title: "HubSpot",
            description: "",
        },
        {
            imageUrl: "/icons/mailchimp.png",
            title: "Mailchimp",
            description: "",
        },
        {
            imageUrl: "/icons/semrush.png",
            title: "SEMrush",
            description: "",
        },
        {
            imageUrl: "/icons/google-analytics.png",
            title: "GA4",
            description: "",
        },
        {
            imageUrl: "/icons/linkedin.png",
            title: "LinkedIn Ads",
            description: "",
        },
        {
            imageUrl: "/icons/klaviyo.png",
            title: "Klaviyo",
            description: "",
        }
    ];

    const keyFeatures = [
        {
            imageUrl: ASSETS_URL + apiData?.content?.image_content_strategy_image?.[lang] || "/icons/search-engine.png",
            title: apiData?.content?.content_strategy_heading?.[lang] || "SEO & Content Strategy",
            description: apiData?.content?.content_strategy_description?.[lang] || "Be Found. Be Chosen. Be Trusted.",
        },
        {
            imageUrl: ASSETS_URL + apiData?.content?.image_email_marketing_image?.[lang] || "/icons/email-marketing.png",
            title: apiData?.content?.email_marketing_heading?.[lang] || "Email Marketing & Automation",
            description: apiData?.content?.email_marketing_description?.[lang] || "Automated campaigns that drive repeat business",
        },
        {
            imageUrl: ASSETS_URL + apiData?.content?.image_paid_media_image?.[lang] || "/icons/pay-per-click.png",
            title: apiData?.content?.paid_media_heading?.[lang] || "Paid Media (PPC & Display Ads)",
            description: apiData?.content?.paid_media_description?.[lang] || "Maximize ROI with hyper-targeted ad campaigns across major platforms.",
        }
    ];

    return (
        <div>
            {/* <Breadcrumb /> */}
            <div className='servicePageWrapper'>
                <div className='sideBarWrapper'>
                    <SideBar lang={lang} sideBarData={sideBarData} />
                </div>
                <div className='serviceContentWrapper singleSerivce digitalMarketingServices'>
                    <div className="industriesServeMainWrapper webDev">
                        <div className="is-heading gradient-background"><h3>{apiData?.content?.marketing_heading?.[lang] || "Marketing That Moves the Needle"}</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <p className='!font-medium'>
                                    {apiData?.content?.marketing_description_1?.[lang] || "Data-driven digital strategies that turn browsers into buyers, clicks into conversions, and awareness into measurable ROI (Return On Investment)"}
                                </p>
                                <br />
                                <p className='!font-medium'>
                                    {apiData?.content?.marketing_description_2?.[lang] || "We help businesses attract the right audience, convert more leads, and grow revenue through strategic, data-driven digital marketing. Whether you're launching a product, scaling a brand, or fixing underperforming campaigns — we’re your growth partner"}
                                </p>
                                <video className='mt-4' width="100%" height="240" loop muted autoPlay preload="none">
                                    <source src="/videos/subpage_digital.mp4" type="video/mp4" />
                                    <track
                                        kind="subtitles"
                                        srcLang="en"
                                        label="English"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                                {/* <div className='animatedSvg'>
                                    <Lottie animationData={animationData} loop={true} autoplay={true} />
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper serviceType featuresHighlight">
                        <div className="is-heading gradient-background"><h3>{apiData?.content?.service_types_heading?.[lang] || "Service types"}</h3></div>
                        <div className="mt-5">
                            <SliderCards
                                slides={keyFeatures}
                                options="2"
                            />
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper pieChart featuresHighlight cmsWork">
                        <div className="is-heading gradient-background"><h3>{apiData?.content?.funnel_based_solutions_heading?.[lang] || "Funnel-Based Solutions"}</h3></div>
                        <div className="mt-5">
                            <div className="">
                                <Circle apiData={apiData} lang={lang} />
                            </div>
                            <Platforms
                                features={services}
                            />
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper letsBuildToghether">
                        <div className="is-heading gradient-background"><h3>{apiData?.content?.cta_section_heading?.[lang] || "Let’s Build a Digital Marketing Strategy That Works"}</h3></div>
                        <div className="isContent">
                            <p className="content !font-medium lg:text-start text-center">
                                {apiData?.content?.cta_section_description?.[lang] || "We’ll help you generate qualified leads, boost your brand, and track every click. Whether you need a full-service marketing team or campaign-specific support, we’ll craft a strategy built around results."}
                            </p>
                            <div className="buttons-wrapper">
                                <Link href={serviceApiData?.content?.digital_marketing_cta?.en || "#"}>{apiData?.content?.cta_section_button?.[lang] || "Speak to a Strategist"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}