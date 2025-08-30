"use client";

import FeatureHighlights from '@/components/FeatureHighlights';

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function SliderCards({ slides, options }) {
    return (
        <>
            {
                options == 2 &&
                <div className="hidden lg:block">
                    <div className="grid grid-cols-3 gap-2.5 justify-center">
                        {slides.map((slide, index) => (
                            <FeatureHighlights
                                key={index}
                                imageUrl={slide.imageUrl}
                                title={slide.title}
                                description={slide.description}
                            />
                        ))}
                    </div>
                </div>
            }
            {
                options != 2 &&
                <div className="hidden lg:block">
                    <div className="itemsWrapper">
                        {slides.map((slide, index) => (
                            <FeatureHighlights
                                key={index}
                                imageUrl={slide.imageUrl}
                                title={slide.title}
                                description={slide.description}
                            />
                        ))}
                    </div>
                </div>
            }


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
                        {slides.map((slide, index) => (
                            <SwiperSlide>
                                <FeatureHighlights
                                    key={index}
                                    imageUrl={slide.imageUrl}
                                    title={slide.title}
                                    description={slide.description}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}