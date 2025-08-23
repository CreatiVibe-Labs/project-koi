import Image from "next/image";
import Link from 'next/link';
import ServicesCards2 from '@/components/ServicesCards2';
import ReviewSlider from '@/components/ReviewSlider';
import Jobs from '@/components/Jobs';
import Organizationstructure from "@/components/Organizationstructure";

export const metadata = {
    title: "About us - Aerialink Inc",
    description: "About us - Aerialink Inc",
};

export default function AboutUs() {

    const quotes = [
        {
            name: "C. Ling",
            review: "This place isn’t for the faint-hearted. Everyone wears multiple hats, and it’s never boring — it’s an adventure. But only the truly driven can keep up.",
            designation: "R & D Director"
        },
        {
            name: "C. Hayashi",
            review: "Do you like roller coasters? Because that’s exactly what my workday feels like—except there’s no seatbelt, the track is on fire, and I’m screaming in Excel.",
            designation: "Sales Manager"
        },
        {
            name: "R. Konishi",
            review: "Every Day Brings a new challenge, and that's exactly what keeps me motivated. that energy here is unmatched.",
            designation: "CAO"
        }
    ];


    return (
        <>
            {/* <div className="service-hero-section bg-abt-none flex justify-between items-center">
                <div className="w-[50%]">
                    <h1 className="text-[#c3f8d9] font-bold ">Who We Are</h1>
                    <p>Driven by innovation. United by purpose</p>
                    <div className="buttons-wrapper w-3xs">
                        <Link href="#">Meet the Team</Link>
                    </div>
                </div>
                <div className="w-[50%] text-end">
                    <Image src='/images/about-bg.png' width={800} height={500} alt="Hero Image"></Image>
                </div>
            </div> */}


            <div className="hero-section-about">
                {/* <Image src='/images/about.png' alt="Hero Image" width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-2xl"
                    style={{ width: '100%', height: 'auto' }}></Image> */}
                <video className="rounded" autoPlay muted loop>
                    <source src="/videos/about_banner.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src="/images/about.png" width="100%" alt=""/> */}
                <h1 className="text-center text-2xl md:text-5xl font-bold pt-2.5 mt-[-113px] opacity-[0.5]">Driven by innovation. United by purpose</h1>
            </div>

            <div className="whyCHooseUsWrapper coreValues mt-[-32px] md:!mt-[100px]">
                <div className="whyChooseUsHeading gradient-background"><h2>Core Values</h2></div>
                <div className="whyChooseUsCardContentss">
                    <div className="cardWrappers gap-2 md:!gap-0 !flex-nowrap justify-between mt-4  !rounded-[30px]">
                        <ServicesCards2
                            imageUrl="/icons/coreValue-4.png"
                            heading="Innovation"
                            description="Think smart, Act fast."
                            CustomClass='mr-[-12px] gradient-background !backdrop-blur-none !rounded-[30px]'
                        />
                        <ServicesCards2
                            imageUrl="/icons/coreValue-3.png"
                            heading="Effectiveness"
                            description="Make it work, Make it count."
                            CustomClass='mr-[-12px] gradient-background !backdrop-blur-none !rounded-[30px]'
                        />
                        <ServicesCards2
                            imageUrl="/icons/coreValue-2.png"

                            heading="Collaboration"
                            description="Together, we grow."
                            CustomClass='mr-[-12px] gradient-background !backdrop-blur-none !rounded-[30px]'
                        />
                        <ServicesCards2
                            imageUrl="/icons/coreValue-1.png"

                            heading="Integrity"
                            description="We do what's right."
                            CustomClass="gradient-background !backdrop-blur-none !rounded-[30px]"
                        />
                    </div>
                </div>
            </div>

            <div className="missionVission gap-4 md:!gap-0">
                <div className="whyCHooseUsWrapper coreValues w-[50%] md:!w-[51%] md:mr-[-12px] ">
                    {/* <div className="whyChooseUsHeading gradient-background"><h2>Mission</h2></div> */}
                    <div className="whyChooseUsCardContents gradient-background !backdrop-blur-none  !rounded-[30px]">
                        <div className="cardWrappers">
                            <p className="text-xs md:text-lg !font-medium pl-5">
                                We’re on a <b className="bold-text text-[#98c1a9]">mission</b> to reshape the way people interact with technology. By
                                combining cutting-edge innovation with user-centered design, we build
                                products that simplify, connect, and empower — making life and work
                                smarter, not harder.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="whyCHooseUsWrapper coreValues w-[50%] md:!w-[51%]">
                    {/* <div className="whyChooseUsHeading gradient-background"><h2>Vision</h2></div> */}
                    <div className="whyChooseUsCardContents gradient-background !backdrop-blur-none pl-0 md:!pl-[30px]  !rounded-[30px]">
                        <div className="cardWrappers">
                            <p className="text-xs md:text-lg !font-medium pl-1+0">
                                We en<b className="bold-text text-[#98c1a9]">vision</b> a world where technology enhances every human experience
                                — seamless, intuitive, and inclusive. Our goal is to pioneer bold ideas that
                                shape the future and empower people to thrive in a connected world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="whyCHooseUsWrapper coreValues">
                <div className="whyChooseUsHeading gradient-background"><h2>Quotes from team</h2></div>
                <div className="whyChooseUsCardContents">
                    <div className="cardWrappers reviewslider">
                        <ReviewSlider
                            reviews={quotes}
                            color={'text-[#13F4EF]'}
                        />
                    </div>
                </div>
            </div>

            <div className="whyCHooseUsWrapper coreValues">
                <div className="whyChooseUsHeading gradient-background"><h2>Organization Structure</h2></div>
                <div className="whyChooseUsCardContents">
                    {/* <div className="cardWrappers">
                        <div className="org-chart">
                            <div className="org-node">Board of Directors</div>

                            <div className="line-vertical"></div>

                            <div className="org-node">CEO</div>

                            <div className="line-vertical"></div>

                            <div className="horizontal-group">
                                <div className="group-connector">
                                    <div className="org-node">CTO</div>
                                </div>
                                <div className="group-connector">
                                    <div className="org-node">COD</div>
                                </div>
                                <div className="group-connector">
                                    <div className="org-node">CFO</div>
                                </div>
                            </div>

                            <div className="line-vertical"></div>

                            <div className="horizontal-group">
                                <div className="group-connector">
                                    <div className="org-node">Developer</div>
                                </div>
                                <div className="group-connector">
                                    <div className="org-node">Designer</div>
                                </div>
                                <div className="group-connector">
                                    <div className="org-node">Finance Officer</div>
                                </div>
                                <div className="group-connector">
                                    <div className="org-node">HR</div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <Organizationstructure />
                </div>
            </div>

            <div className="whyCHooseUsWrapper coreValues careerOp">
                <div className="whyChooseUsHeading gradient-background"><h2>Career Opportunities</h2></div>
                <div className="cardWrappers">
                    <Jobs
                        title="Backend Developer"
                        exp="3+ Years"
                        description="We are looking for a detail-oriented Backend Developer to support the development of a secure, scalable private storage and file sharing platform. Working closely with an Infrastructure Engineer, you will be responsible for implementing server-side logic, managing data flow, and integrating core services related to storage, user access, and file handling. You will also collaborate with frontend team, product managers, and other stakeholders to ensure robust and scalable solutions"
                        link="/job-apply/backend-developer"
                    />
                    <Jobs
                        title="Content Creator"
                        exp="2+ Years"
                        description="We’re seeking a creative and driven Social Media Content Creator to join our team! This is a flexible role that can be fully remote and part-time. We’re also open to exploring partnership opportunities with the right candidate. Ideal candidates have a passion for digital storytelling, a keen eye for design, and the ability to turn ideas into scroll-stopping content."
                        link="/job-apply/social-media-content-creator"
                    />
                    <Jobs
                        title="IT Sales representative"
                        exp="1+ Years"
                        description="We are seeking a highly motivated and results-driven IT Sales Representative to join our dynamic team. In this role, you will be responsible for selling our cutting-edge IT services to a diverse range of customers. The ideal candidate will have at least one year of sales experience, preferably within the IT industry, and a proven track record of success."
                        link="/job-apply/IT-sales-representative"
                    />
                </div>
            </div>


            <div className="industriesServeMainWrapper letsBuildToghether about">
                <div className="isContent">
                    <p className="content md:text-5xl text-2xl">
                        Passionate people, bold ideas
                    </p>
                    <div className="buttons-wrapper">
                        <Link href="mailto:inquiry@aerialink.jp">Contact Our Team</Link>
                    </div>
                </div>
            </div>

        </>
    );
}