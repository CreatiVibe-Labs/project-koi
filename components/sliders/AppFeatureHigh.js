"use client";

import FeatureHighlights from '@/components/FeatureHighlights';

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function AppFeatureHigh({lang, ASSETS_URL, apiData}) {

    const features = [
        {
            imageUrl: ASSETS_URL + apiData?.content?.image_cross_platform_image?.[lang] || "/icons/cross-platform.png",
            title: apiData?.content?.cross_platform_heading?.[lang] || "Cross-Platform Development",
            description:
                apiData?.content?.cross_platform_description?.[lang] || "Build once, deploy everywhere. We create responsive, consistent experiences across iOS, Android, and the web using modern frameworks like Flutter and React Native.",
        },
        {
            imageUrl: ASSETS_URL + apiData?.content?.image_backend_architecture_image?.[lang] || "/icons/backend.png",
            title: apiData?.content?.backend_architecture_heading?.[lang] || "Scalable Backend Architecture",
            description:
                apiData?.content?.backend_architecture_description?.[lang] || "From custom APIs to secure database structures, we develop reliable backend systems built to grow with your user base and data demands.",
        },
        {
            imageUrl: ASSETS_URL + apiData?.content?.image_ui_ux_image?.[lang] || "/icons/ui-ux.png",
            title: apiData?.content?.ui_ux_heading?.[lang] || "UX/UI Design That Converts",
            description:
                apiData?.content?.ui_ux_description?.[lang] || "Our design-first approach puts users at the center—ensuring every tap, swipe, and click is intuitive, beautiful, and goal-driven.",
        },
        {
            imageUrl: ASSETS_URL + apiData?.content?.image_integration_image?.[lang] || "/icons/integration.png",
            title: apiData?.content?.integration_heading?.[lang] || "Seamless Integration",
            description:
                apiData?.content?.integration_description?.[lang] || "We connect your apps with CRMs, ERPs, payment systems, cloud services, and more for a connected experience that doesn’t disrupt your existing workflow.",
        },
    ];

    return (
        <>
            <div className="hidden lg:block">
                <div className="itemsWrapper">
                    {features.map((feature, index) => (
                        <FeatureHighlights
                            key={index}
                            imageUrl={feature.imageUrl}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
            <div className="block lg:hidden">
                <div className="itemsWrapper !block">
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
                                slidesPerView: 3,    // tablet & desktop → 3 slides
                            },
                            426: {
                                slidesPerView: 2,    // tablet (426–1023px) → 3 slides
                            },
                            0: {
                                slidesPerView: 1.5,  // mobile (<426px) → 1.2 slides
                            },
                        }}
                    >
                        {features.map((feature, index) => (
                            <SwiperSlide>
                                <FeatureHighlights
                                    key={index}
                                    imageUrl={feature.imageUrl}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}