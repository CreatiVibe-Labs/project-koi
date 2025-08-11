'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { footerLinks1 } from '@/constant/constants';
import { footerLinks2 } from '@/constant/constants';

export default function Footer() {
    return (
        <div className='footer border-t-[1px] border-b-0 border-t-[#ffffff66] left-gradient-background'>
            <div className='footerWrapper'>
                <div className='section1 gap-12'>
                    <div className='group1 flex flex-col gap-4'>
                        <div className='logoWrapper'>
                            <Link href='#' className='flex gap-5 items-center font-semibold text-4xl'><Image src="/images/logo.png" width={100} height={10} alt="Logo" />Aerialink</Link>
                        </div>
                        <div className='contentWrapper'>
                            <span className='font-semibold mt-[-2%] text-2xl'>
                                Empowering Your Digital Future
                            </span>
                        </div>
                    </div>
                    <div className='group2'>
                        <div className='footerContactWrapper w-[45%] flex flex-col gap-3'>
                            <div className='wrp flex items-center gap-6'>
                                <Image src='/icons/phone.png' width={20} height={20} alt='phone' className='brightness-2000' />
                                <Link className='w-auto !text-left font-normal text-[1rem]' href="tel:+81788552760">+81 78 855 2760</Link>
                            </div>
                            <div className='wrp flex items-center gap-6'>
                                <Image src='/icons/address.png' width={20} height={20} alt='phone' className='brightness-2000' />
                                <Link className='w-auto !text-left font-normal text-[1rem]' href="https://maps.app.goo.gl/x4bdhdoMwSufLe31A">
                                    6E-02, 6-9 Koyocho-naka, Higashinada-ku, Kobe Hyogo, 658-0032 Japan
                                </Link>
                            </div>
                            <div className='wrp flex items-center gap-5'>
                                <Image src='/icons/clock.png' width={25} height={25} alt='phone' className='brightness-2000 ml-[-3px]' />
                                <span className='w-auto !text-left font-normal text-[1rem] ml-[2px]' href="tel:+81788552760">Mon - Fri, 9:00am - 6:00pm</span>
                            </div>
                            <div className='wrp flex items-center gap-6'>
                                <Image src='/icons/mail.png' width={20} height={20} alt='phone' className='brightness-2000' />
                                <Link className='w-auto !text-left font-normal text-[1rem]' href="mailto:inquiry@aerialink.jp">inquiry@aerialink.jp</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='section2 gap-10 !w-[27%]'>
                    <div className='mobileMenuWrapper justify-end mt-[58px]'>
                        <div className='mobileLinks'>
                            {footerLinks1.map((link) => (
                                <Link key={link.href} href={link.href} className={`nav-menu`}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className='mobileLinks'>
                            {footerLinks2.map((link) => (
                                <Link key={link.href} href={link.href} className={`nav-menu`}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className='socialIconsWrapper gap-8 justify-end mt-4'>
                        <p>Follow <span className='neon-green'>us</span></p>
                        <div className='icons'>
                            <Link href="#">
                                <Image src="/icons/linkin.png" width={1000} height={1000} className='w-[40px]' alt='linkedin icon' />
                            </Link>
                            <Link href="#">
                                <Image src="/icons/x.png" width={1000} height={1000} className='w-[30px]' alt='twitter icon' />
                            </Link>
                            <Link href="#">
                                <Image src="/icons/yt.png" width={1000} height={1000} className='w-[40px]' alt='yt icon' />
                            </Link>
                        </div>
                    </div>
                    <p className='neon-green font-semibold mt-4'>© Aerialink Inc. 2025. All rights reserved. </p>
                </div>
            </div>
        </div>
    );
}