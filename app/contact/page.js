'use client';

import Image from "next/image";
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const contact = [
    {
        img: "company.svg",
        title: "Company Name",
        text: "CreatiVibe Labs"
    },
    {
        img: "telephone.svg",
        title: "Telephone",
        text: "+92 3273652556"
    },
    {
        img: "",
        title: "Address",
        text: "Office # 1405, 14th Floor, Caeser's Tower, Karachi, Pakistan"
    },
    {
        img: "",
        title: "Mon - Thu",
        text: "9:00 AM - 6:00 PM"
    },
    {
        img: "",
        title: "Friday",
        text: "9:00 AM - 4:00 PM"
    },
    {
        img: "",
        title: "Sat - Sun",
        text: "Closed"
    }
]

export default function ContactPage({ imageUrl, title, text }) {
    return (
        <>
            <div className="hero-section contact flex-col">
                {/* <div className="text-[40px] font-bold gradient-background w-full rounded-2xl p-3.5 mb-5"><h1>Contact Us</h1></div> */}
                <div className="grid grid-cols-2 w-full gap-5">
                    {/* <div className="border-[1px] border-amber-50 rounded-2xl p-4 backdrop-blur-lg gap-5 flex flex-col">
                        Contact Information
                        <div className="p-5  border-[1px] border-amber-50 rounded-2xl backdrop-blur-lg bg-[linear-gradient(0deg,rgba(25,66,48,0.5),rgba(25,66,48,0.5)),linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(153,153,153,0.06)_100%)]">
                            <h2 className="text-[#98C1A9] text-lg font-bold">Company Information</h2>
                            <div className="flex justify-between items-center gap-5 mb-5">
                                <div className="flex justify-start w-full gap-2 p-2 items-center border-[1px] border-amber-50 rounded-2xl">
                                    <div>

                                        <Image
                                            src="/icons/company.svg"
                                            alt={title}
                                            width={23}
                                            height={23}
                                        />

                                    </div>
                                    <div> <h3 className="font-bold">Company Name</h3>
                                        <p>CreatiVibe Labs</p></div>
                                </div>
                                <div className="flex justify-start w-full gap-2 p-2 items-center border-[1px] border-amber-50 rounded-2xl">
                                    <div>

                                        <Image
                                            src="/icons/telephone.svg"
                                            alt={title}
                                            width={23}
                                            height={23}
                                        />

                                    </div>
                                    <div> <h3 className="font-bold">Telephone</h3>
                                        <p>+92 3273652556</p></div>
                                </div>
                            </div>

                            <div className="flex justify-start w-full gap-2 p-2 items-center border-[1px] border-amber-50 rounded-2xl">
                                <div>

                                    <Image
                                        src="/icons/address.svg"
                                        alt={title}
                                        width={23}
                                        height={23}
                                    />

                                </div>
                                <div> <h3 className="font-bold">Address</h3>
                                    <p>Office # 1405, 14th Floor, Caeser's Tower, Karachi, Pakistan</p></div>
                            </div>
                        </div>
                        <div className="p-5  border-[1px] border-amber-50 rounded-2xl backdrop-blur-lg bg-[linear-gradient(0deg,rgba(25,66,48,0.5),rgba(25,66,48,0.5)),linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(153,153,153,0.06)_100%)]">
                            <h2 className="text-[#98C1A9] text-lg font-bold">Office Hours</h2>
                            <div className="flex justify-between items-center gap-5 mt-5">
                                <div className="flex justify-start w-full gap-2 p-2 items-center border-[1px] border-amber-50 rounded-2xl ps-2.5">
                                    <div> <h3 className="font-bold">Mon - Thu</h3>
                                        <p>9:00 AM - 6:00 PM</p></div>
                                </div>
                                <div className="flex justify-start w-full gap-2 p-2 items-center border-[1px] border-amber-50 rounded-2xl ps-2.5">
                                    <div> <h3 className="font-bold">Friday</h3>
                                        <p>9:00 AM - 4:00 PM</p></div>
                                </div>
                                <div className="flex justify-start w-full gap-2 p-2 items-center border-[1px] border-amber-50 rounded-2xl ps-2.5">

                                    <div> <h3 className="font-bold">Sat - Sun</h3>
                                        <p>Closed</p></div>
                                </div>
                            </div>

                        </div>

                    </div> */}

                    <div className="contactBg backdrop-blur-lg border-0 border-amber-50 rounded-2xl p-10 flex items-end">
                        <ul>
                            <li className="flex items-center gap-5">
                                <div className="bg-white rounded-full p-2"><Image alt="icon" src="/icons/phone.png" width={40} height={40}></Image></div>
                                <a href="tel:078-855-2760" className="text-white custom-shaodw" >
                                    078-855-2760</a>
                            </li>
                            <li className="flex items-center gap-5">
                                <div className="bg-white rounded-full px-2 py-2.5"><Image alt="icon" src="/icons/mail.png" width={40} height={25}></Image></div>
                                <a href="mailto:inquiry@aeriallink.jp" className="flex items-center gap-5 text-white custom-shaodw"> inquiry@aerialink.jp</a>
                            </li>
                            <li className="flex items-center gap-5">
                                <div className="bg-white rounded-full p-2"><Image alt="icon" src="/icons/web.png" width={40} height={40}></Image></div>
                                <a href="aeriallink.jp" className="flex items-center gap-5 custom-shaodw">aerialink.jp</a>
                            </li>
                            <li className="flex items-center gap-5">
                                <div className="bg-white rounded-full px-2.5 py-2"><Image alt="icon" src="/icons/address.png" width={35} height={35}></Image></div>
                                <a href="#" target="_blank" className="flex items-center  gap-5 custom-shaodw">  6E-02, 6-9 Koyocho-naka, Higashinada-ku, Kobe<br />
                                    Hyogo, 658-0032 Japan</a>
                            </li>
                        </ul>

                        <div className="clock absolute">
                            <p className="custom-shaodw font-semibold">
                                Mon – Fri 9:00 – 18:00<br />
                                Sat – Sun Closed
                            </p>
                        </div>

                        <div className="absolute end-2.5 bottom-2.5"><Image className="" alt="icon" src="/icons/qr-code.png" width={60} height={60}></Image></div>
                    </div>
                    <div className="border-0 border-amber-50 rounded-2xl backdrop-blur-lg">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9220.061348752506!2d135.26503893344656!3d34.68568635003625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008d7cf221d5a9%3A0x168ec4a747ab3737!2sKoyochonaka%2C%20Higashinada%20Ward%2C%20Kobe%2C%20Hyogo%20658-0032%2C%20Japan!5e0!3m2!1sen!2s!4v1754126375653!5m2!1sen!2s"
                            width="100%" height="380"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-2xl border-0"
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="contactForm whyChooseUsCardContents">
                <ContactForm />
            </div>
        </>
    );
}