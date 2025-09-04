import Image from 'next/image';
import Link from 'next/link';
import FeatureHighlights2 from '@/components/FeatureHighlights2';
import { useEffect, useRef, useState } from 'react';
import SliderCards from '@/components/sliders/SliderCards';
import { CalendlyLink } from '@/constant/constants';


export default function CloudMigration({lang, ASSETS_URL, apiData}) {

    const [isReverse, setIsReverse] = useState(false);

    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setReverse(prev => !prev); // toggle har 20s baad
        }, 20000); // 20000 ms = 20s

        return () => clearInterval(interval); // cleanup
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsReverse((prev) => !prev); // Toggle state
        }, 32000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll('.border-top');
        elements.forEach((el) => {
            if (isReverse) {
                el.classList.add('reverse');
            } else {
                el.classList.remove('reverse');
            }
        });

        const elements2 = document.querySelectorAll('.border-bottom');
        elements2.forEach((el2) => {
            if (isReverse) {
                el2.classList.add('reverse');
            } else {
                el2.classList.remove('reverse');
            }
        });

        const elements3 = document.querySelectorAll('.border-left');
        elements3.forEach((el3) => {
            if (isReverse) {
                el3.classList.add('reverse');
            } else {
                el3.classList.remove('reverse');
            }
        });

        const elements4 = document.querySelectorAll('.border-right');
        elements4.forEach((el4) => {
            if (isReverse) {
                el4.classList.add('reverse');
            } else {
                el4.classList.remove('reverse');
            }
        });

        const elements5 = document.querySelectorAll('.front-face span');
        elements5.forEach((el5) => {
            if (isReverse) {
                el5.classList.add('reverse');
            } else {
                el5.classList.remove('reverse');
            }
        });
    }, [isReverse]);

    const keyFeatures = [
        {
            imageUrl: ASSETS_URL + (apiData?.content?.image_zero_downtime_image?.[lang] || "/icons/downtime.png"),
            title: apiData?.content?.zero_downtime_heading?.[lang] || "Zero Downtime Migration",
            description: apiData?.content?.zero_downtime_description?.[lang] || "Our staged migration approach ensures business continuity throughout the process",
        },
        {
            imageUrl: ASSETS_URL + (apiData?.content?.image_secure_data_transfer_image?.[lang] || "/icons/data-transfer.png"),
            title: apiData?.content?.secure_data_transfer_heading?.[lang] || "Secure Data Transfer & Compliance",
            description: apiData?.content?.secure_data_transfer_description?.[lang] || "We adhere to top security protocols and industry compliance standards like GDPR, HIPAA, and SOC 2",
        },
        {
            imageUrl: ASSETS_URL + (apiData?.content?.image_cloud_platform_image?.[lang] || "/icons/cloud-platform.png"),
            title: apiData?.content?.cloud_platform_heading?.[lang] || "Cloud Platform Flexibility",
            description: apiData?.content?.cloud_platform_description?.[lang] || "We work across AWS, Azure, Google Cloud, and hybrid environments – you choose, we optimize",
        },
        {
            imageUrl: ASSETS_URL + (apiData?.content?.image_post_migration_optimization_image?.[lang] || "/icons/optimization.png"),
            title: apiData?.content?.post_migration_optimization_heading?.[lang] || "Post-Migration Optimization",
            description: apiData?.content?.post_migration_optimization_description?.[lang] || "We fine-tune performance, cost, and security after deployment – not just lift and shift",
        }
    ];

    return (
        <div className='singleSerivce cloudMigration'>
            <div className="industriesServeMainWrapper webDev">
                <div className="is-heading gradient-background"><h3>{apiData?.content?.cloud_migration_heading?.[lang] || "Cloud Migration Made Simple, Secure, and Scalable"}</h3></div>
                <div className="isContent">
                    <div className="itemsWrapper">
                        <p className='!font-medium'>
                            {apiData?.content?.cloud_migration_description?.[lang] || "We help businesses move to the cloud with confidence – minimizing disruption while maximizing long-term value."}
                        </p>
                        <Image src="/images/cloud-image1.png" width={6000} height={6000} alt="cloud image" />
                    </div>
                </div>
            </div>
            <div className="industriesServeMainWrapper industriesServeMainWrapper2 featuresHighlight">
                <div className="is-heading gradient-background"><h3>{apiData?.content?.key_features_heading?.[lang] || "Key Features" }</h3></div>
                <div className="mt-5">
                    <SliderCards 
                        slides={keyFeatures}
                    />
                </div>
            </div>
            <div className="industriesServeMainWrapper timelineWrapper">
                <div className="is-heading gradient-background"><h3>{apiData?.content?.migration_pathway_heading?.[lang] || "Migration Pathway" }</h3></div>
                <div className="isContentTimeLine">
                    <div className="itemsWrapper">
                        <div class={`stairWrapper !w-[100%] ${reverse ? 'reverse' : 'forward'}`}>
                            <div class="mainbox1 mainbox">
                                <div class="scene relative !flex justify-center items-center">
                                    <span className='absolute'>{apiData?.content?.optimization_description?.[lang] || "Provide post migration testing, validation, optimization and ongoing support to maximize the benefits of  your cloud environment" }</span>
                                    <div class="topbox1 topbox panel panel--rotate-x"></div>
                                </div>
                                <div class='bottombox1 bottombox'><span>{apiData?.content?.optimization_heading?.[lang] || "Optimization & Ongoing Support" }</span></div>
                            </div>
                            <div class="mainbox2 mainbox">
                                <div class="scene relative !flex justify-center items-center">
                                    <span className='absolute'>{apiData?.content?.migration_execution_description?.[lang] || "Implement migration with minimal disruptions, ensuring data integrity and security" }</span>
                                    <div class="topbox2 topbox panel panel--rotate-x"></div>
                                </div>
                                <div class='bottombox2 bottombox'><span>{apiData?.content?.migration_execution_heading?.[lang] || "Migration Execution" }</span></div>
                            </div>
                            <div class="mainbox3 mainbox">
                                <div class="scene relative !flex justify-center items-center">
                                    <span className='absolute'>{apiData?.content?.architecture_description?.[lang] || "Develop a customized cloud architecture that aligns with your business goals and compliance requirements" }</span>
                                    <div class="topbox3 topbox panel panel--rotate-x"></div>
                                </div>
                                <div class='bottombox3 bottombox'><span>{apiData?.content?.architecture_heading?.[lang] || "Architecture & Strategy" }</span></div>
                            </div>
                            <div class="mainbox4 mainbox">
                                <div class="scene relative !flex justify-center items-center">
                                    <span className='absolute'>{apiData?.content?.assessment_description?.[lang] || "Conduct a thorough analysis of your current infrastructure and define migration objectives" }</span>
                                    <div class="topbox4 topbox panel panel--rotate-x"></div>
                                </div>
                                <div class='bottombox4 bottombox'><span>{apiData?.content?.assessment_heading?.[lang] || "Assessment & Planning" }</span></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="industriesServeMainWrapper featuresHighlight migrationIcons cmsWork">
                <div className="is-heading gradient-background"><h3>{apiData?.content?.migration_scenario_heading?.[lang] || "Migration Scenarios" }</h3></div>
                <div className="">
                    <div className="itemsWrapper1 itemsWrapper">
                        <ul>
                            <li className='!font-medium'>{apiData?.content?.legacy_system?.[lang] || "Legacy System Modernization" }</li>
                            <li className='!font-medium'>{apiData?.content?.cloud_infrastructure?.[lang] || "On-Prem to Cloud Infrastructure" }</li>
                            <li className='!font-medium'>{apiData?.content?.cloud_to_cloud_migrations?.[lang] || "Cloud-to-Cloud Migrations" }</li>
                            <li className='!font-medium md:block flex items-center'>{apiData?.content?.hybrid_cloud_solutions?.[lang] || "Hybrid Cloud Solutions" }</li>
                        </ul>
                    </div>
                    <div className="itemsWrapper techIcon">
                        <FeatureHighlights2
                            imageUrl="/icons/aws.png"
                            title="AWS"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/azure.png"
                            title="Azure"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/google-cloud.png"
                            title="Google Cloud"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/ibm-cloud.png"
                            title="IBM Cloud"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/vmware.png"
                            title="VMware"
                            description=""
                        />
                        <FeatureHighlights2
                            imageUrl="/icons/wheel.png"
                            title="Kubernetes"
                            description=""
                        />
                    </div>
                </div>
            </div>
            <div className="industriesServeMainWrapper letsBuildToghether">
                <div className="isContent">
                    <p className="content !font-medium">
                        {apiData?.content?.cta_section_description?.[lang] || "Contact us to schedule a consultation and begin your cloud migration journey." }
                    </p>
                    <div className="buttons-wrapper">
                        <Link href={CalendlyLink} target='_blank'>{apiData?.content?.cta_section_button?.[lang] || "Start a Free Review" }</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}