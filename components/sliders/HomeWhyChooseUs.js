'use client';
import WhyChooseUsCard from '@/components/whyChooseUsCard';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from 'swiper/modules';

export default function HomeWhyChooseUs({apiData, lang, ASSETS_URL}) {

    const whyChooseUs = [
        {
            imageUrl: apiData?.content?.image_why_choose_us_card_1_image?.[lang] ? (ASSETS_URL + apiData.content.image_why_choose_us_card_1_image?.[lang]) : "/images/landing_performance.jpg",
            link: "",
            title: apiData?.content?.why_choose_us_card_1_heading?.[lang] || "Performance-Focused Solutions",
            tags: [],
            description:
                apiData?.content?.why_choose_us_card_1_description?.[lang] || "We focus on measurable outcomes – we deliver solutions that drive real business value.",
        },
        {
            imageUrl: apiData?.content?.image_why_choose_us_card_2_image?.[lang] ? (ASSETS_URL + apiData.content.image_why_choose_us_card_2_image?.[lang]) : "/images/landing_expertise.jpg",
            link: "",
            title: apiData?.content?.why_choose_us_card_2_heading?.[lang] || "End-to-End Expertise",
            tags: [],
            description:
                apiData?.content?.why_choose_us_card_2_description?.[lang] || "We off complete digital solutions – from strategy to launch – so you get everything under one roof.",
        },
        {
            imageUrl: apiData?.content?.image_why_choose_us_card_3_image?.[lang] ? (ASSETS_URL + apiData.content.image_why_choose_us_card_3_image?.[lang]) : "/images/landing_support.jpg",
            link: "",
            title: apiData?.content?.why_choose_us_card_3_heading?.[lang] || "Reliable Support & Partnership",
            tags: [],
            description:
                apiData?.content?.why_choose_us_card_3_description?.[lang] || "We don’t just delivery projects – we build long-term relationships with proactive support and honest communication.",
        },
    ];

    return (
        <>
            {/* For Desktop */}
            <div className='hidden lg:block'>
                <div className="cardWrappers">
                    {whyChooseUs.map((item, index) => (
                        <WhyChooseUsCard
                            key={index}
                            imageUrl={item.imageUrl}
                            link={item.link}
                            title={item.title}
                            tags={item.tags}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
            {/* For Mobile */}
            <div className='block lg:hidden'>
                <div className="cardWrappers !flex">
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
                        {whyChooseUs.map((item, index) => (
                            <SwiperSlide>
                                <WhyChooseUsCard
                                    key={index}
                                    imageUrl={item.imageUrl}
                                    link={item.link}
                                    title={item.title}
                                    tags={item.tags}
                                    description={item.description}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}