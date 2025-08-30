"use client";

import FeatureHighlights from '@/components/FeatureHighlights';

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function WebTypesWebsite() {

    const features = [
        {
            imageUrl:"/icons/bullhorn.png",
            title:"Marketing & Brand Websites ",
            description:"Your online presence, built to impress and convert.",
        },
        {
            imageUrl:"/icons/monitor.png",
            title:"Corporate Portals & Intranets",
            description:"Secure, role-based platforms for Internal communications, knowledge sharing, and operations",
        },
        {
            imageUrl:"/icons/ecommerce.png",
            title:"E-commerce Platforms",
            description:"Seamlessly Integrated stores that handle payments, inventory, customer experience and analytics at ease",
        },
        {
            imageUrl:"/icons/ladning-page.png",
            title:"Landing Pages & Microsites",
            description:"Agile web experiences for campaigns, product launches and lead capture",
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