"use client";

import FeatureHighlights from '@/components/FeatureHighlights';

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function AppFeatureHigh() {

    const features = [
        {
            imageUrl: "/icons/cross-platform.png",
            title: "Cross-Platform Development",
            description:
                "Build once, deploy everywhere. We create responsive, consistent experiences across iOS, Android, and the web using modern frameworks like Flutter and React Native.",
        },
        {
            imageUrl: "/icons/backend.png",
            title: "Scalable Backend Architecture",
            description:
                "From custom APIs to secure database structures, we develop reliable backend systems built to grow with your user base and data demands.",
        },
        {
            imageUrl: "/icons/ui-ux.png",
            title: "UX/UI Design That Converts",
            description:
                "Our design-first approach puts users at the center—ensuring every tap, swipe, and click is intuitive, beautiful, and goal-driven.",
        },
        {
            imageUrl: "/icons/integration.png",
            title: "Seamless Integration",
            description:
                "We connect your apps with CRMs, ERPs, payment systems, cloud services, and more for a connected experience that doesn’t disrupt your existing workflow.",
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
                        pagination={{
                            clickable: true,
                        }}
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