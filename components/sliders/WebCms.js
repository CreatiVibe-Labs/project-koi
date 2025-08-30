"use client";

import FeatureHighlights2 from '@/components/FeatureHighlights2';

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function WebCms() {

    const features = [
        {
            imageUrl: "/icons/wordpress.png",
            title: "WordPress",
            description: "",
        },
        {
            imageUrl: "/icons/webflow.png",
            title: "Webflow",
            description: "",
        },
        {
            imageUrl: "/icons/sanity.png",
            title: "Sanity",
            description: "",
        },
        {
            imageUrl: "/icons/strapi.png",
            title: "Strapi",
            description: "",
        },
        {
            imageUrl: "/icons/contentful.png",
            title: "Contentful",
            description: "",
        },
        {
            imageUrl: "/icons/jamstack.png",
            title: "Jamstack",
            description: "",
        },
        {
            imageUrl: "/icons/shopify.png",
            title: "Shopify",
            description: "",
        },
        {
            imageUrl: "/icons/nextjs.png",
            title: "Next.js",
            description: "",
        },
    ];


    return (
        <>
            <div className="hidden lg:block">
                <div className="itemsWrapper">
                    {features.map((feature, index) => (
                        <FeatureHighlights2
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
                        {features.map((feature, index) => (
                            <SwiperSlide>
                                <FeatureHighlights2
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