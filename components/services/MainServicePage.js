"use client";

import Image from "next/image";
import Link from 'next/link';
import MainServicesCard from '@/components/services/MainServicesCard';
import WhyChooseUsCard from '@/components/whyChooseUsCard';
import FeatureHighlights2 from '@/components/FeatureHighlights2';
import WhyChooseUs from "@/components/WhyChooseUs";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import HowItWorks from "@/components/HowItWorks";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function MainServicePage({ lang, ASSETS_URL, apiData }) {
    
    const pathname = usePathname();

    useEffect(() => {
        const hash = window.location.hash.replace("#", "");
        if (hash) {
            const el = document.getElementById(hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth", block: "center" });
                }, 100);
            }
        }
    }, []);
    return (
        <>
            <div className="service-hero-section">
                <div className="content-section">
                    <h1>{apiData?.content?.hero_section_heading?.[lang] || "Bridging Today’s Needs with Tomorrow’s Tech"}</h1>
                    <p className="!font-medium !mt-8">{apiData?.content?.hero_section_description?.[lang] || "We design and build custom digital tools that align with your exact needs — from secure cloud migrations to purpose-built applications"}</p>
                    <span className="2text-content md:!mt-6 mt-2">
                        <p className="white-text">
                            <Image alt="image" src="/icons/tick.png" width={20} height={10}></Image>
                            {apiData?.content?.icon_1?.[lang] || "SMEs friendly"}
                        </p>
                        <p className="white-text">
                            <Image alt="image" src="/icons/tick.png" width={60} height={60}></Image>
                            {apiData?.content?.icon_2?.[lang] || "Cost efficient"}
                        </p>
                    </span>
                    <div className="buttons-wrapper md:!mt-[65px] mt-3">
                        <Link href="#">{apiData?.content?.cta?.[lang] || "Talk to a Solutions Expert"}</Link>
                    </div>
                </div>
            </div>

            <div className="ServicesCardsWrapper mainServicesContent">
                <div className="ServicesCardsHeading gradient-background"><h2>{apiData?.content?.featured_solutions_heading?.[lang] || "Featured Solutions"}</h2></div>
                <div className="ServicesCardsContent services-videos">
                    <MainServicesCard
                        Icon="/icons/app-development.png"
                        bgImage=""
                        video={ASSETS_URL + apiData?.content?.video_service_1_video?.[lang] || "/videos/service_app_custom.mp4"}
                        Button={apiData?.content?.service_1_button?.[lang] || "Learn More"}
                        LinkURL="/services/custom-app-development/"
                        Heading={apiData?.content?.service_1_heading?.[lang] || "Custom Software / App Development"}
                        Description={apiData?.content?.service_1_description?.[lang] || "Tailored desktop, mobile, and backend applications built around your workflow"}
                    />
                    <MainServicesCard
                        Icon="/icons/web-development.png"
                        bgImage=""
                        video={ASSETS_URL + apiData?.content?.video_service_2_video?.[lang] || "/videos/service_web_custom.mp4"}
                        Button={apiData?.content?.service_2_button?.[lang] || "Learn More"}
                        LinkURL="/services/custom-website-development/"
                        Heading={apiData?.content?.service_2_heading?.[lang] || "Custom Website Development"}
                        Description={apiData?.content?.service_2_description?.[lang] || "Responsive, high-performance websites that reflect your brand and business needs"}
                    />
                    <MainServicesCard
                        Icon="/icons/cloud-migration.png"
                        bgImage=""
                        video={ASSETS_URL + apiData?.content?.video_service_3_video?.[lang] || "/videos/service_cloud.mp4"}
                        Button={apiData?.content?.service_3_button?.[lang] || "Learn More"}
                        LinkURL="/services/cloud-migration-services/"
                        Heading={apiData?.content?.service_3_heading?.[lang] || "Cloud Migration & Storage Services"}
                        Description={apiData?.content?.service_3_description?.[lang] || "Secure and seamless migration of your data, applications and workloads to the cloud, with zero downtime."}
                    />
                    <MainServicesCard
                        Icon="/icons/ai-powered.png"
                        bgImage=""
                        video={ASSETS_URL + apiData?.content?.video_service_4_video?.[lang] || "/videos/service_ai.mp4"}
                        Button={apiData?.content?.service_4_button?.[lang] || "Learn More"}
                        LinkURL="/services/ai-powered-solutions/"
                        Heading={apiData?.content?.service_4_heading?.[lang] || "AI Powered Solutions & Machine Learning/" }
                        Description={apiData?.content?.service_4_description?.[lang] || "From predictive analytics to custom ML model training — harness the power of AI to drive smarter decisions." }
                    />
                    <MainServicesCard
                        Icon="/icons/it-services.png"
                        bgImage=""
                        video={ASSETS_URL + apiData?.content?.video_service_5_video?.[lang] || "/videos/service_it.mp4"}
                        Button={apiData?.content?.service_5_button?.[lang] || "Learn More"}
                        LinkURL="/services/managed-it-services-consulting/"
                        Heading={apiData?.content?.service_5_heading?.[lang] || "Managed IT Services & Consulting"}
                        Description={apiData?.content?.service_5_description?.[lang] || "Expert IT support and strategic consulting for businesses of all sizes—with a special focus on the unique needs of SMEs. Scalable, affordable, and designed to grow with you."}
                    />
                    <MainServicesCard
                        Icon="/icons/digital-marketing.png"
                        bgImage=""
                        video={ASSETS_URL + apiData?.content?.video_service_6_video?.[lang] || "/videos/service_digital.mp4"}
                        Button={apiData?.content?.service_6_button?.[lang] || "Learn More"}
                        LinkURL="/services/digital-marketing-services/"
                        Heading={apiData?.content?.service_6_heading?.[lang] || "Digital Marketing"}
                        Description={apiData?.content?.service_6_description?.[lang] || "From predictive analytics to custom ML model training — harness the power of AI to drive smarter decisions."}
                    />

                </div>
            </div>

            <div className="whyCHooseUsWrapper" id="how-it-works">
                <div className="whyChooseUsHeading gradient-background"><h2>{apiData?.content?.how_it_works_heading?.[lang] || "How It Works"}</h2></div>
                <div className="whyChooseUsCardContents howItWorksWrapper items-center justify-center relative serviceWhy">
                    <HowItWorks lang={lang} ASSETS_URL={ASSETS_URL} apiData={apiData} />
                </div>
            </div>

            <div className="industriesServeMainWrapper featuresHighlight cmsWork cmsWork2">
                <div className=" gradient-background text-[#c3f8d9] lg:text-[40px] md:text-[24px] text-[20px] font-bold md:p-3 pt-[5px] pb-2.5 px-[18px] rounded-2xl lg:mb-0 mb-2.5"><h3>{apiData?.content?.tech_stack?.[lang] || "Tech Stack"}</h3></div>
                <div className="hidden lg:block">
                    <div className="itemsWrapper ">
                        <FeatureHighlights2
                            imageUrl="/icons/react.png"
                            title="React"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/nodejs.png"
                            title="Node.js"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/net.png"
                            title=".NET"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/python.png"
                            title="Python"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/c++.png"
                            title="C++"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/go.webp"
                            title="Golang"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/mongodb.svg"
                            title="MongoDB"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/postgresql.png"
                            title="MySQL"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/firebase.svg"
                            title="Firebase"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/aws.png"
                            title="AWS"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/azure.png"
                            title="Azure"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/tensorflow.png"
                            title="TensorFlow"
                            description=""
                        />
                    </div>
                </div>
                <div className="block lg:hidden">
                    <div className="itemsWrapper !block techIcon">
                        <Swiper
                            spaceBetween={16}        // gap between slides
                            slidesPerView="auto"        // default (desktop)
                            autoplay={{ delay: 3000 }} // autoplay enabled
                            loop={true}
                            // pagination={{
                            //     clickable: false,
                            // }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            breakpoints={{
                                768: {
                                    slidesPerView: 6,    // tablet & desktop → 3 slides
                                },
                                426: {
                                    slidesPerView: 3.5,    // tablet (426–1023px) → 3 slides
                                },
                                0: {
                                    slidesPerView: 3,  // mobile (<426px) → 1.2 slides
                                },
                            }}
                        >
                            <SwiperSlide>
                                <FeatureHighlights2
                                    imageUrl="/icons/react.png"
                                    title="React"
                                    description=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <FeatureHighlights2
                                    imageUrl="/icons/nodejs.png"
                                    title="Node.js"
                                    description=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <FeatureHighlights2
                                    imageUrl="/icons/net.png"
                                    title=".NET"
                                    description=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <FeatureHighlights2
                                    imageUrl="/icons/python.png"
                                    title="Python"
                                    description=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <FeatureHighlights2
                                    imageUrl="/icons/c++.png"
                                    title="C++"
                                    description=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <FeatureHighlights2
                                    imageUrl="/icons/go.webp"
                                    title="Golang"
                                    description=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <FeatureHighlights2
                                    imageUrl="/icons/mongodb.svg"
                                    title="MongoDB"
                                    description=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <FeatureHighlights2
                                    imageUrl="/icons/postgresql.png"
                                    title="MySQL"
                                    description=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <FeatureHighlights2
                                    imageUrl="/icons/firebase.svg"
                                    title="Firebase"
                                    description=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <FeatureHighlights2
                                    imageUrl="/icons/aws.png"
                                    title="AWS"
                                    description=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <FeatureHighlights2
                                    imageUrl="/icons/azure.png"
                                    title="Azure"
                                    description=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <FeatureHighlights2
                                    imageUrl="/icons/tensorflow.png"
                                    title="TensorFlow"
                                    description=""
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <div className="StillThinkingMainWrapper industriesServeMainWrapper">
                <div className="stContent">
                    <p className="heading-1 mb-4 text-center">
                        {apiData?.content?.title?.[lang] || "Ready to Streamline Your IT Operations?"}
                    </p>
                    <div className="buttons-wrapper ga">
                        <Link href="#">{apiData?.content?.cta_1?.[lang] || "Contact Us"}</Link>
                        <Link href="#">{apiData?.content?.cta_2?.[lang] || "Schedule an Assessment"}</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
