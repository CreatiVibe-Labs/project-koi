'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ lang, ASSETS_URL, apiData }) {

    const footerLinks1 = [
        { name: apiData?.content?.home?.[lang] || "Home", href: '/' },
        { name: apiData?.content?.resources?.[lang] || "Resources", href: '/resources' },
        { name: apiData?.content?.about_us?.[lang] || "About Us", href: '/about-us' },
    ];

    const footerLinks2 = [
        { name: apiData?.content?.services?.[lang] || "Services", href: '/services' },
        { name: apiData?.content?.demo?.[lang] || "Demo", href: '/demo' },
        { name: apiData?.content?.contact?.[lang] || "Contact", href: '/contact-us' },
    ];
    return (
        <div className='footer border-t-[1px] border-b-0 border-t-[#ffffff66] left-gradient-background'>
            <div className='footerWrapper'>
                <div className='section1 md:gap-12 gap-6'>
                    <div className='group1 flex flex-col md:gap-4 gap-2'>
                        <div className='logoWrapper'>
                            <Link href='/' className='flex gap-2.5 md:gap-5 items-center font-semibold md:text-4xl text-lg'><Image src="/images/logo.png" width={100} height={10} alt="Logo" />Aerialink</Link>
                        </div>
                        <div className='contentWrapper'>
                            <span className='font-semibold mt-[-2%] md:text-2xl text-lg'>
                                {apiData?.content?.description?.[lang] || "Empowering Your Digital Future"}
                            </span>
                        </div>
                    </div>
                    <div className='group2'>
                        <div className='footerContactWrapper md:w-[45%] w-full flex flex-col gap-3'>
                            <div className='wrp flex items-center gap-6'>
                                <Image src='/icons/phone.png' width={20} height={20} alt='phone' className='brightness-2000' />
                                <Link className='w-auto !text-left font-normal text-sm md:text-[1rem] ' href="tel:+81788552760">+81 78 855 2760</Link>
                            </div>
                            <div className='wrp flex items-center gap-6'>
                                <Image src='/icons/address.png' width={20} height={20} alt='phone' className='brightness-2000' />
                                <Link className='w-auto !text-left font-normal text-sm md:text-[1rem] ' href="https://maps.app.goo.gl/x4bdhdoMwSufLe31A">
                                    6E-02, 6-9 Koyocho-naka, Higashinada-ku, Kobe Hyogo, 658-0032 Japan
                                </Link>
                            </div>
                            <div className='wrp flex items-center gap-5'>
                                <Image src='/icons/clock.png' width={25} height={25} alt='phone' className='brightness-2000 ml-[-3px]' />
                                <span className='w-auto !text-left font-normal text-sm md:text-[1rem]  ml-[2px]' href="tel:+81788552760">Mon - Fri, 9:00am - 6:00pm</span>
                            </div>
                            <div className='wrp flex items-center gap-6'>
                                <Image src='/icons/mail.png' width={20} height={20} alt='phone' className='brightness-2000' />
                                <Link className='w-auto !text-left font-normal text-sm md:text-[1rem] ' href="mailto:inquiry@aerialink.jp">inquiry@aerialink.jp</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section2 md:gap-10 !gap-5 md:!w-[27%] !w-full md:items-end !items-start '>
                    <div className='mobileMenuWrapper md:justify-end justify-start md:mt-[58px] my-8 '>
                        <div className='mobileLinks'>
                            {footerLinks1.map((link) => (
                                <Link key={link.href} href={link.href} className={`nav-menu`}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className='mobileLinks'>
                            {footerLinks2.map((link) => (
                                <Link key={link.href} href={link.href} className="nav-menu md:text-lg !text-sm">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='socialIconsWrapper gap-8 md:justify-end justify-center md:mt-4 mt-0'>
                        <p>{apiData?.content?.follow_us?.[lang] || "Follow us"}</p>
                        <div className='icons'>
                            <Link href={apiData?.content?.linkedin?.en || "#"}>
                                <Image src="/icons/linkin.png" width={1000} height={1000} className='w-[40px]' alt='linkedin icon' />
                            </Link>
                            <Link href={apiData?.content?.twitter?.en || "#"}>
                                <Image src="/icons/x.png" width={1000} height={1000} className='w-[30px]' alt='twitter icon' />
                            </Link>
                            <Link href={apiData?.content?.youtube?.en || "#"}>
                                <Image src="/icons/yt.png" width={1000} height={1000} className='w-[40px]' alt='yt icon' />
                            </Link>
                        </div>
                    </div>
                    <p className='neon-green font-semibold md:mt-4 mt-0 text-center'>{apiData?.content?.copy_right?.[lang] || "© Aerialink Inc. 2025. All rights reserved."}</p>
                </div>
            </div>
        </div>
    );
}