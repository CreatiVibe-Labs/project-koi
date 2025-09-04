"use client";

import FeatureHighlights from '@/components/FeatureHighlights';

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function WebTypesWebsite({lang, ASSETS_URL, apiData}) {

    const features = [
        {
            imageUrl: ASSETS_URL + (apiData?.content?.image_marketing_image?.[lang] || "/icons/bullhorn.png"),
            title: apiData?.content?.marketing_heading?.[lang] || "Marketing & Brand Websites ",
            description: apiData?.content?.marketing_description?.[lang] || "Your online presence, built to impress and convert.",
        },
        {
            imageUrl: ASSETS_URL + (apiData?.content?.image_corporate_portals_image?.[lang] || "/icons/monitor.png"),
            title: apiData?.content?.corporate_portals_heading?.[lang] || "Corporate Portals & Intranets",
            description: apiData?.content?.corporate_portals_description?.[lang] || "Secure, role-based platforms for Internal communications, knowledge sharing, and operations",
        },
        {
            imageUrl: ASSETS_URL + (apiData?.content?.image_ecommerce_image?.[lang] || "/icons/ecommerce.png"),
            title: apiData?.content?.ecommerce_heading?.[lang] || "E-commerce Platforms",
            description: apiData?.content?.ecommerce_description?.[lang] || "Seamlessly Integrated stores that handle payments, inventory, customer experience and analytics at ease",
        },
        {
            imageUrl: ASSETS_URL + (apiData?.content?.image_landing_pages_image?.[lang] || "/icons/ladning-page.png"),
            title: apiData?.content?.landing_pages_heading?.[lang] || "Landing Pages & Microsites",
            description: apiData?.content?.landing_pages_description?.[lang] || "Agile web experiences for campaigns, product launches and lead capture",
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