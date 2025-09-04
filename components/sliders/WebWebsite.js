"use client";

import FeatureHighlights from '@/components/FeatureHighlights';

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function WebWebsite({lang, ASSETS_URL, apiData}) {

    const features = [
        {
            imageUrl: ASSETS_URL + (apiData?.content?.image_perfomance_image?.[lang] || "/icons/search-engine.png"),
            title: apiData?.content?.perfomance_heading?.[lang] || "Performance and Search Engine Optimization",
            description: apiData?.content?.perfomance_description?.[lang] || "Built from the ground up for performance and visibility — every line of code matters.",
        },
        {
            imageUrl: ASSETS_URL + (apiData?.content?.image_content_management_image?.[lang] || "/icons/cms.png"),
            title: apiData?.content?.content_management_heading?.[lang] || "Content Management System Integration",
            description: apiData?.content?.content_management_description?.[lang] || "Take full control of your content. From WordPress to headless CMS platforms like Sanity and Contentful, manage your content your way.",
        },
        {
            imageUrl: ASSETS_URL + (apiData?.content?.image_responsive_design_image?.[lang] || "/icons/responsive.png"),
            title: apiData?.content?.responsive_design_heading?.[lang] || "Fully Responsive Design Across Devices",
            description: apiData?.content?.responsive_design_description?.[lang] || "Flawless display on all screen sizes – from desktop to mobile – ensuring a polished, professional experience everywhere.",
        },
        {
            imageUrl: ASSETS_URL + (apiData?.content?.image_conversion_image?.[lang] || "/icons/website.png"),
            title: apiData?.content?.conversion_heading?.[lang] || "Conversion-Focused UX",
            description: apiData?.content?.conversion_description?.[lang] || "We blend form and function to guide visitors toward action — whether that’s buying, booking, or reaching out.",
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
                        //     clickable: true,
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