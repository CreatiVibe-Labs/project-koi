// 'use client';

import Image from "next/image";
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import Whatsapp from "@/components/Whatsapp";

export const metadata = {
    title: "Contact us - Aerialink Inc",
    description: "Contact us - Aerialink Inc",
};

export default function ContactPage({ imageUrl, title, text }) {
    return (
        <>
            <div className="hero-section contact flex-col">
                <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-5">
                    <div className="contactBg backdrop-blur-lg border-0 border-amber-50 rounded-2xl md:p-10 p-2.5 flex items-end">
                        <ul>
                            <li className="flex items-center gap-5">
                                <div className="bg-white rounded-full p-2"><Image alt="icon" src="/icons/phone.png" width={30} height={30}></Image></div>
                                <Link href="tel:+81788552760" className="text-white custom-shaodw" >
                                    +81 78 855 2760</Link>
                            </li>
                            <li className="flex items-center gap-5">
                                <div className="bg-white rounded-full px-2 py-2.5"><Image alt="icon" src="/icons/mail.png" width={30} height={15}></Image></div>
                                <Link href="mailto:inquiry@aerialink.jp" className="flex items-center gap-5 text-white custom-shaodw">inquiry@aerialink.jp</Link>
                            </li>
                            <li className="flex items-center gap-5">
                                <div className="bg-white rounded-full p-2"><Image alt="icon" src="/icons/web.png" width={30} height={30}></Image></div>
                                <Link href="/" className="flex items-center gap-5 custom-shaodw">aerialink.jp</Link>
                            </li>
                            <li className="flex items-center gap-5">
                                <div className="bg-white rounded-full px-2.5 py-2"><Image alt="icon" src="/icons/address.png" width={25} height={25}></Image></div>
                                <Link href="https://maps.app.goo.gl/x4bdhdoMwSufLe31A" target="_blank" className="flex items-center  gap-5 custom-shaodw">6E-02, 6-9 Koyochonaka, Higashinadaku, Kobe <br /> Hyogo 658-0032 Japan</Link>
                            </li>
                        </ul>

                        <div className="clock absolute">
                            <p className="custom-shaodw !font-semibold mt-[-5px] ml-2 absolute top-0 left-[7px] w-[175px]">
                                &nbsp;Mon – Fri &nbsp; 9:00 – 18:00<br /><br />
                                &nbsp;Sat – Sun &nbsp; Closed
                            </p>
                        </div>

                        <div className="absolute end-2.5 bottom-[2px]"><Image className="w-[80px]" alt="icon" src="/icons/qr-code.png" width={100} height={100}></Image></div>
                    </div>
                    <div className="border-0 border-amber-50 rounded-2xl backdrop-blur-lg">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.635822438208!2d135.2681585!3d34.6891397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008d7bbb2ec4fd%3A0x3fc8f7fe18f2b3bf!2s6-ch%C5%8Dme-9%20K%C5%8Dy%C5%8Dch%C5%8Dnaka%2C%20Higashinada%20Ward%2C%20Kobe%2C%20Hyogo%20658-0032%2C%20Japan!5e0!3m2!1sen!2s!4v1754675364488!5m2!1sen!2s" width="100%" height="380"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-2xl border-0">
                        </iframe>
                    </div>
                </div>
            </div>
            <div className="contactForm whyChooseUsCardContents">
                <h3 className="pb-3 text-3xl font-bold text-center">Inquiry Form</h3>
                <ContactForm />
            </div>
            <Whatsapp />
        </>
    );
}