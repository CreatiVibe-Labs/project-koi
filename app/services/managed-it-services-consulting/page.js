import Breadcrumb from '@/components/Breadcrumb';
import FeatureHighlights from '@/components/FeatureHighlights';
import ReviewSlider from '@/components/ReviewSlider';
import SideBar from '@/components/Sidebar';
import { CalendlyLink } from '@/constant/constants';
import Image from 'next/image';
import Link from 'next/link';
import { getItServicesData, getTestimonials, getSideBarData, getServicesPageData } from "@/constant/ContentApi";

import { cookies } from "next/headers";

export const metadata = {
    title: "Managed IT Services & Consulting - 24/7 Support & Strategic IT",
    description: "Comprehensive managed IT services and consulting in Japan. 24/7 technical support, infrastructure management, cybersecurity, and strategic IT planning for businesses of all sizes.",
    keywords: "managed IT services, IT consulting, IT support, infrastructure management, cybersecurity, IT strategy, technical support Japan",
    openGraph: {
        title: "Managed IT Services & Consulting - 24/7 Support | Aerialink",
        description: "Comprehensive managed IT services. 24/7 support, infrastructure management, cybersecurity, and strategic IT planning.",
        url: "https://www.aerialink.jp/services/managed-it-services-consulting",
        images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
    alternates: {
        canonical: "https://www.aerialink.jp/services/managed-it-services-consulting",
    },
};

export default async function managedItServices() {

    const cookieStore = await cookies();
    const lang = cookieStore.get("lang")?.value ?? 'en';
    const ASSETS_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL;
    const apiData = await getItServicesData();
    const testimonials = await getTestimonials();

    const serviceApiData = await getServicesPageData();

    const sideBarData = await getSideBarData();

    const quotes = testimonials?.content?.testimonials?.map((t) => ({
        name: t.name?.[lang] || "",
        review: t.review?.[lang] || "",
        designation: t.designation?.[lang] || "",
    })) || [];

    return (
        <div>
            {/* <Breadcrumb /> */}
            <div className='servicePageWrapper'>
                <div className='sideBarWrapper'>
                    <SideBar lang={lang} sideBarData={sideBarData} />
                </div>
                <div className='serviceContentWrapper'>
                    <div className="industriesServeMainWrapper webDev">
                        <div className="is-heading gradient-background"><h3>{apiData?.content?.reliable_IT_heading?.[lang] || "Reliable IT, Strategic Insight — Without the Overhead"}</h3></div>
                        <div className="isContent">
                            <div className="itemsWrapper">
                                <p className='!font-medium'>
                                    {apiData?.content?.reliable_IT_description?.[lang] || "We help businesses stay focused on what they do best by taking care of their technology — from hands-on support to long-term planning. Whether you need a full-service IT partner or expert guidance for a specific challenge, we’re here to keep your systems secure, efficient, and future-ready."}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper">
                        <div className="is-heading gradient-background "><h3>{apiData?.content?.service_highlights_main_heading?.[lang] || "Service Highlight"}</h3></div>
                        <div className="mt-5">
                            <div className="itemsWrapper manageIT ServiceHighlight">
                                <div className='duoColumns flex-row gap-3'>
                                    <div className='duoColumn1 isContent border rounded-xl shadow-sm p-3'>
                                        <div className='contentWrapper'>
                                            <div className='border rounded-xl shadow-sm p-3 font-bold mb-2.5'><h3>{apiData?.content?.service_highlights_heading_1?.[lang] || "Stress-Free IT Support for Small and Midsize Teams"}</h3></div>
                                            <div className='md:p-3 p-2'>
                                                <h4 className='font-bold'>{apiData?.content?.key_features?.[lang] || "Key Features:"}</h4>
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title={apiData?.content?.monitoring_heading?.[lang] || "24/7 Monitoring & Support"}
                                                    description={apiData?.content?.monitoring_description?.[lang] || "Our team proactively monitors your infrastructure to catch issues before they cause downtime. When something breaks, we’re just a call or clickaway"}
                                                />
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title={apiData?.content?.endpoint_heading?.[lang] || "Endpoint Management"}
                                                    description={apiData?.content?.endpoint_description?.[lang] || "We manage updates, patches, antivirus, and backups across every user device — ensuring your workforce stays protected and productive."}
                                                />
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title={apiData?.content?.server_and_network_heading?.[lang] || "Server & Network Administration"}
                                                    description={apiData?.content?.server_and_network_description?.[lang] || "From cloud servers to office networks, we ensure your systems run fast, stay secure, and scale smoothly as your business grows."}
                                                />
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title={apiData?.content?.helpdesk_heading?.[lang] || "Helpdesk Services"}
                                                    description={apiData?.content?.helpdesk_description?.[lang] || "Get fast, reliable support from real technicians — no phone trees or long waits. We resolve most user issues in minutes, not hours."}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lineglow"></div>
                                    <div className='duoColumn2 isContent border rounded-xl shadow-sm p-3'>
                                        <div className='contentWrapper'>
                                            <div className='border rounded-xl shadow-sm p-3 font-bold mb-2.5'><h3>{apiData?.content?.service_highlights_heading_2?.[lang] || "Expert Guidance for Smarter IT Decisions"}
                                            </h3></div>
                                            <div className='md:p-3 p-2'>
                                                <h4 className='font-bold'>{apiData?.content?.key_features?.[lang] || "Key Features:"}</h4>
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title={apiData?.content?.technology_heading?.[lang] || "Technology Strategy & Planning"}
                                                    description={apiData?.content?.technology_description?.[lang] || "We align your IT infrastructure with your business goals — helping you plan smarter, budget better, and avoid tech debt."}
                                                />
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title={apiData?.content?.infrastructure_heading?.[lang] || "Infrastructure Audits"}
                                                    description={apiData?.content?.infrastructure_description?.[lang] || "Get a detailed view of what's working, what's not, and how to strengthen your systems for reliability and compliance."}
                                                />
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title={apiData?.content?.vendor_heading?.[lang] || "Vendor & Tool Selection"}
                                                    description={apiData?.content?.vendor_description?.[lang] || "From software platforms to cloud providers, we help you choose solutions that fit your business — and avoid the ones that don’t."}
                                                />
                                                <FeatureHighlights
                                                    imageUrl=""
                                                    title={apiData?.content?.cybersecurity_heading?.[lang] || "Cybersecurity Advisory"}
                                                    description={apiData?.content?.cybersecurity_description?.[lang] || "Stay ahead of risks with expert assessments, compliance support (like HIPAA or ISO 27001), and actionable risk mitigation strategies."}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="whyCHooseUsWrapper coreValues">
                        <div className="whyChooseUsHeading gradient-background"><h2>{apiData?.content?.what_our_clients_say_heading?.[lang] || "What Our Clients Say"}</h2></div>
                        <div className="whyChooseUsCardContents">
                            <div className='cardWrappers reviewslider'>
                                <ReviewSlider
                                    reviews={quotes}
                                    color={'text-[#FF5F1F]'}
                                    size={"text-3xl"}
                                    containerClass={'min-h-[250px]'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="industriesServeMainWrapper letsBuildToghether">
                        <div className="is-heading gradient-background">
                            <h4 className='font-bold text-[26px]'>{apiData?.content?.flexible_plans_heading?.[lang] || "Flexible Plans That Fit Your Business — Let’s Make IT Your Advantage"}</h4>
                        </div>
                        <div className="isContent">
                            <p className="content !font-medium lg:text-start text-center">
                                {apiData?.content?.flexible_plans_description?.[lang] || "Choose a plan or customize your own. Pay only for what you need"}
                            </p>
                            <div className="buttons-wrapper">
                                <Link href={serviceApiData?.content?.it_service_cta?.en || "#"}>{apiData?.content?.flexible_plans_button?.[lang] || "Request a Free Analysis"}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}