'use client';

import Image from 'next/image';
const industries = [
    {
        img: "/icons/industries8.png",
        text: "Manufacture"
    },
    {
        img: "/icons/industries7.png",
        text: "Imp / Exp"
    }, {
        img: "/icons/industries9.png",
        text: "Logistics"
    },
    {
        img: "/icons/industries2.png",
        text: "Retail"
    },
    {
        img: "/icons/industries11.png",
        text: "Finance"
    },
    {
        img: "/icons/industries10.png",
        text: "Professional"
    },
    {
        img: "/icons/industries1.png",
        text: "Schools"
    },
    {
        img: "/icons/industries3.png",
        text: "Health Service"
    },
    {
        img: "/icons/industries6.png",
        text: "Food Service"
    },
    {
        img: "/icons/industries12.png",
        text: "Renovation"
    },
    {
        img: "/icons/industries5.png",
        text: "Freelance"
    },
    {
        img: "/icons/industries4.png",
        text: "And More..."
    }
];
export default function IndustriesWeServe({ }) {
    return (
        <ul className='IndustriesWeServe grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4'>
            {industries.map((item, index) => (
                <li key={index} style={{ flex: '0 0 15%' }}
                    className="bg-[#4966552e] border-[#dbe7d9] flex flex-col items-center justify-between gap-2 min-w-0 transition-all duration-500 ease-in-out border rounded-[19px] p-4 md:p-2.5 font-medium text-lg hover:scale-105 cursor-pointer">
                    <div>
                        <Image
                            src={item.img}
                            alt={item.text}
                            width={500}
                            height={500}
                            className='w-[48px] h-[47px]'
                        />
                    </div>
                    <p className='!font-medium'>{item.text}</p>
                </li>
            ))}
        </ul>
    )
}
