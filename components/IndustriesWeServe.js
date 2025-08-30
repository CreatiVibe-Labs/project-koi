'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function IndustriesWeServe({ apiData, lang, ASSETS_URL }) {

    const industries = [
        {
            img: apiData?.content?.image_manufacture_image?.[lang] ? (ASSETS_URL + apiData.content.image_manufacture_image?.[lang]) : "/icons/industries8.png",
            text: apiData?.content?.manufacture?.[lang] || "Manufacture"
        },
        {
            img: apiData?.content?.["image_imp/exp_image"]?.[lang]
                ? (ASSETS_URL + apiData.content["image_imp/exp_image"]?.[lang])
                : "/icons/industries7.png",
            text: apiData?.content["imp/exp"]?.[lang] || "Imp / Exp"
        }, {
            img: apiData?.content?.image_logistic_image?.[lang] ? (ASSETS_URL + apiData.content.image_logistic_image?.[lang]) : "/icons/industries9.png",
            text: apiData?.content?.logistic?.[lang] || "Logistics"
        },
        {
            img: apiData?.content?.image_retail_image?.[lang] ? (ASSETS_URL + apiData.content.image_retail_image?.[lang]) : "/icons/industries2.png",
            text: apiData?.content?.retail?.[lang] || "Retail"
        },
        {
            img: apiData?.content?.image_finance_image?.[lang] ? (ASSETS_URL + apiData.content.image_finance_image?.[lang]) : "/icons/industries11.png",
            text: apiData?.content?.finance?.[lang] || "Finance"
        },
        {
            img: apiData?.content?.image_professional_image?.[lang] ? (ASSETS_URL + apiData.content.image_professional_image?.[lang]) : "/icons/industries10.png",
            text: apiData?.content?.professional?.[lang] || "Professional"
        },
        {
            img: apiData?.content?.image_schools_image?.[lang] ? (ASSETS_URL + apiData.content.image_schools_image?.[lang]) : "/icons/industries1.png",
            text: apiData?.content?.schools?.[lang] || "Schools"
        },
        {
            img: apiData?.content?.image_health_service_image?.[lang] ? (ASSETS_URL + apiData.content.image_health_service_image?.[lang]) : "/icons/industries3.png",
            text: apiData?.content?.health_service?.[lang] || "Health Service"
        },
        {
            img: apiData?.content?.image_food_service_image?.[lang] ? (ASSETS_URL + apiData.content.image_food_service_image?.[lang]) : "/icons/industries6.png",
            text: apiData?.content?.food_service?.[lang] || "Food Service"
        },
        {
            img: apiData?.content?.image_renovation_image?.[lang] ? (ASSETS_URL + apiData.content.image_renovation_image?.[lang]) : "/icons/industries12.png",
            text: apiData?.content?.renovation?.[lang] || "Renovation"
        },
        {
            img: apiData?.content?.image_freelance_image?.[lang] ? (ASSETS_URL + apiData.content.image_freelance_image?.[lang]) : "/icons/industries5.png",
            text: apiData?.content?.freelance?.[lang] || "Freelance"
        },
        {
            img: apiData?.content?.image_and_more_image?.[lang] ? (ASSETS_URL + apiData.content.image_and_more_image?.[lang]) : "/icons/industries4.png",
            text: apiData?.content?.and_more?.[lang] || "And More..."
        }
    ];

    return (
        <>
            <div className='hidden lg:block'>
                <ul className='IndustriesWeServe grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-4'>
                    {industries.map((item, index) => (
                        <li key={index} style={{ flex: '0 0 15%' }}
                            className="bg-[#4966552e] border-[#dbe7d9] flex flex-col items-center justify-between gap-2 min-w-0 transition-all duration-500 ease-in-out border rounded-[19px] p-2 md:p-2.5 font-medium text-lg hover:scale-105 cursor-pointer">
                            <div>
                                <Image
                                    src={item.img}
                                    alt={item.text}
                                    width={500}
                                    height={500}
                                    className='w-[48px] h-[47px]'
                                />
                            </div>
                            <p className='!font-medium text-center'>{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='block lg:hidden'>
                <ul className='IndustriesWeServe'>
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

                        {industries.map((item, index) => (
                            <SwiperSlide>
                                <li key={index} style={{ flex: '0 0 15%' }}
                                    className="bg-[#4966552e] border-[#dbe7d9] flex flex-col items-center justify-between gap-2 min-w-0 transition-all duration-500 ease-in-out border rounded-[19px] p-2 md:p-2.5 font-medium text-lg hover:scale-105 cursor-pointer">
                                    <div>
                                        <Image
                                            src={item.img}
                                            alt={item.text}
                                            width={500}
                                            height={500}
                                            className='w-[48px] h-[47px]'
                                        />
                                    </div>
                                    <p className='!font-medium text-center'>{item.text}</p>
                                </li>
                            </SwiperSlide>
                        ))}

                    </Swiper>
                </ul>
            </div>
        </>
    )
}
