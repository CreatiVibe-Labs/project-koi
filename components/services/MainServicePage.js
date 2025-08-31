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

export default function MainServicePage() {

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
                    <h1>Bridging Today’s Needs with Tomorrow’s Tech</h1>
                    <p className="!font-medium !mt-8">We design and build custom digital tools that align with your exact needs — from secure cloud migrations to purpose-built applications</p>
                    <span className="2text-content md:!mt-6 mt-2">
                        <p className="white-text">
                            <Image alt="image" src="/icons/tick.png" width={20} height={10}></Image>
                            SMEs friendly
                        </p>
                        <p className="white-text">
                            <Image alt="image" src="/icons/tick.png" width={60} height={60}></Image>
                            Cost efficient
                        </p>
                    </span>
                    <div className="buttons-wrapper md:!mt-[65px] mt-3">
                        <Link href="#">Talk to a Solutions Expert</Link>
                    </div>
                </div>
            </div>

            <div className="ServicesCardsWrapper">
                <div className="ServicesCardsHeading gradient-background"><h2>Featured Solutions</h2></div>
                <div className="ServicesCardsContent services-videos">
                    <MainServicesCard
                        Icon="/icons/app-development.png"
                        bgImage=""
                        video="/videos/service_app_custom.mp4"
                        LinkURL="/services/custom-app-development/"
                        Heading="Custom Software / App Development"
                        Description="Tailored desktop, mobile, and backend applications built around your workflow"
                    />
                    <MainServicesCard
                        Icon="/icons/web-development.png"
                        bgImage=""
                        video="/videos/service_web_custom.mp4"
                        LinkURL="/services/custom-website-development/"
                        Heading="Custom Website Development"
                        Description="Responsive, high-performance websites that reflect your brand and business needs"
                    />
                    <MainServicesCard
                        Icon="/icons/cloud-migration.png"
                        bgImage=""
                        video="/videos/service_cloud.mp4"
                        LinkURL="/services/cloud-migration-services/"
                        Heading="Cloud Migration & Storage Services"
                        Description="Secure and seamless migration of your data, applications and workloads to the cloud, with zero downtime."
                    />
                    <MainServicesCard
                        Icon="/icons/ai-powered.png"
                        bgImage=""
                        video="/videos/service_ai.mp4"
                        LinkURL="/services/ai-powered-solutions/"
                        Heading="AI Powered Solutions & Machine Learning/"
                        Description="From predictive analytics to custom ML model training — harness the power of AI to drive smarter decisions."
                    />
                    <MainServicesCard
                        Icon="/icons/it-services.png"
                        bgImage=""
                        video="/videos/service_it.mp4"
                        LinkURL="/services/managed-it-services-consulting/"
                        Heading="Managed IT Services & Consulting"
                        Description="Expert IT support and strategic consulting for businesses of all sizes—with a special focus on the unique needs of SMEs. Scalable, affordable, and designed to grow with you."
                    />
                    <MainServicesCard
                        Icon="/icons/digital-marketing.png"
                        bgImage=""
                        video="/videos/service_digital.mp4"
                        LinkURL="/services/digital-marketing-services/"
                        Heading="Digital Marketing"
                        Description="From predictive analytics to custom ML model training — harness the power of AI to drive smarter decisions."
                    />

                </div>
            </div>

            <div className="whyCHooseUsWrapper" id="how-it-works">
                <div className="whyChooseUsHeading gradient-background"><h2>How It Works</h2></div>
                {/* <div className="whyChooseUsCardContents">
                    <p className="wcu-heading">
                        <span className="heading-1 block mb-2">Smart IT Solutions with Real Business Benefits</span>
                        <span className="heading-2">We don’t just provide services – we deliver results. Here’s what you can expect when you partner with us.</span></p>
                    <div className="cardWrappers">
                        <WhyChooseUsCard
                            imageUrl="/images/why-choose-1.png"
                            link="#"
                            title="End-to-End Expertise"
                            tags={['3D', 'AR/VR/MR', '2D']}
                            description="We off complete digital solutions – from strategy to launch – so you get everything under one roof."
                        />
                        <WhyChooseUsCard
                            imageUrl="/images/why-choose-2.png"
                            link="#"
                            title="Performance-Focused Solutions"
                            tags={['3D', 'AR/VR/MR', '2D']}
                            description="We focus on measurable outcomes – we deliver solutions that drive real business value."
                        />
                        <WhyChooseUsCard
                            imageUrl="/images/why-choose-3.png"
                            link="#"
                            title="Reliable Support & Partnership"
                            tags={['3D', 'AR/VR/MR', '2D']}
                            description="We don’t just delivery projects – we build long-term relationships with proactive support and honest communication."
                        />
                    </div>
                </div> */}
                {/* <div className="whyChooseUsCardContents items-center justify-center relative serviceWhy">
                    <WhyChooseUs />
                </div> */}
                <div className="whyChooseUsCardContents howItWorksWrapper items-center justify-center relative serviceWhy">
                    <HowItWorks />
                </div>
            </div>

            <div className="industriesServeMainWrapper featuresHighlight cmsWork cmsWork2">
                <div className=" gradient-background text-[#c3f8d9] md:text-[40px] text-[20px] font-bold p-3 rounded-2xl"><h3>Tech Stack</h3></div>
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
                        Ready to Streamline Your IT Operations?
                    </p>
                    <div className="buttons-wrapper ga">
                        <Link href="#">Contact Us</Link>
                        <Link href="#">Schedule an Assessment</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
