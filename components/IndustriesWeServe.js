'use client';

import Image from 'next/image';
const industries = [
    {
        img: "/icons/industries8.svg",
        text: "Manufacture"
    },
    {
        img: "/icons/industries7.svg",
        text: "Imp / Exp"
    }, {
        img: "/icons/industries9.svg",
        text: "Logistics"
    },
    {
        img: "/icons/industries2.svg",
        text: "Retail"
    },
    {
        img: "/icons/industries10.svg",
        text: "Professional"
    },
    {
        img: "/icons/industries11.svg",
        text: "Finance"
    },
    {
        img: "/icons/industries1.svg",
        text: "Schools"
    },
    {
        img: "/icons/industries3.svg",
        text: "Health Service"
    },
    {
        img: "/icons/industries6.svg",
        text: "Food Service"
    },
    {
        img: "/icons/industries12.svg",
        text: "Renovation"
    },
    {
        img: "/icons/industries5.svg",
        text: "Freelance"
    },
    {
        img: "/icons/industries4.svg",
        text: "And More..."
    }
];
export default function IndustriesWeServe({ }) {
    return (
        <ul className='IndustriesWeServe grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-4'>
            {industries.map((item, index) => (
                <li key={index} style={{ flex: '0 0 15%' }}
                    className="bg-[#4966552e] border-[#dbe7d9] flex flex-col items-center justify-between gap-2 min-w-0 transition-all duration-500 ease-in-out border rounded-[19px] p-2.5 font-medium text-lg hover:scale-105 cursor-pointer">
                    <div>
                        <Image
                            src={item.img}
                            alt={item.text}
                            width={48}
                            height={47}
                        />
                    </div>
                    <p className='!font-medium'>{item.text}</p>
                </li>
            ))}
        </ul>
    )
}
