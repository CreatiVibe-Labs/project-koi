import Image from "next/image";
import Link from 'next/link';
import ServicesCards2 from '@/components/ServicesCards2';
import ReviewSlider from '@/components/ReviewSlider';
import Jobs from '@/components/Jobs';
import Organizationstructure from "@/components/Organizationstructure";
import { cookies } from "next/headers";
import { getAboutPageData, getOrganizationData, getQuotesData, getJobsData, getServicesPageData } from "@/constant/ContentApi";

export const metadata = {
    title: "About us - Aerialink Inc",
    description: "About us - Aerialink Inc",
};

export default async function AboutUs() {

    const cookieStore = await cookies();
    const lang = cookieStore.get("lang")?.value ?? 'en';
    const ASSETS_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL;
    const apiData = await getAboutPageData();
    const organizationData = await getOrganizationData();
    const quotesData = await getQuotesData();
    const jobsData = await getJobsData();
    const serviceApiData = await getServicesPageData();

    const quotes = quotesData?.content?.testimonials?.map((t) => ({
        name: t.name?.[lang] || "",
        review: t.review?.[lang] || "",
        designation: t.designation?.[lang] || "",
    })) || [];

    const jobs = jobsData?.content?.jobs?.map((t) => {
        const title = t.title?.[lang] || "";
        const slug = title
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/gi, "") // special characters hatao
            .trim()
            .replace(/\s+/g, "-"); // spaces ko - se replace karo

        return {
            title,
            exp: t.experience?.[lang] || "",
            description: t.description?.[lang] || "",
            link: slug,
            button: t.button_text?.[lang] || "",
        };
    }) || [];

    return (
        <>
            <div className="hero-section-about">

                <video className="rounded" autoPlay muted loop>
                    <source src={ASSETS_URL + apiData?.content?.video_banner_section_video?.[lang] || "/videos/about_banner.mp4"} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* <img src="/images/about.png" width="100%" alt=""/> */}
                <h1 className="text-center text-2xl lg:text-5xl md:text-3xl font-bold pt-2.5 opacity-[0.5] mt-[-113px]
                ">{apiData?.content?.banner_section_heading?.[lang] || "Driven by innovation. United by purpose"}</h1>
            </div>

            <div className="whyCHooseUsWrapper coreValues mt-[-32px] md:!mt-[100px]">
                <div className="whyChooseUsHeading gradient-background"><h2>{apiData?.content?.core_values_heading?.[lang] || "Core Values"}</h2></div>
                <div className="whyChooseUsCardContentss">
                    <div className="cardWrappers !gap-0 !flex-nowrap justify-between mt-4 !rounded-[30px]">
                        <ServicesCards2
                            imageUrl={ASSETS_URL + apiData?.content?.image_innovation_image?.[lang] || "/icons/coreValue-4.png"}
                            heading={apiData?.content?.innovation_heading?.[lang] || "Innovation"}
                            description={apiData?.content?.innovation_description?.[lang] || "Think smart, Act fast."}
                            CustomClass='mr-[-12px] gradient-background !backdrop-blur-none !rounded-[30px]'
                        />
                        <ServicesCards2
                            imageUrl={ASSETS_URL + apiData?.content?.image_effectiveness_image?.[lang] || "/icons/coreValue-3.png"}
                            heading={apiData?.content?.effectiveness_heading?.[lang] || "Effectiveness"}
                            description={apiData?.content?.effectiveness_description?.[lang] || "Make it work, Make it count."}
                            CustomClass='mr-[-12px] gradient-background CustomCoreVal2 !backdrop-blur-none !rounded-[30px]'
                        />
                        <ServicesCards2
                            imageUrl={ASSETS_URL + apiData?.content?.image_collaboration_image?.[lang] || "/icons/coreValue-2.png"}

                            heading={apiData?.content?.collaboration_heading?.[lang] || "Collaboration"}
                            description={apiData?.content?.collaboration_description?.[lang] || "Together, we grow."}
                            CustomClass='mr-[-12px] gradient-background !backdrop-blur-none !rounded-[30px]'
                        />
                        <ServicesCards2
                            imageUrl={ASSETS_URL + apiData?.content?.image_integrity_image?.[lang] || "/icons/coreValue-1.png"}

                            heading={apiData?.content?.integrity_heading?.[lang] || "Integrity"}
                            description={apiData?.content?.integrity_description?.[lang] || "We do what's right."}
                            CustomClass="gradient-background CustomCoreVal2 !backdrop-blur-none !rounded-[30px]"
                        />
                    </div>
                </div>
            </div>

            <div className="missionVission gap-4 md:!gap-0">
                <div className="whyCHooseUsWrapper coreValues w-[50%] md:!w-[51%] md:mr-[-12px] md:mt-0 !mt-[-11px]">
                    {/* <div className="whyChooseUsHeading gradient-background"><h2>Mission</h2></div> */}
                    <div className="whyChooseUsCardContents gradient-background !backdrop-blur-none  !rounded-[30px]">
                        <div className="cardWrappers">
                            <p className="lg:text-lg md:text-lg text-xs !font-medium pl-5">
                                {apiData?.content?.mission_before_bold?.[lang] || "We’re on a"} <b className="bold-text text-[#98c1a9]">{apiData?.content?.mission_bold?.[lang] || "mission"}</b> {apiData?.content?.mission_after_bold?.[lang] || "to reshape the way people interact with technology. By combining cutting-edge innovation with user-centered design, we build products that simplify, connect, and empower — making life and work smarter, not harder."}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="whyCHooseUsWrapper coreValues w-[50%] md:!w-[51%] md:mt-0 !mt-[-11px]">
                    {/* <div className="whyChooseUsHeading gradient-background"><h2>Vision</h2></div> */}
                    <div className="whyChooseUsCardContents gradient-background !backdrop-blur-none pl-0 md:!pl-[30px]  !rounded-[30px]">
                        <div className="cardWrappers">
                            <p className="lg:text-lg md:text-lg text-xs !font-medium pl-1+0">
                                {apiData?.content?.vision_before_bold?.[lang] || "We en"}<b className="bold-text text-[#98c1a9]">{apiData?.content?.vision_bold?.[lang] || "vision"}</b> {apiData?.content?.vision_after_bold?.[lang] || "a world where technology enhances every human experience — seamless, intuitive, and inclusive. Our goal is to pioneer bold ideas that shape the future and empower people to thrive in a connected world."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="whyCHooseUsWrapper coreValues">
                <div className="whyChooseUsHeading gradient-background"><h2>{apiData?.content?.quotes_from_team_heading?.[lang] || "Quotes from team"}</h2></div>
                <div className="whyChooseUsCardContents">
                    <div className="cardWrappers reviewslider">
                        <ReviewSlider
                            reviews={quotes}
                            color={'text-[#13F4EF]'}
                        />
                    </div>
                </div>
            </div>

            {organizationData.content.checkbox_enable_organization.en == 1 && <div className="whyCHooseUsWrapper coreValues">
                <div className="whyChooseUsHeading gradient-background"><h2>{apiData?.content?.organization_structure_heading?.[lang] || "Organization Structure"}</h2></div>
                <div className="whyChooseUsCardContents">
                    <Organizationstructure apiData={organizationData} lang={lang} ASSETS_URL={ASSETS_URL} />
                </div>
            </div>}

            <div className="whyCHooseUsWrapper coreValues careerOp">
                <div className="whyChooseUsHeading gradient-background"><h2>{apiData?.content?.career_opportunities_heading?.[lang] || "Career Opportunities"}</h2></div>
                <div className="cardWrappers !grid-cols-1">

                    {jobs.length > 0 &&
                        jobs.map((job) => (
                            <Jobs
                                key={job.link} // ya job.id use kar lo agar hai
                                title={job.title}
                                apiData={apiData}
                                lang={lang}
                                exp={job.exp}
                                description={job.description}
                                link={`/job-apply/${job.link}`}
                                button={job.button}
                            />
                        ))
                    }
                </div>
            </div>


            <div className="industriesServeMainWrapper letsBuildToghether about">
                <div className="isContent">
                    <p className="content lg:!text-3xl md:!text-2xl ">
                        {apiData?.content?.cta_section_heading?.[lang] || "Passionate people, bold ideas"}
                    </p>
                    <div className="buttons-wrapper">
                        <Link href={serviceApiData?.content?.about_us_cta?.en || "#"}>{apiData?.content?.cta_section_button?.[lang] || "Contact Our Team"}</Link>
                    </div>
                </div>
            </div>

        </>
    );
}