import Image from 'next/image';
import Link from 'next/link';
import FeatureHighlights from '@/components/FeatureHighlights';
import FeatureHighlights2 from '@/components/FeatureHighlights2';

export default function CloudMigration() {
    return (
        <div>
            <div className="industriesServeMainWrapper webDev">
                <div className="is-heading gradient-background"><h3>Cloud Migration Made Simple, Secure, and Scalable</h3></div>
                <div className="isContent">
                    <div className="itemsWrapper">
                        <p>
                            We help businesses move to the cloud with confidence – minimizing disruption while maximizing long-term value.
                        </p>
                        <Image src="/images/cloud-image1.png" width={6000} height={6000} alt="cloud image" />
                    </div>
                </div>
            </div>
            <div className="industriesServeMainWrapper featuresHighlight">
                <div className="is-heading gradient-background"><h3>Key Features</h3></div>
                <div className="mt-5">
                    <div className="itemsWrapper">
                        <FeatureHighlights
                            imageUrl="/icons/downtime.png"
                            title="Zero Downtime Migration"
                            description="Our staged migration approach ensures business continuity throughout the process"
                        />
                        <FeatureHighlights
                            imageUrl="/icons/data-transfer.png"
                            title="Secure Data Transfer & Compliance"
                            description="We adhere to top security protocols and industry compliance standards like GDPR, HIPAA, and SOC 2"
                        />
                        <FeatureHighlights
                            imageUrl="/icons/cloud-platform.png"
                            title="Cloud Platform Flexibility"
                            description="We work across AWS, Azure, Google Cloud, and hybrid environments – you choose, we optimize"
                        />
                        <FeatureHighlights
                            imageUrl="/icons/optimization.png"
                            title="Post-Migration Optimization"
                            description="We fine-tune performance, cost, and security after deployment – not just lift and shift"
                        />
                    </div>
                </div>
            </div>
            <div className="industriesServeMainWrapper timelineWrapper">
                <div className="is-heading gradient-background"><h3>Migration Pathway</h3></div>
                <div className="isContentTimeLine">
                    <div className="itemsWrapper">
                        <div className="timeline">
                            <div className='circle circle-top'></div>
                            <div className="container left">
                                <div className="timeline-content">
                                    <h2>Assessment & Planning</h2>
                                    <p>Conduct a thorough analysis of your current infrastructure and define migration objectives.</p>
                                </div>
                            </div>
                            <div className="container right">
                                <div className="timeline-content">
                                    <h2>Architecture & Strategy</h2>
                                    <p>Develop a customized cloud architecture that aligns with your business goals and compliance requirements.</p>
                                </div>
                            </div>
                            <div className="container left">
                                <div className="timeline-content">
                                    <h2>Migration Execution</h2>
                                    <p>Implement migration with minimal disruptions, ensuring data integrity and security.</p>
                                </div>
                            </div>
                            <div className="container right last">
                                <div className="timeline-content">
                                    <h2>Optimization & Ongoing Support</h2>
                                    <p>Provide post migration testing, validation, optimization and ongoing support to maximize the benefits of your cloud environment.</p>
                                </div>
                            </div>
                            <div className='circle circle-bottom'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="industriesServeMainWrapper featuresHighlight migrationIcons cmsWork">
                <div className="is-heading gradient-background"><h3>Migration Scenarios</h3></div>
                <div className="">
                    <div className="itemsWrapper1 itemsWrapper">
                        <ul>
                            <li>Legacy System Modernization</li>
                            <li>On-Prem to Cloud Infrastructure</li>
                            <li>Cloud-to-Cloud Migrations</li>
                            <li>Hybrid Cloud Solutions</li>
                        </ul>
                    </div>
                    <div className="itemsWrapper">
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
                    <p className="content">
                        Contact us to schedule a consultation and begin your cloud migration journey.
                    </p>
                    <div className="buttons-wrapper">
                        <Link href="#">Request a Compliance Consultation</Link>
                        <Link href="#">Book a Free Cloud Privacy Assessment</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}