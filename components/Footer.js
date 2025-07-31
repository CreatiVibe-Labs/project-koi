'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { footerLinks1 } from '@/constant/constants';
import { footerLinks2 } from '@/constant/constants';

export default function Footer() {
    return (
        <div className='footer border-t-[1px] border-b-[#ffffff66] left-gradient-background'>
            <div className='footerWrapper'>
                <div className='section1'>
                    <div className='logoWrapper'>
                        <Link href='#'><Image src="/images/logo.png" width={100} height={10} alt="Logo" /></Link>
                    </div>
                    <div className='contentWrapper'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                        </p>
                    </div>
                    <div className='contactWrapper'>
                        <Link href="#">
                            <div className='sales'>
                                <Image src="/icons/email.png" width={17} height={14} alt='image icon' />
                                <p className='email'>Sales<span className='neon-green'>:</span> sales@xyzstudio.com</p>
                            </div>
                        </Link>
                        <Link href="#">
                            <div className='support'>
                                <Image src="/icons/email.png" width={17} height={14} alt='image icon' />
                                <p className='email'>Supports<span className='neon-green'>:</span> suports@xyzstudio.com</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='section2'>
                    <div className='mobileMenuWrapper'>
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
                    <div className='socialIconsWrapper gap-8'>
                        <p>Follow <span className='neon-green'>Us</span></p>
                        <div className='icons'>
                            <Link href="#">
                                <Image src="/icons/fb.png" width={33} height={33} alt='fb icon' />
                            </Link>
                            <Link href="#">
                                <Image src="/icons/insta.png" width={33} height={33} alt='insta icon' />
                            </Link>
                            <Link href="#">
                                <Image src="/icons/twitter.png" width={33} height={33} alt='twitter icon' />
                            </Link>
                        </div>
                    </div>
                        <p className='neon-green'>© Aerialink Inc. 2025 </p>
                </div>
            </div>
        </div>
    );
}