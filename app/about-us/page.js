'use client';

import Image from "next/image";
import Link from 'next/link';
import ServicesCards2 from '@/components/ServicesCards2';
import ReviewSlider from '@/components/ReviewSlider';
import Jobs from '@/components/Jobs';
import Organizationstructure from "@/components/Organizationstructure";

export default function AboutUs() {

    const quotes = [
        {
            name: "Ayesha Khan",
            review: "Working here has been an incredible journey — the team is supportive, and every project pushes me to grow.",
            designation: "Frontend Developer"
        },
        {
            name: "Usman Raza",
            review: "I love how we prioritize creativity and collaboration. It\'s more than a job — it feels like a shared mission.",
            designation: " UX Designer",
        },
        {
            name: "Fatima Ali",
            review: "Every day brings a new challenge, and that\'s exactly what keeps me motivated.The energy here is unmatched.",
            designation: "Project Manager",

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
                <h1 className="text-center text-5xl font-bold pt-2.5">Driven by innovation. United by purpose</h1>
            </div>

            <div className="whyCHooseUsWrapper coreValues">
                <div className="whyChooseUsHeading gradient-background"><h2>Core Values</h2></div>
                <div className="whyChooseUsCardContentss">
                    <div className="cardWrappers justify-between mt-4 ">
                        <ServicesCards2
                            imageUrl="/icons/coreValue-4.svg"
                            heading="Innovation"
                            description="Think smart, Act fast."
                        />
                        <ServicesCards2
                            imageUrl="/icons/coreValue-3.svg"

                            heading="Effectiveness"
                            description="Make it work, Make it count."
                        />
                        <ServicesCards2
                            imageUrl="/icons/coreValue-2.svg"

                            heading="Collaboration"
                            description="Together, we grow."
                        />
                        <ServicesCards2
                            imageUrl="/icons/coreValue-1.svg"

                            heading="Integrity"
                            description="We do what's right."
                        />
                    </div>
                </div>
            </div>

            <div className="missionVission">
                <div className="whyCHooseUsWrapper coreValues">
                    {/* <div className="whyChooseUsHeading gradient-background"><h2>Mission</h2></div> */}
                    <div className="whyChooseUsCardContents">
                        <div className="cardWrappers">
                            <p>
                                We’re on a <b className="bold-text">mission</b> to reshape the way people interact with technology. By
                                combining cutting-edge innovation with user-centered design, we build
                                products that simplify, connect, and empower — making life and work
                                smarter, not harder.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="whyCHooseUsWrapper coreValues">
                    {/* <div className="whyChooseUsHeading gradient-background"><h2>Vision</h2></div> */}
                    <div className="whyChooseUsCardContents">
                        <div className="cardWrappers">
                            <p>
                                We en<b className="bold-text">vision</b> a world where technology enhances every human experience
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
                    <div className="cardWrappers">
                        <ReviewSlider
                            reviews={quotes}
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
                        title="Software Engineer"
                        exp="2+ Years"
                        location="Karachi, Pakistan"
                        link="#"
                    />
                    <Jobs
                        title="Software Engineer"
                        exp="2+ Years"
                        location="Karachi, Pakistan"
                        link="#"
                    />
                    <Jobs
                        title="Software Engineer"
                        exp="2+ Years"
                        location="Karachi, Pakistan"
                        link="#"
                    />
                    <Jobs
                        title="Software Engineer"
                        exp="2+ Years"
                        location="Karachi, Pakistan"
                        link="#"
                    />
                </div>
            </div>


            <div className="industriesServeMainWrapper letsBuildToghether about">
                <div className="isContent">
                    <p className="content">
                        Passionate people, bold ideas
                    </p>
                    <div className="buttons-wrapper">
                        <Link href="#">Contact Our Team</Link>
                    </div>
                </div>
            </div>

        </>
    );
}